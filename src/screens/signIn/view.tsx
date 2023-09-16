import React from "react";
import FootballManagerBanner from "../../common/assets/banner.png";
import {s} from "react-native-wind";
import {Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import useSignInViewModel from "./view.model";
import TouchableOpacityView from "../../common/components/touchableOpacity/view";
import TextInputView from "../../common/components/textInput/view";
import LoadingView from "../../common/components/loading/view";

const SignInView = () => {
  const {
    usernameOrEmail,
    password,
    setUsernameOrEmail,
    setPassword,
    onSubmit,
    onClick,
    signInState,
  } = useSignInViewModel();
  console.log("signInState", signInState);
  return (
    <SafeAreaView style={s`flex-1 h-full w-full bg-#ddd9ce items-center`}>
      {signInState.isLoading === true ? (
        <View style={s`flex-1 items-center justify-center`}>
          <LoadingView />
        </View>
      ) : (
        <>
          <Image source={FootballManagerBanner} style={s`w-350 h-380`} />
          <View style={styles.bannerContainer}>
            <TextInputView
              props={{
                label: "E-mail",
                placeholder: "type e-mail here",
                value: usernameOrEmail,
                setValue: setUsernameOrEmail,
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
            <TouchableOpacityView
              props={{
                disabled: signInState?.isLoading,
                label: "SignIn",
                onPress: onSubmit,
              }}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 35,
              }}>
              <Text style={s`text-white text-xl`}>Want an account?</Text>
              <TouchableOpacityView
                props={{
                  style: s`bg-transparent `,
                  disabled: signInState?.isLoading,
                  label: "SignUp",
                  onPress: onClick,
                }}
              />
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default SignInView;

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
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 20,
    backgroundColor: "#8BCB3B",
  },
  textLabel: {
    color: "#fff",
    textAlign: "left",
    marginTop: 20,
    fontSize: 20,
  },
  textInput: {
    backgroundColor: "white",
    color: "black",
    fontSize: 16,
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
  },
  buttonContainer: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 35,
    marginBottom: 10,
  },
  textButton: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
