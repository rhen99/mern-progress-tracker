import { createContext, useReducer } from "react";
import ProjectReducer from "./projectReducer";
import { getAllProjects } from "./projectService";

const initialState = {
  projects: [],
  project: {},
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
  const addProject = async () => {};
  const removeProject = async (id) => {};
  const updateProject = async (id) => {};

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        project: state.project,
        getProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
