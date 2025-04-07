import httpRequest from "@/utils/httpRequest";

export const getProfile = async (username) => {
  const response = await httpRequest.get(`/users/${username}`);
  return response.data;
};

export const editProfile = async (username, data) => {
  const response = await httpRequest.put(`/users/${username}`, data);
  return response.data;
};
