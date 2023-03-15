import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";
import { Camera } from "expo-camera";

const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const [isCamera, setIsCamera] = useState(false);

  const takePhoto = async () => {
    const currentPhoto = await camera.takePictureAsync();
    setPhoto(currentPhoto.uri);
  };

  const sendFoto = () => {
    navigation.navigate("PostsScreen");
  };

  if (!isCamera) {
    return (
      <View style={styles.container}>
        <View style={styles.addContainer}>
          <View style={styles.photoContainer}>
            <TouchableOpacity
              onPress={() => {
                setIsCamera(true);
              }}
            >
              <Image
                source={require("../../assets/images/camera_add.png")}
                style={styles.addPhotoImg}
              ></Image>
            </TouchableOpacity>
          </View>

          <View style={styles.textInputWrapper}>
            <Text style={styles.title}>Загрузить фото</Text>
            <TextInput
              style={[
                {
                  ...styles.formInput,
                  marginTop: 32,
                },

                // isFocused === "email" ? styles.focused : null,
              ]}
              textAlign={"left"}
              placeholder={"Название..."}
              placeholderTextColor={"#BDBDBD"}
              // value={state.email}
              // onFocus={() => setIsFocused("email")}
              // onBlur={() => setIsFocused(null)}
              // onChangeText={(value) =>
              //   setState((prevState) => ({
              //     ...prevState,
              //     email: value,
              //   }))
              // }
            />
            <TextInput
              style={[
                {
                  ...styles.formInput,
                  marginTop: 16,
                },

                // isFocused === "email" ? styles.focused : null,
              ]}
              textAlign={"left"}
              placeholder={"Местность..."}
              placeholderTextColor={"#BDBDBD"}
              // value={state.email}
              // onFocus={() => setIsFocused("email")}
              // onBlur={() => setIsFocused(null)}
              // onChangeText={(value) =>
              //   setState((prevState) => ({
              //     ...prevState,
              //     email: value,
              //   }))
              // }
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => {}}
          >
            <Text style={styles.buttonTitle}>Опубликовать</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.addContainer}>
        <Camera style={styles.camera} ref={setCamera}>
          {photo && (
            <View style={styles.takePhotoContainer}>
              <Image source={{ uri: photo }} style={styles.takePhotoImg} />
            </View>
          )}

          <TouchableOpacity style={styles.snapContainer} onPress={takePhoto}>
            <Text style={styles.snapText}>SNAP</Text>
          </TouchableOpacity>
        </Camera>
        <View style={styles.textInputWrapper}>
          <Text style={styles.title}>Загрузить фото</Text>
          <TextInput
            style={[
              {
                ...styles.formInput,
                marginTop: 32,
              },

              // isFocused === "email" ? styles.focused : null,
            ]}
            textAlign={"left"}
            placeholder={"Название..."}
            placeholderTextColor={"#BDBDBD"}
            // value={state.email}
            // onFocus={() => setIsFocused("email")}
            // onBlur={() => setIsFocused(null)}
            // onChangeText={(value) =>
            //   setState((prevState) => ({
            //     ...prevState,
            //     email: value,
            //   }))
            // }
          />
          <TextInput
            style={[
              {
                ...styles.formInput,
                marginTop: 16,
              },

              // isFocused === "email" ? styles.focused : null,
            ]}
            textAlign={"left"}
            placeholder={"Местность..."}
            placeholderTextColor={"#BDBDBD"}
            // value={state.email}
            // onFocus={() => setIsFocused("email")}
            // onBlur={() => setIsFocused(null)}
            // onChangeText={(value) =>
            //   setState((prevState) => ({
            //     ...prevState,
            //     email: value,
            //   }))
            // }
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={sendFoto}
          // () => {
          // setIsCamera(false);

          // }};
        >
          <Text style={styles.buttonTitle}>Опубликовать</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    color: "#000",
  },
  addContainer: {
    marginHorizontal: 16,
  },
  photoContainer: {
    height: "40%",
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#F6F6F6",
  },

  addPhotoImg: {
    width: 60,
    height: 60,
  },
  camera: {
    height: "40%",
    marginTop: 32,
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 8,
  },
  snapText: {
    color: "#FFFFFF",
  },
  snapContainer: {
    borderWidth: 2,
    borderColor: "#FFFFFF",
    borderRadius: 50,
    marginBottom: 30,
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  takePhotoContainer: {
    // flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    // borderColor: "#FFF",
    // borderWidth: 1,
    // borderRadius: 10,
    width: "100%",
    height: "100%",
  },
  takePhotoImg: {
    flex: 1,
    // height: "100%",
    // height: 200,
    // width: 200,
    // maxWidth: "100%",
    // borderRadius: 10,
  },
  textInputWrapper: { marginTop: 8 },
  title: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontStyle: "normal",
    color: "#BDBDBD",
    paddingBottom: 16,
  },
  formInput: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontStyle: "normal",
  },
  button: {
    marginTop: 32,
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
    color: "#FFFFFF",
  },
});
