import {useState} from "react";
import {Alert} from "react-native";
import {SignUpViewModel} from "./models";
import {useNavigation} from "@react-navigation/native";
import {PlayerModel} from "../../common/models/player/player.model";
import {useAppDispatch, useAppSelector} from "../../common/hooks/redux";
import {
  signUpStart,
  signUpSuccess,
} from "../../common/store/features/user/slices/signUpSlice";
import {signUp} from "../../common/repositories/signUp.repository";

const useSignUpViewModel = (): SignUpViewModel => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const signUpState = useAppSelector((state) => state.signUp);
  const [email, setEmail] = useState<string>("");
  const [player, setPlayer] = useState<PlayerModel>({} as PlayerModel);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const onSubmit = async () => {
    try {
      dispatch(signUpStart());
      const response = await signUp({
        email,
        password,
        confirmPassword,
        username,
        player,
      });
      dispatch(signUpSuccess(response));
      navigation.navigate("signIn");
    } catch (e) {
      console.log(e);
      Alert.alert("Oops!", "Something went wrong");
    } finally {
      setEmail("");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setPlayer({} as PlayerModel);
    }
  };

  const onDateChange = (selectedDate: Date) => {
    if (selectedDate !== undefined) {
      setPlayer({...player, birthDate: selectedDate});
    }
  };
  const goBack = async () => {
    try {
      navigation.goBack();
    } catch (e) {
      console.log(e);
      Alert.alert("Oops!", "Something went wrong");
    }
  };
  return {
    email,
    setEmail,
    password,
    confirmPassword,
    setConfirmPassword,
    setUsername,
    player,
    setPlayer,
    username,
    setPassword,
    signUpState,
    onSubmit,
    goBack,
    onDateChange,
  };
};

export default useSignUpViewModel;
