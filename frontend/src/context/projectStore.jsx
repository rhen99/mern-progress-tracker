import { createContext, useReducer } from "react";
import ProjectReducer from "./projectReducer";
import {
  getAllProjects,
  postProject,
  deleteProject,
  putProject,
  getProject,
} from "./projectService";

const initialState = {
  projects: [],
  project: null,
  isError: false,
  message: "",
};

export const ProjectContext = createContext(initialState);

export const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  const getProjects = async () => {
    const response = await getAllProjects();

    dispatch({
      type: "GET_PROJECTS",
      payload: response,
    });
  };
  const addProject = async (newProject) => {
    const response = await postProject(newProject);
    if (response.status === 400) {
      dispatch({
        type: "PROJECT_ERROR",
        payload: response.data.message,
      });
    } else {
      dispatch({
        type: "ADD_PROJECT",
        payload: response,
      });
    }
  };
  const removeProject = async (id) => {
    const response = await deleteProject(id);

    if (response.status === 400) {
      dispatch({
        type: "PROJECT_ERROR",
        payload: response.data.message,
      });
    } else {
      dispatch({
        type: "DELETE_PROJECT",
        payload: id,
      });
    }
  };
  const singleProject = async (id) => {
    const response = await getProject(id);
    dispatch({
      type: "GET_PROJECT",
      payload: response,
    });
  };
  const updateProject = async (id, updatedProject) => {
    const response = await putProject(id, updatedProject);

    if (response.status === 400) {
      dispatch({
        type: "PROJECT_ERROR",
        payload: response.data.message,
      });
    }
  };
  const clearProject = () => {
    dispatch({
      type: "CLEAR_PROJECT",
    });
  };

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        project: state.project,
        getProjects,
        addProject,
        removeProject,
        singleProject,
        updateProject,
        clearProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
