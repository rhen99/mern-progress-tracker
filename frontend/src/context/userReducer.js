const UserReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
    case "REGISTER_USER":
      return {
        message: "",
        user: action.payload,
        isSuccess: true,
        isError: false,
      };
    case "LOGIN_USER":
      return {
        message: "",
        user: action.payload,
        isSuccess: true,
        isError: false,
      };
    case "LOGOUT_USER":
      return {
        message: "",
        user: null,
        isSuccess: true,
        isError: false,
      };
    case "GET_USER":
      return {
        message: "",
        user: action.payload,
        isSuccess: true,
        isError: false,
      };
    case "AUTH_FAILED":
      return {
        ...state,
        isError: true,
        isSuccess: false,
        message: action.payload,
      };
    case "RESET":
      return {
        ...state,
        isError: false,
        isSuccess: false,
        message: "",
      };
  }
};
export default UserReducer;
