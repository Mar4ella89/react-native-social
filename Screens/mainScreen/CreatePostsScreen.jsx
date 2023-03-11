import React from "react";

import { StyleSheet, Text, View } from "react-native";

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CreatePostsScreen</Text>
    </View>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
  },
});
