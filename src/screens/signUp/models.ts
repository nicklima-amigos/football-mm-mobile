import {PlayerModel} from "../../common/models/player/player.model";
import signUpSlice from "../../common/store/features/user/slices/signUpSlice";

export interface SignUpViewModel {
  email: string;
  username: string;
  confirmPassword: string;
  password: string;
  player: PlayerModel;
  setPlayer: React.Dispatch<React.SetStateAction<PlayerModel>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  signUpState: ReturnType<typeof signUpSlice>;
  onSubmit: () => void;
  onDateChange: (selectedDate: Date) => void;
  goBack: () => void;
}
