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

import { useDispatch } from "react-redux";

import { authSignInUser } from "../../redux/auth/authOperation";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
  const [state, setState] = useState(initialState);

  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [dimensions, setdimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  const dispatch = useDispatch();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const hadleSubmit = () => {
    dispatch(authSignInUser(state));
    setState(initialState);
  };

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;
      setdimensions(width);
    };
    const widthAuto = Dimensions.addEventListener("change", onChange);
    return () => widthAuto?.remove();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBg}
          source={require("../../assets/images/PhotoBG.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={-28}
          >
            <View style={styles.formContainer}>
              <View style={{ ...styles.form, width: dimensions }}>
                <Text style={styles.title}>Войти</Text>
                <View style={styles.textInputWrapper}>
                  <TextInput
                    style={[
                      {
                        ...styles.formInput,
                        marginBottom: 16,
                      },

                      isFocused === "email" ? styles.focused : null,
                    ]}
                    textAlign={"left"}
                    placeholder={"Адрес электронной почты"}
                    placeholderTextColor={"#BDBDBD"}
                    value={state.email}
                    onFocus={() => setIsFocused("email")}
                    onBlur={() => setIsFocused(null)}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        email: value,
                      }))
                    }
                  />

                  <View>
                    <TextInput
                      style={[
                        styles.formInput,
                        isFocused === "password" ? styles.focused : null,
                      ]}
                      textAlign={"left"}
                      placeholder={"Пароль"}
                      placeholderTextColor={"#BDBDBD"}
                      value={state.password}
                      secureTextEntry={!showPassword}
                      onFocus={() => setIsFocused("password")}
                      onBlur={() => setIsFocused(null)}
                      onChangeText={(value) =>
                        setState((prevState) => ({
                          ...prevState,
                          password: value,
                        }))
                      }
                    />
                    <Text
                      style={styles.passwordText}
                      onPress={toggleShowPassword}
                    >
                      Показать
                    </Text>
                  </View>
                </View>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.button}
                  onPress={hadleSubmit}
                >
                  <Text style={styles.buttonTitle}>Войти</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("Registration")}
              >
                <Text style={styles.feedBack}>
                  Нет аккаунта? Зарегистрироваться
                </Text>
              </TouchableOpacity>
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
    paddingBottom: 124,
    paddingTop: 32,
    alignItems: "center",
  },

  form: {
    justifyContent: "center",
  },

  title: {
    fontFamily: "Roboto-Regular",
    fontSize: 30,
    fontStyle: "normal",
    textAlign: "center",
    marginBottom: 32,
    color: "#212121",
  },
  textInputWrapper: {
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
    flexGrow: 1,
    flexShrink: 1,

    color: "#212121",
    paddingLeft: 16,
  },
  focused: {
    borderColor: "#FF6C00",
  },

  passwordText: {
    position: "absolute",
    right: 16,
    top: 14,

    fontFamily: "Roboto-Regular",
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
    fontFamily: "Roboto-Regular",
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
