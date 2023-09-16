import signInSlice from "../../common/store/features/user/slices/signInSlice";

export interface SignInViewModel {
  usernameOrEmail: string;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setUsernameOrEmail: React.Dispatch<React.SetStateAction<string>>;
  signInState: ReturnType<typeof signInSlice>
  onSubmit: () => void;
  onClick: () => void;
}
