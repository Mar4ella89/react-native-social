import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  return (
    // <TouchableWithoutFeedback onPress={keyboardHide}>
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBg}
        source={require("./assets/images/PhotoBG.jpg")}
      >
        <View style={styles.form}>
          <Text style={styles.inputTitle}>Регистрация</Text>
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
            />
          </View>
        </View>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
    // </TouchableWithoutFeedback>
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
  form: {
    // width: 375,
    height: 549,
    left: 0,
    top: 263,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // justifyContent: "center",
    // alignItems: "center",
  },
  inputTitle: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: 35,
    width: 184,
    textAlign: "center",
    color: "#212121",
    // marginTop: 92,
    // height: 35px;
    // left: calc(50% - 184px/2 + 0.5px);
    // top: 0px;
  },
  // textInputeWrapper: {
  //   marginTop: 160,
  // },
  formInput: {
    // width: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginHorizontal: 16,
    color: "#212121",
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
    marginBottom: 16,

    // alignItems: "center",
  },
});
