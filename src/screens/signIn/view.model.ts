import {useState} from "react";
import {Alert} from "react-native";
import {SignInViewModel} from "./models";
import {useNavigation} from "@react-navigation/native";
import {useAppSelector, useAppDispatch} from "../../common/hooks/redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../common/store/features/user/slices/signInSlice";
import {signIn} from "../../common/repositories/signIn.repository";

const useSignInViewModel = (): SignInViewModel => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const signInState = useAppSelector((state) => state.signIn);

  const [usernameOrEmail, setUsernameOrEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const onSubmit = async () => {
    try {
      dispatch(signInStart());
      const response = await signIn({usernameOrEmail, password});
      console.log("response", response);
      dispatch(signInSuccess(response));
    } catch (e: any) {
      console.log(e);
      dispatch(signInFailure(e.message || "Something went wrong"));
      Alert.alert("Oops!", "Something went wrong");
    } finally {
      setUsernameOrEmail("");
      setPassword("");
    }
  };

  const onClick = () => {
    try {
      navigation.navigate("signUp");
    } catch (e) {
      console.log(e);
      Alert.alert("Oops!", "Something went wrong");
    }
  };

  return {
    usernameOrEmail,
    setUsernameOrEmail,
    password,
    setPassword,
    onSubmit,
    onClick,
    signInState,
  };
};

export default useSignInViewModel;
