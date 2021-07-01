import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../Pages/SplashScreen";
import MainScreen from "../Pages/MainScreen/MainScreen";

type StackParamList = {
  SplashScreen: undefined;
  MainScreen: undefined;
  // Feed: { sort: "latest" | "top" } | undefined;
};

const Stack = createStackNavigator<StackParamList>();

export default function StackNavigator() {
  // const config = { animation: "spring", config: { duration: 500 } };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          // gestureEnabled: false,
          gestureDirection: "vertical",
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
