import axios from "axios";

const API_URL = "/api/users";
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData);

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    }
  } catch (error) {
    const message = error.response;

    return message;
  }
};
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(API_URL + "/login", userData);

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    }
  } catch (error) {
    const message = error.response;

    return message;
  }
};
export const checkUser = async (token) => {
  try {
    const response = await axios.get(API_URL + "/user", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    return false;
  }
};
