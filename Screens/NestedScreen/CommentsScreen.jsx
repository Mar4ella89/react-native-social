import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  SafeAreaView,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import { db } from "../../fireBase/config";
import { collection, addDoc, doc } from "firebase/firestore";

import { AntDesign } from "@expo/vector-icons";

const CommentsScreen = ({ route }) => {
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);

  const { postId } = route.params;
  const { nickname } = useSelector((state) => state.auth);

  const createComment = async () => {
    if (!comment || !nickname) {
      return;
    }
    try {
      const commRef = collection(db, "posts", postId, "comments");
      console.log(commRef);
      const newComment = { comment: comment, nickname: nickname };
      await addDoc(commRef, newComment);
      setComment("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  // const getAllPosts = async () => {
  //   db.firestore()
  //     .collection("posts")
  //     .doc(postId)
  //     .collection("comments")
  //     .onSnapshot((data) =>
  //       setAllComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  //     );
  // };

  return (
    <View style={styles.bcgContainer}>
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <FlatList
            // data={allComments}
            renderItem={({ item }) => (
              <View style={styles.commentContainer}>
                <Text>{item.nickname}</Text>
                <Text>{item.comment}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="Комментарий..."
          value={comment}
          onChangeText={setComment}
        />
        {/* <TouchableOpacity
          style={styles.submitBtn}
          activeOpacity={0.8}
          onPress={createComment}
        >
          <AntDesign
            style={styles.submitBtnIcon}
            name="arrowup"
            size={24}
            color="black"
          />
        </TouchableOpacity> */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={createComment}
        >
          <Text style={styles.buttonTitle}>Опубликовать</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bcgContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#FFF",
  },
  container: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  // container: {
  //   flex: 1,
  // },
  commentContainer: {
    borderWidth: 1,
    borderColor: "#20b2aa",
    marginHorizontal: 10,
    padding: 10,
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 50,
    padding: 16,
    position: "relative",
  },
  submitBtn: {
    position: "absolute",
    right: 5,
    top: 5,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
  },
  submitBtnIcon: {
    padding: 8,
    color: "#FFF",
  },
  button: {
    marginTop: 32,
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontStyle: "normal",
    lineHeight: 19,
    color: "#FFFFFF",
  },
});

export default CommentsScreen;
