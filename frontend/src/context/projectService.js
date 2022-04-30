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
export const postProject = async (newProject) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));

    const response = await axios.post(API_URL, newProject, {
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
export const putProject = async (id, updatedProject) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));

    const response = await axios.put(`${API_URL}/${id}`, updatedProject, {
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
export const deleteProject = async (id) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));

    const response = await axios.delete(`${API_URL}/${id}`, {
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
export const getProject = async (id) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));

    const response = await axios.get(`${API_URL}/${id}`, {
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
