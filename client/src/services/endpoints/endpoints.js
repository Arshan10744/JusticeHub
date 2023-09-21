import { axiosInstance } from "services";

export const login_user = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/login", data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const register_user = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/register", data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const me = async () => {
  try {
    const response = axiosInstance.get("/me");
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const get_All_Operators = async () => {
  try {
    const response = await axiosInstance.get("/operators");
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const create_New_Operator = async (data) => {
  try {
    const response = await axiosInstance.post("/operators", data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const delete_Operator = async (_id) => {
  try {
    const response = await axiosInstance.delete(`/operators/${_id}`);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const get_All_Investigators = async () => {
  try {
    const response = await axiosInstance.get("/investigators");
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const create_New_Investigator = async (data) => {
  try {
    const response = await axiosInstance.post("/investigators", data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};