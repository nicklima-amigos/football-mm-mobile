import React from "react";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { store } from "./src/common/store/store";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/common/routes";
import { Provider } from "react-redux";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <Provider store={store}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Routes />
    </Provider>
  );
}
