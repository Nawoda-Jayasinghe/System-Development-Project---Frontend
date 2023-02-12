import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn:false,token:null,role:null },
  reducers: {
    login(state,actions) {
      state.isLoggedIn = true;
      state.role = actions.payload.role;
      state.token = actions.payload.accessToken;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = null
    },
  },
});
export const authActions = authSlice.actions;

export default authSlice;