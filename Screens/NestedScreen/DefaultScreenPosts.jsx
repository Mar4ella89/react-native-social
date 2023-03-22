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
  console.log("posts", posts);
  const { userId } = useSelector((state) => state.auth);

  const getAllPost = async () => {
    // const response = db.collection("posts");
    // const data = await response.get();
    // data.docs.forEach((item) => {
    //   setPosts([...posts, item.data()]);
    // });
    // };

    const q = query(collection(db, "posts"));
    const querySnapshot = await getDocs(q);

    console.log(querySnapshot);

    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data());
    //   ({ ...doc.data(), id: doc.id });
    //   // setPosts([...posts, doc.data()]);
    //   // setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // });

    // ---------------rezult ok (work)--------------

    // querySnapshot.forEach((doc) => {
    //   console.log(doc.data());
    //   setPosts([...posts, { ...doc.data(), id: doc.id }]);
    // });

    // ---------------rezult ok (work)--------------

    // querySnapshot.forEach((doc) => {
    //   console.log(doc.data());
    //   setPosts([...posts, { ...doc.data(), id: doc.id }]);
    // });

    // ---------------rezult ok--------------
    setPosts(querySnapshot.map((doc) => ({ ...doc.data(), id: doc.id })));
    // querySnapshot.map((doc) => {
    //   console.log(doc.data());
    //   setPosts((prevPost) => [...prevPost, { ...doc.data(), id: doc.id }]);
    // });
  };

  // const getAllPost = async () => {
  //   try {
  //     const q = query(
  //       collection(db, "posts")
  //       // where("userId", "==", `${userId}`)
  //     );
  //     const querySnapshot = await getDocs(q);
  //     setPosts(
  //       querySnapshot.map((doc) => {
  //         ({ ...doc.data(), id: doc.id });
  //       })
  //     );
  //   } catch (error) {
  //     console.log("Ошибка getAllPost", error.message);
  //   }
  // };
  // ----------------------
  //   try {
  //     const ref = query(
  //       console.log(posts),
  //       collection(db, "posts"),
  //       where("userId", "==", `${userId}`)
  //     );
  //     console.log("ref", ref);
  //     onSnapshot(ref, (snapshot) => {
  //       setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     });
  //   } catch (error) {
  //     console.log("Ошибка getAllPost", error.message);
  //   }
  // };

  // ----------------------
  // const getAllPost = async () => {
  //   // const db = getFirestore();
  //   console.log("db", db);
  //   await db
  //     .firestore()
  //     .collection("posts")
  //     .onSnapshot((data) =>
  //       setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  //     );
  // };

  useEffect(() => {
    console.log("d");
    getAllPost();
  }, []);

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
