import {configureStore} from "@reduxjs/toolkit";
import signInSlice from "./features/user/slices/signInSlice";
import signUpSlice from "./features/user/slices/signUpSlice";

export const store = configureStore({
  reducer: {
    signIn: signInSlice,
    signUp: signUpSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
