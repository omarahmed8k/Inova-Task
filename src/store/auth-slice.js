import { createSlice } from "@reduxjs/toolkit";
// import endPoint from "../services/endPoint";
// const baseUrl = endPoint.imgEndPoint;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    access: localStorage.getItem("access"),
    refresh: localStorage.getItem("refresh"),
    userId: localStorage.getItem("userId"),
    userType: localStorage.getItem("userType"),
  },
  reducers: {
    login(state, action) {
      localStorage.setItem("access", action.payload.access);
      localStorage.setItem("refresh", action.payload.refresh);
      localStorage.setItem("userId", action.payload.userId);
      localStorage.setItem("userType", action.payload.userType);
      state.access = localStorage.getItem("access");
      state.refresh = localStorage.getItem("refresh");
      state.userId = localStorage.getItem("userId");
      state.userType = localStorage.getItem("userType");
    },

    logout(state) {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("userId");
      localStorage.removeItem("userType");
      localStorage.clear();

      state.access = localStorage.getItem("access");
      state.refresh = localStorage.getItem("refresh");
      state.userId = localStorage.getItem("userId");
      state.userType = localStorage.getItem("userType");
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
