import signInSlice from "../../common/store/features/user/slices/signInSlice";

export interface SignInViewModel {
  email: string;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  signInState: ReturnType<typeof signInSlice>
  onSubmit: () => void;
  onClick: () => void;
}
