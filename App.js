import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBg}
          source={require("./assets/images/PhotoBG.jpg")}
        >
          <View style={styles.formContainer}>
            <View style={styles.avatarContainer}></View>
            <Text style={styles.title}>Регистрация</Text>
            <View style={styles.form}>
              <View style={styles.textInputeWrapper}>
                <TextInput
                  style={styles.formInput}
                  textAlign={"left"}
                  placeholder={"Логин"}
                  placeholderTextColor={"#BDBDBD"}
                />
                <TextInput
                  style={styles.formInput}
                  textAlign={"left"}
                  placeholder={"Адрес электронной почты"}
                  placeholderTextColor={"#BDBDBD"}
                />
                <TextInput
                  style={styles.formInput}
                  textAlign={"left"}
                  placeholder={"Пароль"}
                  placeholderTextColor={"#BDBDBD"}
                  secureTextEntry={true}
                />
              </View>
              <Button style={styles.button} title="Зарегистрироваться" />
            </View>
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
    justifyContent: "center",
  },
  formContainer: {
    height: 549,
    left: 0,
    top: 263,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  form: {},

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
    marginHorizontal: 16,
  },
  formInput: {
    // width: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,

    color: "#212121",
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
    marginBottom: 16,

    // alignItems: "center",
  },

  button: {
    //     display: flex;
    // flex-direction: column;
    // align-items: center;
    // padding: 16px 32px;
    // gap: 12px;
    // position: absolute;
    // height: 51px;
    // left: 16px;
    // right: 16px;
    // bottom: 113px;
    // background: #FF6C00;
    // border-radius: 100px;
  },
});
