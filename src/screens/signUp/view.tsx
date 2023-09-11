import React from "react";
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import useSignUpViewModel from "./view.model";
import {s} from "react-native-wind";
import DateTimePickerView from "../../common/components/datePicker/view";
import LoadingView from "../../common/components/loading/view";
import TextInputView from "../../common/components/textInput/view";
import TouchableOpacityView from "../../common/components/touchableOpacity/view";

const SignUpView = () => {
  const {
    email,
    password,
    setEmail,
    player,
    setPlayer,
    setPassword,
    onSubmit,
    confirmPassword,
    goBack,
    signUpState,
    setConfirmPassword,
    setUsername,
    username,
    onDateChange,
  } = useSignUpViewModel();
  return (
    <SafeAreaView style={s`flex-1 h-full w-full bg-#ddd9ce items-center`}>
      {signUpState.isLoading ? (
        <View style={s`flex-1 items-center justify-center`}>
          <LoadingView />
        </View>
      ) : (
        <ScrollView style={s`flex-1 h-full w-full bg-#ddd9ce`}>
          <View style={styles.bannerContainer}>
            <TouchableOpacityView
              props={{
                disabled: signUpState?.isLoading,
                label: "Go Back",
                onPress: goBack,
              }}
            />
            <TextInputView
              props={{
                label: "E-mail",
                placeholder: "type e-mail here",
                value: email,
                setValue: setEmail,
              }}
            />
            <TextInputView
              props={{
                label: "Username",
                placeholder: "type your username here",
                value: username,
                setValue: setUsername,
              }}
            />
            <TextInputView
              props={{
                label: "Password",
                placeholder: "type password here",
                value: password,
                setValue: setPassword,
              }}
            />
            <TextInputView
              props={{
                label: "Confirm Password",
                placeholder: "type password here",
                value: confirmPassword,
                setValue: setConfirmPassword,
              }}
            />
            <TextInputView
              props={{
                label: "Player name",
                placeholder: "type your player name here",
                value: player?.name,
                setValue: (newName: string) =>
                  setPlayer((prevPlayer) => ({
                    ...prevPlayer,
                    name: newName,
                  })),
              }}
            />
            <TextInputView
              props={{
                label: "Player position",
                placeholder: "type your player position here",
                value: player?.position,
                setValue: (newPosition) =>
                  setPlayer((prevPlayer) => ({
                    ...prevPlayer,
                    position: newPosition,
                  })),
              }}
            />
            <Text style={styles.datePicker}>Birth date:</Text>
            <DateTimePickerView
              props={{
                date: player.birthDate,
                mode: "date",
                display: "default",
                onDateChange: onDateChange,
              }}
            />
            <TouchableOpacityView
              props={{
                disabled: signUpState?.isLoading,
                label: "SignUp",
                onPress: onSubmit,
              }}
            />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default SignUpView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#ddd9ce",
    alignItems: "center",
    image: {
      width: 350,
      height: 380,
    },
  },
  bannerContainer: {
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: "#8BCB3B",
  },
  datePicker: {
    color: "#fff",
    textAlign: "left",
    marginTop: 20,
    fontSize: 20,
  },
});
