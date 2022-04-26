const ProjectReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
    case "GET_PROJECTS":
      return {
        ...state,
        projects: action.payload,
      };
  }
};
export default ProjectReducer;
