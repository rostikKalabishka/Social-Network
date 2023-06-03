import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "17bd7917-297f-4330-b11b-b3c3833885a4",
  },
});
export const getUsers = (currentPage, pageSize) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`);
};

export const getProfileUser = (profileId) => {
  return instance.get(`profile/${profileId}`);
};

export const getAuthMe = () => {
  return instance.get(`auth/me`);
};

export const getUnFollow = (id) => {
  return instance.delete(`follow/${id}`);
};

export const getFollow = (id) => {
  return instance.post(`follow/${id}`, {});
};

export const getUser = (userId) => {
  return instance.get(`${userId}`).then();
};
