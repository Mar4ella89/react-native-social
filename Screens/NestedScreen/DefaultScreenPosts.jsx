import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLayoutEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import {
  onSnapshot,
  collection,
  query,
  orderBy,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../fireBase/config";

import { EvilIcons } from "@expo/vector-icons";

const DefaultScreenPosts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  const { userId } = useSelector((state) => state.auth);

  const getAllPost = async (userId) => {
    const q = query(
      collection(db, "posts"),
      where("userId", "==", `${userId}`)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setPosts((prevPosts) => [...prevPosts, { ...doc.data(), id: doc.id }]);
    });
  };

  useEffect(() => {
    getAllPost(userId);
  }, [userId]);

  return (
    <View style={styles.bcgContainer}>
      <View style={styles.container}>
        <FlatList
          data={posts}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.photo }} style={styles.image} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  bcgContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  container: {
    marginHorizontal: 16,
  },
  imageContainer: {
    marginBottom: 37,
  },
  image: {
    height: 200,
    marginBottom: 8,
    borderRadius: 10,
  },
  title: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    // fontWeight: 400,
    fontSize: 16,
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default DefaultScreenPosts;
