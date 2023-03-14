import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <Camera style={styles.camera}>
        <TouchableOpacity style={styles.snapContainer} onPress={() => {}}>
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
    backgroundColor: "#fff",
    color: "#000",
  },
  camera: {
    height: 300,
    alignItems: "center",
    //     position: absolute;
    // width: 343px;
    // height: 240px;
    // left: 16px;
    // top: 120px;
    // background: " #F6F6F6",
    // border: 1px solid #E8E8E8;
    // border-radius: 8px;
    // height: 50,
    backgroundColor: " #F6F6F6",
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
    marginTop: 230,
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
});
