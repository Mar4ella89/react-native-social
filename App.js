import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font/build/FontHooks";
import * as SplashScreen from "expo-splash-screen";

import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from "./router";

export default function App() {
  const routing = useRoute(true);

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
  return <NavigationContainer>{routing}</NavigationContainer>;
}
