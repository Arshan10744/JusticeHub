import { R2XX, R4XX } from "../API";
import {
  createNewFIR,
  fetchActive,
  fetchAllFIRs,
  fetchCaseByCaseNo,
  fetchCaseById,
  fetchCaseByOperatorId,
  fetchClosed,
  fetchCompleted,
  fetchCounts,
  fetchInvestigatorId,
  fetchPending,
  getUserByCNIC,
  updateInvestigatorAvailability,
  approveFIRandAssignment,
} from "../services";
import cloudinary from "../configs/cloudinaryConfig";
import { sanitizeFir, sanitizeFirs } from "../utils";

export const createFir = async (req, res, next) => {
  try {
    let upload;
    let { caseNo } = req.body;

    if (await fetchCaseByCaseNo(caseNo)) {
      return R4XX(res, 409, "CASE-ALREADY-EXISTS", `${caseNo} already exists`);
    }

    if (req.file) {
      //Save file if exists.
      upload = await cloudinary.upload(req.file.path, {
        folder: "files",
        resource_type: "auto",
      });
    }

    let complainantId = await getUserByCNIC(req.body?.complainantCNIC);

    let payload = {
      complainantName: req.body?.complainantName,
      complainantCNIC: req.body?.complainantCNIC,
      complainantId: complainantId?._id || undefined,
      complainantPhone: req.body?.complainantPhone,
      datetime: req.body?.datetime,
      applicationType: req.body?.applicationType,
      details: req.body?.details,
      location: req.body?.location,
      suspects: req.body?.suspects,
      relevantDocs: upload?.secure_url,
      operatorId: req?.user,
      caseNo: req.body.caseNo,
    };

    let fir = await createNewFIR(payload);

    R2XX(res, 201, "SUCCESS", "FIR created successfully", {
      fir: sanitizeFir(fir),
    });
  } catch (error) {
    next(error);
  }
};

export const getAllFIRs = async (req, res, next) => {
  try {
    let firs = [];
    switch (req.role) {
      case "admin":
        firs = await fetchAllFIRs();
        break;
      case "operator":
        firs = await fetchCaseByOperatorId(req.user);
        break;
    }
    R2XX(res, 200, "SUCCESS", "FIRs list in payload", {
      firs: sanitizeFirs(firs),
    });
  } catch (error) {
    next(error);
  }
};

export const getActiveFIRs = async (req, res, next) => {
  try {
    let firs = await fetchActive();
    R2XX(res, 200, "SUCCESS", "Active FIRs list in payload", {
      firs: sanitizeFirs(firs),
    });
  } catch (error) {
    next(error);
  }
};

export const getPendingFIRs = async (req, res, next) => {
  try {
    let firs = await fetchPending();
    R2XX(res, 200, "SUCCESS", "Pending FIRs list in payload", {
      firs: sanitizeFirs(firs),
    });
  } catch (error) {
    next(error);
  }
};

export const getCompletedFIRs = async (req, res, next) => {
  try {
    let firs = await fetchCompleted();
    R2XX(res, 200, "SUCCESS", "Completed FIRs list in payload", {
      firs: sanitizeFirs(firs),
    });
  } catch (error) {
    next(error);
  }
};

export const getClosedFIRs = async (req, res, next) => {
  try {
    let firs = await fetchClosed();
    R2XX(res, 200, "SUCCESS", "Closed FIRs list in payload", {
      firs: sanitizeFirs(firs),
    });
  } catch (error) {
    next(error);
  }
};

export const getFIRCounts = async (req, res, next) => {
  try {
    let counts = await fetchCounts();
    R2XX(res, 200, "SUCCESS", "Counts of FIRs in payload", {
      counts,
    });
  } catch (error) {
    next(error);
  }
};

export const approveFIRandAssignInvestigator = async (req, res, next) => {
  try {
    const fir = await fetchCaseById(req.params.caseId);

    if (!fir) {
      return R4XX(
        res,
        404,
        "NOT-FOUND",
        `Case with id ${req.params.caseId} not found.`
      );
    }

    const investigator = await fetchInvestigatorId(req?.body?.investigatorId);

    if (!investigator) {
      return R4XX(
        res,
        404,
        "NOT-FOUND",
        `Investigator with id ${req.body.investigatorId} not found.`
      );
    }

    if (!investigator?.availability) {
      return R4XX(
        res,
        400,
        "RESOURCE-ALREADY-OCCUPIED",
        `Investigator with CNIC ${investigator?.CNIC} is already occupied.`
      );
    }

    await Promise.all([
      approveFIRandAssignment(req.params.caseId, req.body.investigatorId),
      updateInvestigatorAvailability(investigator._id, false), //Setting the availability of INVESTIGATOR to false.
    ]);

    return R2XX(
      res,
      200,
      "SUCCESS",
      `Investigator with CNIC ${investigator?.CNIC} is assigned to Case #${fir?.caseNo}`
    );
  } catch (error) {
    next(error);
  }
};
