import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: null,
};

const LoginLogoutSlice = createSlice({
  name: "loginlogout",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => (state.value = null),
  },
});

export const { login, logout } = LoginLogoutSlice.actions;
export default LoginLogoutSlice.reducer;
