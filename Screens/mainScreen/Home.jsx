import React from "react";

import { StyleSheet, Text, View } from "react-native";

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CommentsScreen</Text>
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
  },
});
