import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { Camera } from "expo-camera";

const CreatePostsScreen = () => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const [isCamera, setIsCamera] = useState(false);

  const takePhoto = async () => {
    const currentPhoto = await camera.takePictureAsync();
    setPhoto(currentPhoto.uri);
  };

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
        <View style={styles.photoContainer}>
          <TouchableOpacity
            style={styles.snapContainer}
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
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
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
    // color: "#000",
  },
  addContainer: {
    marginHorizontal: 16,
  },
  photoContainer: {
    height: "45%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#F6F6F6",
  },
  addPhotoContainer: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "#000000",
  },
  addPhotoImg: {
    width: 60,
    height: 60,
  },
  camera: {
    height: "45%",
    justifyContent: "flex-end",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
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
    top: 10,
    left: 10,
    borderColor: "#FFF",
    borderWidth: 1,
    borderRadius: 10,
  },
  takePhotoImg: {
    height: 200,
    width: 200,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
