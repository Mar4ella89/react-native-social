// import { StatusBar } from "expo-status-bar";

import * as SplashScreen from "expo-splash-screen";

import { Provider } from "react-redux";
import React, { useEffect } from "react";

import Main from "./Components/Main";

import { useFont } from "./hooks/useFont";

import { store } from "./redux/store";

export default function App() {
  const fontsLoaded = useFont();

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
