import * as AuthApi from "../api/AuthRequests";
export const logIn = (formData, navigate) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.logIn(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
    alert("logged in");
    navigate("../home", { replace: true });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
    alert("invalid credentials, please check again");
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
    navigate("../home", { replace: true });
    alert("user registered successfully");
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
    alert("User not registered");
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: "LOG_OUT" });
};
