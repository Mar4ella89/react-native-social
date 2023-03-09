import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useCallback } from "react";

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

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen({ navigation }) {
  const [state, setState] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [dimensions, setdimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const hadleInfo = useCallback(() => {
    setState(initialState);
  }, []);

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
            keyboardVerticalOffset={-100}
          >
            <View style={styles.formContainer}>
              <View style={styles.avatarContainer}>
                <ImageBackground
                  source={require("../../assets/images/add.png")}
                  style={styles.addAvatarContainer}
                ></ImageBackground>
              </View>

              <View style={{ ...styles.form, width: dimensions }}>
                <Text style={styles.title}>Регистрация</Text>
                <View style={styles.textInputeWrapper}>
                  <TextInput
                    style={[
                      {
                        ...styles.formInput,
                        marginBottom: 16,
                      },
                      isFocused === "login" ? styles.focused : null,
                    ]}
                    textAlign={"left"}
                    placeholder={"Логин"}
                    placeholderTextColor={"#BDBDBD"}
                    onFocus={() => setIsFocused("login")}
                    onBlur={() => setIsFocused(null)}
                    value={state.login}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        login: value,
                      }))
                    }
                  />
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
                    onFocus={() => setIsFocused("email")}
                    onBlur={() => setIsFocused(null)}
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
                      style={[
                        styles.formInput,
                        isFocused === "password" ? styles.focused : null,
                      ]}
                      textAlign={"left"}
                      placeholder={"Пароль"}
                      placeholderTextColor={"#BDBDBD"}
                      onFocus={() => setIsFocused("password")}
                      onBlur={() => setIsFocused(null)}
                      secureTextEntry={!showPassword}
                      value={state.password}
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
                  onPress={hadleInfo}
                >
                  <Text style={styles.buttonTitle}>Зарегистрироваться</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.feedBack}>Уже есть аккаунт? Войти</Text>
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
    paddingBottom: 72,
    paddingTop: 92,
    alignItems: "center",
  },

  form: {
    justifyContent: "center",
  },

  avatarContainer: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    alignSelf: "center",

    marginLeft: "auto",
    marginRight: "auto",
    marginTop: -60,
  },

  addAvatarContainer: {
    position: "absolute",
    right: -12,
    bottom: 12,

    width: 25,
    height: 25,
    alignSelf: "flex-end",
  },

  title: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontStyle: "normal",
    textAlign: "center",
    marginBottom: 32,
    color: "#212121",
  },
  textInputeWrapper: {
    // marginTop: 32,
    marginBottom: 32,
  },
  formInput: {
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,

    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",

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
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    textAlign: "center",
    marginTop: 16,
    color: "#1B4371",
  },
});
