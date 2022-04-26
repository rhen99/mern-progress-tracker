import { createContext, useReducer } from "react";
import UserReducer from "./userReducer";
import { registerUser, loginUser, getUser } from "./authService";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  message: "",
};
export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const register = async (userData) => {
    const response = await registerUser(userData);

    if (response.status === 400) {
      dispatch({
        type: "AUTH_FAILED",
        payload: response.data.message,
      });
    } else {
      dispatch({
        type: "REGISTER_USER",
        payload: response,
      });
    }
  };
  const login = async (userData) => {
    const response = await loginUser(userData);

    if (response.status === 400) {
      dispatch({
        type: "AUTH_FAILED",
        payload: response.data.message,
      });
    } else {
      dispatch({
        type: "LOGIN_USER",
        payload: response,
      });
    }
  };
  const getUserData = async (token) => {
    const response = await getUser(token);

    if (response.status === 401) {
      dispatch({
        type: "AUTH_FAILED",
        payload: response.data.message,
      });
    } else {
      dispatch({
        type: "GET_USER",
        payload: response,
      });
    }
    reset();
  };
  const reset = () => {
    dispatch({
      type: "RESET",
    });
  };
  const logout = () => {
    dispatch({
      type: "LOGOUT_USER",
    });
    localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        message: state.message,
        isError: state.isError,
        isSuccess: state.isSuccess,
        register,
        login,
        reset,
        logout,
        getUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
