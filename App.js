// import { StatusBar } from "expo-status-bar";

import React from "react";
import { Provider } from "react-redux";

import Main from "./Components/Main";

import { useFont } from "./hooks/useFont";

import { store } from "./redux/store";

export default function App() {
  const { appIsReady, onLayoutRootView } = useFont();

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <Main onLayout={onLayoutRootView} />
    </Provider>
  );
}
