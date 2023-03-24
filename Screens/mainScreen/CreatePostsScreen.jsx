import React, { useState, useEffect, useCallback } from "react";
import firebase from "firebase/app";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Camera, CameraType } from "expo-camera";

import * as Location from "expo-location";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { useSelector } from "react-redux";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { storage } from "../../fireBase/config";
import { db } from "../../fireBase/config";

// import db from "../../fireBase/config";

import { Feather } from "@expo/vector-icons";

const CreatePostsScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const [comment, setComment] = useState("");
  const [title, setTitle] = useState("");
  const [isCamera, setIsCamera] = useState(false);
  const [cameraReady, setCameraReady] = useState(false);

  const { userId, nickname } = useSelector((state) => state.auth);

  useEffect(() => {
    (async () => {
      await Camera.requestCameraPermissionsAsync();

      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("В доступе местонахождения отказано");
        return;
      }

      let location = await Location.getCurrentPositionAsync();
      setLocation(location);
    })();
  }, []);

  const takePhoto = async () => {
    const { uri } = await camera.takePictureAsync();
    setPhoto(uri);
    console.log("location", location);
  };

  const handleCameraReady = () => {
    setCameraReady(true);
  };

  const sendPhoto = async () => {
    await uploadPostToServer();
    setIsCamera(false);
    setPhoto("");

    navigation.reset({
      index: 0,
      routes: [{ name: "DefaultScreenPosts" }],
    });

    navigation.navigate("DefaultScreenPosts");
  };

  const uploadPostToServer = async () => {
    const photo = await uploadPhotoToServer();

    try {
      const db = getFirestore();
      const newCollectionRef = collection(db, "posts");
      await addDoc(newCollectionRef, {
        userId: userId,
        photo: photo,
        comment: comment,
        title: title,
        location: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
        nickname: nickname,
      });
      console.log(`Коллекция создана!`);
      // navigation.navigate("DefaultScreenPosts");
    } catch (error) {
      console.error("Ошибка создания коллекции:", error);
    }
  };

  const uploadPhotoToServer = async () => {
    try {
      const response = await fetch(photo);
      const file = await response.blob();
      const uniquePostId = Date.now().toString();

      const data = ref(storage, `postimage/${uniquePostId}`);
      await uploadBytes(data, file);

      const processedPhoto = await getDownloadURL(data);
      return processedPhoto;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`errorCode: ${errorCode}, errorMessage: ${errorMessage}`);
    }
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
              value={title}
              onChangeText={setTitle}
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
            <View style={styles.inputMapWrapper}>
              <Feather
                name="map-pin"
                size={18}
                color="#BDBDBD"
                style={styles.mapIcon}
              />
              <TextInput
                style={[
                  {
                    ...styles.formInputMap,
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
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={sendPhoto}
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
        <Camera
          style={styles.camera}
          ref={setCamera}
          onCameraReady={handleCameraReady}
        >
          {photo && (
            <View style={styles.takePhotoContainer}>
              <Image source={{ uri: photo }} style={styles.takePhotoImg} />
            </View>
          )}

          <TouchableOpacity style={styles.snapContainer} onPress={takePhoto}>
            <Image
              source={require("../../assets/images/camera_r.png")}
              style={styles.snapText}
            ></Image>
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
            onChangeText={setTitle}
            value={title}
          />
          <View style={styles.inputMapWrapper}>
            <Feather
              name="map-pin"
              size={18}
              color="#BDBDBD"
              style={styles.mapIcon}
            />
            <TextInput
              style={[
                {
                  ...styles.formInputMap,
                  marginTop: 16,
                },
              ]}
              textAlign={"left"}
              placeholder={"Местность..."}
              placeholderTextColor={"#BDBDBD"}
            />
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={sendPhoto}
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
    position: "absolute",
    top: 0,
    left: 0,

    width: "100%",
    height: "100%",
  },
  takePhotoImg: {
    flex: 1,
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
  formInputMap: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontStyle: "normal",
    paddingLeft: 20,
  },
  inputMapWrapper: {
    position: "relative",
  },
  mapIcon: {
    position: "absolute",
    top: 30,
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
