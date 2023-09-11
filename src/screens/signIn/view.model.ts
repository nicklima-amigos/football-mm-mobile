import React, {useState} from "react";
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

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const onSubmit = async () => {
    try {
      dispatch(signInStart());
      const response = await signIn({email, password});
      console.log("response", response);
      dispatch(signInSuccess(response));
    } catch (e: any) {
      console.log(e);
      dispatch(signInFailure(e.message || "Something went wrong"));
      Alert.alert("Oops!", "Something went wrong");
    } finally {
      setEmail("");
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
    email,
    setEmail,
    password,
    setPassword,
    onSubmit,
    onClick,
    signInState,
  };
};

export default useSignInViewModel;
