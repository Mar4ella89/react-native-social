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

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../fireBase/config";

import { EvilIcons } from "@expo/vector-icons";

const DefaultScreenPosts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  const { userId } = useSelector((state) => state.auth);
  console.log(posts);

  const [loading, setLoading] = useState(true);

  const getPostsFromServer = async (userId) => {
    console.log(userId);
    const q = query(
      collection(db, "posts"),
      where("userId", "==", `${userId}`)
    );
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);

    const newPosts = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setPosts(newPosts.reverse());
    setLoading(false);
  };

  useEffect(() => {
    getPostsFromServer(userId);
  }, [userId]);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.bcgContainer}>
      <View style={styles.container}>
        <FlatList
          data={posts}
          keyExtractor={(item, indx) => indx.toString()}
          // refreshing={refreshing}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.photo }} style={styles.image} />
              <View>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <View style={styles.infoContainer}>
                <TouchableOpacity
                  title="Комментарии"
                  onPress={() =>
                    navigation.navigate("CommentsScreen", { postId: item.id })
                  }
                >
                  <EvilIcons name="comment" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  title="Карта"
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
    fontSize: 16,
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default DefaultScreenPosts;
