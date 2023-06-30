import { R2XX, R4XX } from "../API";
import { createUser, getUserByEmail } from "../services";
import { USER_ALREADY_EXIST } from "../constants";
import { issueJWT, verifyPassword } from "../utils";

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);
    // -------------------------------------------------------------------------->>
    if (!user) {
      return R4XX(res, 401, "UN-AUTHORIZED", `${email} is unauthorized!`);
    }
    // -------------------------------------------------------------------------->>
    let isVerify = await verifyPassword(password, user?.password);
    if (!isVerify) {
      return R4XX(res, 401, "UN-AUTHORIZED", `${email} is unauthorized!`);
    }
    // -------------------------------------------------------------------------->>
    let jwt = issueJWT(user, "2h");
    
    return R2XX(res, 200, "SUCCESS", "User logged in successfully.", {
      user,
      jwt,
    });
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await getUserByEmail(email);
    if (user) {
      return R4XX(
        res,
        409,
        USER_ALREADY_EXIST.type,
        USER_ALREADY_EXIST.message
      );
    }
    await createUser(req.body);
    return R2XX(
      res,
      201,
      "SUCCESS",
      "Resource registered successfully!",
      req.body
    );
  } catch (error) {
    next(error);
  }
};