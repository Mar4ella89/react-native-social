import React, { useState, useEffect } from "react";

import { StyleSheet, Text, View, FlatList, Image } from "react-native";

const PostsScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Image source={{ uri: item.photo }} style={styles.postImg} />
          </View>
        )}
      />
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    color: "#000",
  },
  postContainer: {
    marginHorizontal: 16,
    marginTop: 32,
  },
  postImg: {
    height: 240,
  },
});
