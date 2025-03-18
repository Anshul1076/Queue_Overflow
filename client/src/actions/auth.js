// actions/auth.js (signup and login actions)
import * as api from "../api";
import { auth } from "../reducers/auth";
import { fetchCurrentUser } from "../reducers/currentUser";
import toast from "react-hot-toast";

export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    console.log("data", data);

    dispatch(auth(data));
    dispatch(fetchCurrentUser(JSON.parse(localStorage.getItem("Profile"))));

    toast.success("User registered successfully");
    navigate("/");
  } catch (error) {
    console.error("Signup Error:", error);

    if (error.response?.status === 409) {
      toast.error("User already exists. Please log in.");
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  }
};

export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    console.log("data", data);

    dispatch(auth(data));
    dispatch(fetchCurrentUser(JSON.parse(localStorage.getItem("Profile"))));

    toast.success("Logged in successfully");
    navigate("/");
  } catch (error) {
    console.error("Login Error:", error);

    if (error.response?.status === 401) {
      toast.error("Invalid credentials. Please try again.");
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  }
};
