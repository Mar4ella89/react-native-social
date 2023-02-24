import { useState } from "react";

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
} from "react-native";

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBg}
          source={require("./assets/images/PhotoBG.jpg")}
        >
          <View
            style={
              styles.formContainer
              // {
              // ...styles.formContainer,
              // marginBottom: isShowKeyboard ? -2 : 52,
              // }
            }
          >
            <View style={styles.avatarContainer}></View>
            <Text style={styles.title}>Регистрация</Text>
            <View style={styles.form}>
              <View style={styles.textInputeWrapper}>
                <TextInput
                  style={{ ...styles.formInput, marginBottom: 16 }}
                  textAlign={"left"}
                  placeholder={"Логин"}
                  placeholderTextColor={"#BDBDBD"}
                  onFocus={() => setIsShowKeyboard(true)}
                />
                <TextInput
                  style={{ ...styles.formInput, marginBottom: 16 }}
                  textAlign={"left"}
                  placeholder={"Адрес электронной почты"}
                  placeholderTextColor={"#BDBDBD"}
                  onFocus={() => setIsShowKeyboard(true)}
                />
                <TextInput
                  style={styles.formInput}
                  textAlign={"left"}
                  placeholder={"Пароль"}
                  placeholderTextColor={"#BDBDBD"}
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                />
              </View>
              <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                <Text style={styles.buttonTitle}>Зарегистрироваться</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.feedBack}>Уже есть аккаунт? Войти</Text>
          </View>
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
    // justifyContent: "flex-end",
    // height: 549,
    // left: 0,
    // top: 263,
    // bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 78,
  },

  form: {
    marginHorizontal: 16,
  },

  avatarContainer: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -60,
    left: 128,
  },

  title: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontStyle: "normal",
    textAlign: "center",
    marginTop: 92,
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

    color: "#212121",
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,

    alignItems: "center",
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
