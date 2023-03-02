import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  return (
    <>
      {/* <RegistrationScreen /> */}
      <LoginScreen />
      {/* <StatusBar style="auto" /> */}
    </>
  );

  // return (
  //     <View style={styles.containerMain}>
  //       <RegistrationScreen />
  //       <StatusBar style="auto" />
  //     </View>
  //   );
}

// const styles = StyleSheet.create({
//   containerMain: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
// });
