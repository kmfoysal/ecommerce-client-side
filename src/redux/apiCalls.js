import { publicRequest } from "../requestMethod";
import { loginFailure, loginStart, loginSuccess, registrationFailure, registrationSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const registration = async (dispatch, user) => {
  // dispatch(loginStart());
  try {
    const res = await publicRequest.post("/register", user);
    dispatch(registrationSuccess(res.data));
  } catch (err) {
    dispatch(registrationFailure());
  }
};
