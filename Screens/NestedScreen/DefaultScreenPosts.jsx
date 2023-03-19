import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import { EvilIcons } from "@expo/vector-icons";

const DefaultScreenPosts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  const { userId } = useSelector((state) => state.auth);
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
            <View>
              <Text style={styles.title}>{item.comment}</Text>
            </View>
            <View style={styles.infoContainer}>
              <TouchableOpacity
                title="CommentsScreen"
                onPress={() =>
                  navigation.navigate("CommentsScreen", { postID: item.id })
                }
              >
                <EvilIcons name="comment" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                title="MapScreen"
                onPress={() =>
                  navigation.navigate("MapScreen", {
                    location: item.location,
                  })
                }
              >
                <EvilIcons name="location" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default DefaultScreenPosts;

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
