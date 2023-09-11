import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    signUpStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    signUpSuccess(state, action) {
      state.user = {
        ...action.payload,
        player: {
          ...action.payload.player,
          birthDate: action.payload.player.birthDate,
        },
      };
      state.isLoading = false;
    },
    signUpFailure(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {signUpStart, signUpSuccess, signUpFailure} = signUpSlice.actions;
export default signUpSlice.reducer;
