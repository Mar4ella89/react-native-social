import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";

const CreatePostsScreen = () => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");

  const takePhoto = async () => {
    const currentPhoto = await camera.takePictureAsync();

    setPhoto(currentPhoto.uri);
  };

  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // color: "#000",
  },
  camera: {
    height: "45%",
    alignItems: "center",
    justifyContent: "flex-end",
    //     position: absolute;
    // width: 343px;
    // height: 240px;
    // left: 16px;
    // top: 120px;
    // background: " #F6F6F6",
    // border: 1px solid #E8E8E8;
    // border-radius: 8px;
    // height: 50,
    // backgroundColor: " #F6F6F6",
    // borderWidth: 1,
    // borderColor: "#E8E8E8",
    // borderRadius: 8,
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
  },
  takePhotoImg: {
    height: 200,
    width: 200,
  },
});
