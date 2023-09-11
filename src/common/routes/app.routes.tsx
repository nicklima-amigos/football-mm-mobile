import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SignInView from "../../screens/signIn/view";
import SignUpView from "../../screens/signUp/view";

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="signIn" screenOptions={{headerShown: false}}>
      <Screen name="signIn" component={SignInView} />
      <Screen name="signUp" component={SignUpView} />
    </Navigator>
  );
}
