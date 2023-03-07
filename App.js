import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font/build/FontHooks";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { View } from "react-native";

import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";

export default function App() {
  const [fontsLoader] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoader) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }
  return (
    <>
      {/* <RegistrationScreen /> */}
      <LoginScreen />
      {/* <StatusBar style="auto" /> */}
    </>
  );
}
