const ProjectReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
    case "GET_PROJECTS":
      return {
        ...state,
        projects: action.payload,
      };
    case "GET_PROJECT":
      return {
        ...state,
        project: action.payload,
      };
    case "ADD_PROJECT":
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case "DELETE_PROJECT":
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project._id !== action.payload
        ),
      };
    case "PROJECT_ERROR":
      return {
        ...state,
        isError: true,
        message: action.payload,
      };
    case "UPDATE_PROJECT":
      return {
        ...state,
        project: action.payload,
      };
    case "CLEAR_PROJECT":
      return {
        ...state,
        project: null,
      };
  }
};
export default ProjectReducer;
