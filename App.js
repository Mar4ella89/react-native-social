import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBg}
        source={require("./assets/images/PhotoBG.jpg")}
      >
        <View style={styles.formContainer}></View>
        <TextInput style={styles.formInput} />
      </ImageBackground>
      {/* <Text>Open up App.js to start working on your app!!!</Text> */}
      <StatusBar style="auto" />
    </View>
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
    // width: 375,
    height: 549,
    left: 0,
    top: 263,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "center",
    // alignItems: "center",
  },
  formInput: {
    // width: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    paddingLeft: 16,
    paddingRight: 16,
    // alignItems: "center",
  },
});
