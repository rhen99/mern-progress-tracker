import axios from "axios";

const API_URL = "/api/projects";

export const getAllProjects = async () => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));

    const response = await axios.get(API_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    const message = error.response;

    if (error.message.status === 401) {
      localStorage.removeItem("token");
    }

    return message;
  }
};
const postProject = async () => {};
const putProject = async (id) => {};
const deleteProject = async (id) => {};
