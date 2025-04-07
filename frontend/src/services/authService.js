import httpRequest from "@/utils/httpRequest";

export const register = async (data) => {
  const response = await httpRequest.post("/auth/register", data);
  if (response.data.status === "success") {
    httpRequest.setToken(response.data.data.access_token);
    return true;
  }
  return false;
};

export const login = async (data) => {
  const response = await httpRequest.post("/auth/login", data);
  if (response.data.status === "success") {
    httpRequest.setToken(response.data.data.access_token);
    return true;
  }
  return false;
};

export const logout = async () => {
  const response = await httpRequest.post("/auth/logout");
  if (response.data.status === "success") {
    localStorage.removeItem("token");
    return true;
  }
  return false;
};

export const checkEmail = async (email, id) => {
  const response = await httpRequest.get(
    `/auth/check-email?email=${email}&exclude_id=${id}`
  );
  return response.data.data.exists;
};

export const checkUsername = async (username, id) => {
  const response = await httpRequest.get(
    `/auth/check-username?username=${username}&exclude_id=${id}`
  );
  return response.data.data.exists;
};

export const checkPhone = async (phone, id) => {
  const response = await httpRequest.get(
    `/auth/check-phone?phone=${phone}&exclude_id=${id}`
  );
  return response.data.data.exists;
};

export const getUser = async () => {
  const response = await httpRequest.get("/auth/me");
  if (response.data.status === "success") return response.data.data;
  return null;
};
