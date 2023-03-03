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

  const hadleInfo = useCallback(() => {
    setState(initialState);
  }, []);

  const [fontsLoader] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;
      setdimensions(width);
    };
    const widthAuto = Dimensions.addEventListener("change", onChange);
    return () => widthAuto?.remove();
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
            keyboardVerticalOffset={-30}
            style={
              {
                //   position: "absolute",
                //   bottom: 0,
                //   justifyContent: "flex-end",
                //   alignItems: "center",
              }
            }
          >
            <View style={styles.formContainer}>
              <View style={{ ...styles.form, width: dimensions }}>
                <Text style={styles.title}>Войти</Text>
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
        {/* <StatusBar style="auto" /> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    // alignItems: "center",
  },
  formContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 144,
    paddingTop: 32,
    alignItems: "center",

    // justifyContent: "flex-start",
  },

  form: {
    justifyContent: "center",
    // paddingTop: 32,
  },

  title: {
    fontFamily: "Roboto-Regular",
    fontSize: 30,
    fontStyle: "normal",
    textAlign: "center",
    marginBottom: 32,
    // marginTop: 32,
    color: "#212121",
  },
  textInputeWrapper: {
    // marginTop: 32,
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

// import React, { useState, useCallback } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   TouchableWithoutFeedback,
//   Keyboard,
//   ImageBackground,
//   Image,
// } from "react-native";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

// const initialState = {
//   email: "",
//   password: "",
// };

// const LoginScreen = ({ navigation }) => {
//   const [isShowKeyboard, setIsShowKeyboard] = useState(false);
//   const [state, setState] = useState(initialState);
//   const [fontsLoaded] = useFonts({
//     "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
//     // "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
//   });

//   const onLayoutRootView = useCallback(async () => {
//     if (fontsLoaded) {
//       await SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded]);

//   if (!fontsLoaded) {
//     return null;
//   }

//   function keyboardHide() {
//     setIsShowKeyboard(false);
//     Keyboard.dismiss();
//     console.log(state);
//     setState(initialState);
//   }

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <View style={styles.container} onLayout={onLayoutRootView}>
//         <ImageBackground
//           style={styles.image}
//           source={require("../assets/images/PhotoBG.jpg")}
//         >
//           <KeyboardAvoidingView
//             behavior={Platform.OS == "ios" ? "padding" : "height"}
//             keyboardVerticalOffset={-150}
//           >
//             <View
//               style={{
//                 ...styles.wrapperForm,
//                 paddingBottom: setIsShowKeyboard ? 20 : 111,
//               }}
//             >
//               <View style={styles.form}>
//                 <Image
//                   style={styles.close}
//                   source={require("../assets/images/add.png")}
//                 />
//                 <Text style={styles.title}>Войти</Text>

//                 <View>
//                   <TextInput
//                     keyboardType="email-address"
//                     onFocus={() => {
//                       setIsShowKeyboard(true);
//                     }}
//                     placeholder="Адрес электронной почты"
//                     value={state.email}
//                     onChangeText={(value) =>
//                       setState((prevState) => ({ ...prevState, email: value }))
//                     }
//                     style={styles.input}
//                   />
//                   <View>
//                     <TextInput
//                       onFocus={() => {
//                         setIsShowKeyboard(true);
//                       }}
//                       placeholder="Пароль"
//                       value={state.password}
//                       onChangeText={(value) =>
//                         setState((prevState) => ({
//                           ...prevState,
//                           password: value,
//                         }))
//                       }
//                       secureTextEntry={true}
//                       style={styles.input}
//                     />
//                     <Text style={styles.textPassword}>Показать</Text>
//                   </View>
//                 </View>

//                 <TouchableOpacity
//                   activeOpacity={0.8}
//                   onPress={keyboardHide}
//                   style={styles.button}
//                 >
//                   <Text style={styles.textButton}>Войти</Text>
//                 </TouchableOpacity>
//               </View>
//               <TouchableOpacity>
//                 <Text
//                   style={styles.textLink}
//                   onPress={() => navigation.navigate("Registration")}
//                 >
//                   Нет аккаунта? Зарегистрироваться
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </KeyboardAvoidingView>
//         </ImageBackground>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };
// export default LoginScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "flex-end",
//     // alignItems: "center",
//   },
//   title: {
//     textAlign: "center",
//     fontFamily: "Roboto-Medium",
//     fontSize: 30,
//     lineHeight: 35,
//     letterSpacing: 0.01,
//     color: "#212121",
//     marginBottom: 32,
//   },
//   input: {
//     fontFamily: "Roboto-Regular",
//     fontSize: 16,
//     lineHeight: 19,
//     height: 50,
//     borderWidth: 1,
//     borderColor: "#E8E8E8",
//     backgroundColor: "#F6F6F6",
//     borderRadius: 8,
//     padding: 16,
//     marginTop: 16,
//     color: "#212121",
//   },
//   wrapperForm: {
//     paddingTop: 32,
//     backgroundColor: "#FFFFFF",
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//   },
//   form: {
//     marginHorizontal: 16,
//   },
//   button: {
//     backgroundColor: "#FF6C00",
//     borderRadius: 100,
//     height: 51,
//     marginTop: 43,
//     marginBottom: 16,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   textButton: {
//     color: "#FFFFFF",
//     fontFamily: "Roboto-Regular",
//     fontSize: 16,
//     lineHeight: 19,
//   },
//   textLink: {
//     fontFamily: "Roboto-Regular",
//     fontSize: 16,
//     lineHeight: 19,
//     textAlign: "center",
//     color: "#1B4371",
//   },
//   textPassword: {
//     position: "absolute",
//     top: "50%",
//     left: "78%",
//     color: "#1B4371",
//     fontSize: 16,
//     lineHeight: 19,
//   },
//   close: {
//     position: "absolute",
//     top: 8,
//   },
// });

// import React, { useState, useEffect } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   ImageBackground,
//   TextInput,
//   TouchableWithoutFeedback,
//   Keyboard,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Dimensions,
// } from "react-native";

// // import styles from "./auth.styles";

// const initialState = {
//   email: "",
//   password: "",
// };

// const LoginScreen = ({ navigation }) => {
//   const [isShowKeyboard, setIsShowKeyboard] = useState(false);
//   const [state, setState] = useState(initialState);
//   const [showPassword, setShowPassword] = useState(false);

//   const [dimensions, setDimensions] = useState(
//     Dimensions.get("window").width - 16 * 2
//   );

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   useEffect(() => {
//     const onChange = () => {
//       const newDimensions = Dimensions.get("window").width - 16 * 2;

//       setDimensions(newDimensions);
//     };
//     Dimensions.addEventListener("change", onChange);
//   }, []);

//   const keyboardHide = () => {
//     setIsShowKeyboard(false);
//     Keyboard.dismiss();
//   };

//   const handleSubmit = () => {
//     setIsShowKeyboard(false);
//     Keyboard.dismiss();
//     console.log(state);
//     setState(initialState);
//   };

//   return (
//     <TouchableWithoutFeedback onPress={keyboardHide}>
//       <View style={styles.container}>
//         <ImageBackground
//           style={styles.bcgImage}
//           source={require("../assets/images/PhotoBG.jpg")}
//         >
//           <KeyboardAvoidingView
//             behavior={Platform.OS == "ios" ? "padding" : "height"}
//           >
//             <View style={styles.formWrapper}>
//               <View
//                 style={{
//                   ...styles.form,
//                   marginBottom: isShowKeyboard ? 20 : 144,
//                   width: dimensions,
//                 }}
//               >
//                 <Text style={styles.title}>Увійти</Text>
//                 <View>
//                   <TextInput
//                     onFocus={() => setIsShowKeyboard(true)}
//                     placeholder="Адреса електронної пошти"
//                     style={styles.input}
//                     value={state.email}
//                     onChangeText={(value) =>
//                       setState((prevState) => ({ ...prevState, email: value }))
//                     }
//                   />
//                 </View>

//                 <View>
//                   <TextInput
//                     onFocus={() => setIsShowKeyboard(true)}
//                     placeholder="Пароль"
//                     secureTextEntry={!showPassword}
//                     style={styles.input}
//                     value={state.password}
//                     onChangeText={(value) =>
//                       setState((prevState) => ({
//                         ...prevState,
//                         password: value,
//                       }))
//                     }
//                   />

//                   <Text
//                     style={styles.inputShowPasword}
//                     onPress={toggleShowPassword}
//                   >
//                     Показати
//                   </Text>
//                 </View>
//                 <TouchableOpacity
//                   style={styles.btn}
//                   activeOpacity={0.7}
//                   onPress={handleSubmit}
//                 >
//                   <Text style={styles.btnText}>Увійти</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.singInText}>
//                   <Text
//                     style={styles.singInText}
//                     onPress={() => navigation.navigate("Registration")}
//                   >
//                     Немає облікового запису? Зареєструватись
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </KeyboardAvoidingView>
//         </ImageBackground>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   bcgImage: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   title: {
//     fontFamily: "Roboto-Regular",
//     fontWeight: "500",
//     fontSize: 30,
//     textAlign: "center",
//     marginBottom: 33,
//     marginTop: 32,
//   },
//   formWrapper: {
//     backgroundColor: "#FFF",
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     alignItems: "center",
//     // height: 489,
//   },
//   form: {
//     marginHorizontal: 16,
//   },
//   input: {
//     borderWidth: 1,
//     color: "#212121",
//     borderColor: "#E8E8E8",
//     borderRadius: 8,
//     height: 50,
//     backgroundColor: "#F6F6F6",
//     placeholderTextColor: "#BDBDBD",
//     padding: 16,
//     fontFamily: "Roboto-Regular",
//     fontWeight: "400",
//     fontSize: 16,
//     marginBottom: 16,
//     position: "relative",
//   },
//   inputShowPasword: {
//     position: "absolute",
//     fontSize: 16,
//     right: 26,
//     top: 16,
//     color: "#1B4371",
//   },
//   btn: {
//     backgroundColor: "#FF6C00",
//     borderRadius: 100,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingTop: 16,
//     paddingBottom: 16,
//   },
//   btnText: {
//     color: "#FFF",
//     fontFamily: "Roboto-Regular",
//     fontWeight: "400",
//     fontSize: 16,
//   },
//   singInText: {
//     color: "#1B4371",
//     // marginLeft: "auto",
//     // marginRight: "auto",
//     marginTop: 16,
//     fontFamily: "Roboto-Regular",
//     fontWeight: "400",
//     fontSize: 16,
//     alignItems: "center",
//   },
//   avatarWrapper: {
//     alignItems: "center",
//     marginBottom: 60,
//   },
//   avatar: {
//     position: "absolute",
//     top: -50,
//     width: 120,
//     height: 120,
//     borderRadius: 16,
//   },
// });
