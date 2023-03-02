import { useState, useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font/build/FontHooks";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen() {
  const [state, setState] = useState(initialState);
  //   const [isReady, setIsReady] = useState(false);
  const [dimensions, setdimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  const hadleInfo = () => {
    setState(initialState);
  };

  const [fontsLoader] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;
      setdimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBg}
          source={require("../assets/images/PhotoBG.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={-50}
          >
            <View style={styles.formContainer}>
              <Text style={styles.title}>Войти</Text>
              <View style={{ ...styles.form, width: dimensions }}>
                <View style={styles.textInputeWrapper}>
                  <TextInput
                    style={{ ...styles.formInput, marginBottom: 16 }}
                    textAlign={"left"}
                    placeholder={"Адрес электронной почты"}
                    placeholderTextColor={"#BDBDBD"}
                    value={state.email}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        email: value,
                      }))
                    }
                  />

                  <View>
                    <TextInput
                      style={styles.formInput}
                      textAlign={"left"}
                      placeholder={"Пароль"}
                      placeholderTextColor={"#BDBDBD"}
                      secureTextEntry={true}
                      value={state.password}
                      onChangeText={(value) =>
                        setState((prevState) => ({
                          ...prevState,
                          password: value,
                        }))
                      }
                    />
                    <Text style={styles.passwordText}>Показать</Text>
                  </View>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.button}
                  onPress={hadleInfo}
                >
                  <Text style={styles.buttonTitle}>Войти</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.feedBack}>
                Нет аккаунта? Зарегистрироваться
              </Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  formContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 132,
    alignItems: "center",
  },

  form: {
    // marginHorizontal: 16,
  },

  title: {
    fontFamily: "Roboto-Regular",
    fontSize: 30,
    fontStyle: "normal",
    textAlign: "center",
    marginTop: 32,
    color: "#212121",
  },
  textInputeWrapper: {
    marginTop: 32,
    marginBottom: 42,
  },
  formInput: {
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontStyle: "normal",

    color: "#212121",
    paddingLeft: 16,
  },

  passwordText: {
    position: "absolute",
    right: 16,
    top: 14,

    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",

    color: "#1B4371",
  },

  button: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    lineHeight: 19,

    color: "#fff",
  },
  feedBack: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontStyle: "normal",
    textAlign: "center",
    marginTop: 16,
    color: "#1B4371",
  },
});
