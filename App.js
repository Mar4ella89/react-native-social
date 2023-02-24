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
                  // style={{ marginBottom: 16 }}
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
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTitle}>Зарегистрироваться</Text>
              </TouchableOpacity>
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
    marginBottom: 16,

    alignItems: "center",
  },

  button: {
    backgroundColor: "#FF6C00",

    height: 51,
    borderRadius: 100,

    justifyContent: "center",
    alignItems: "center",

    // gap: 12px;
    // position: absolute;

    // bottom: 113px;
  },
  buttonTitle: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",

    color: "#fff",
    //     font-family: 'Roboto';
    // font-style: normal;
    // font-weight: 400;
    // font-size: 16px;
    // line-height: 19px;
  },
});
