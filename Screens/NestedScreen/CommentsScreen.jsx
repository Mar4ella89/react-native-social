import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  SafeAreaView,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { useSelector } from "react-redux";
import { db } from "../../fireBase/config";
import { collection, addDoc, query, getDocs } from "firebase/firestore";

import { AntDesign } from "@expo/vector-icons";

const CommentsScreen = ({ route }) => {
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);

  const { postId } = route.params;
  const { nickname } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts(postId);
  }, [postId]);

  const getAllPosts = async (postId) => {
    console.log(postId);
    const q = query(collection(db, "posts", postId, "comments"));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);

    const newComment = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setAllComments(newComment.reverse());
    setLoading(false);
  };

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const createComment = async () => {
    if (!comment || !nickname) {
      return;
    }
    try {
      const commRef = collection(db, "posts", postId, "comments");
      console.log(commRef);
      const newComment = { comment: comment, nickname: nickname };
      await addDoc(commRef, newComment);
      setAllComments([...allComments, newComment]);
      setComment("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.bcgContainer}>
        <View style={styles.container}>
          <SafeAreaView>
            <FlatList
              data={allComments}
              renderItem={({ item }) => (
                <View style={styles.commentContainer}>
                  <Text>{item.nickname}</Text>
                  <Text>{item.comment}</Text>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input}
              placeholder="Комментарий..."
              value={comment}
              onChangeText={setComment}
            />
            <TouchableOpacity
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
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  bcgContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#FFF",
  },
  container: { marginHorizontal: 16 },
  containerInput: {
    marginBottom: 16,
  },

  commentContainer: {
    borderWidth: 1,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 6,
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
});

export default CommentsScreen;
