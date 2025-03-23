import {
  loginSuccess,
  loginFailure,
  logout,
  registerSuccess,
  registerFailure,
} from "../slices/authSlice";

import { findUser, saveUser } from "../../utils/authUtils";

// login action
export const login = (credentials) => (dispatch) => {
  try {
    const { email, password } = credentials;
    const user = findUser(email, password);

    if (user) {
      dispatch(loginSuccess({ email: user.email }));
      return { success: true };
    } else {
      dispatch(loginFailure("Invalid email or password"));
      return { success: false, error: "Invalid email or password" };
    }
  } catch (error) {
    dispatch(loginFailure(error.message || "Login failed"));
    return { success: false, error: error.message || "Login failed" };
  }
};

// Register Action

export const register = (userData) => (dispatch) => {
  try {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.email === userData.email);
    if (existingUser) {
      dispatch(registerFailure("User with this email already exists"));
      return { success: false, error: "User with this email already exists" };
    }

    saveUser(userData);
    dispatch(registerSuccess());
    return { success: true };
  } catch (error) {
    dispatch(registerFailure(error.message || "Registration failed"));
    return { success: false, error: error.message || "Registration failed" };
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch(logout());
};
