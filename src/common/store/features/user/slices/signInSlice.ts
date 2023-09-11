import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    signInStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    signInSuccess(state, action) {
      state.user = action.payload;
      console.log("state 3", state, action);
      state.isLoading = false;
    },
    signInFailure(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {signInStart, signInSuccess, signInFailure} = signInSlice.actions;
export default signInSlice.reducer;
