// import React, { useState, useEffect } from "react";
// import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
// import { useSelector } from "react-redux";
// import { db } from "../../fireBase/config";

// import { AntDesign } from "@expo/vector-icons";

// const CommentsScreen = ({ route }) => {
//   const [comments, setComments] = useState([]);

//   const { postId } = route.params;
//   const { nickname } = useSelector((state) => state.auth);

//   // const createComment = async () => {
//   //   console.log("db", db);
//   //   console.log("postId", postId);
//   //   console.log("comment", comments);
//   //   console.log("nickname", nickname);
//   //   await db
//   //     .collection("post")
//   //     .doc(postId)
//   //     .collection("comments")
//   //     .add({ comments, nickname });
//   //   setComment("");
//   // };
//   useEffect(() => {
//     const unsubscribe = db
//       .collection("posts")
//       .doc(postId)
//       .collection("comments")
//       .onSnapshot((snapshot) => {
//         const comments = [];
//         snapshot.forEach((doc) => {
//           comments.push({ id: doc.id, ...doc.data() });
//         });
//         setComments(comments);
//       });
//     return unsubscribe;
//   }, []);

//   return (
//     <View style={styles.bcgContainer}>
//       <View style={styles.container}>
//         <TextInput
//           style={styles.input}
//           placeholder="Комментарий..."
//           value={comments}
//           onChangeText={setComments}
//         />
//         <TouchableOpacity
//           style={styles.submitBtn}
//           activeOpacity={0.8}
//           onPress={createComment}
//         >
//           <AntDesign
//             style={styles.submitBtnIcon}
//             name="arrowup"
//             size={24}
//             color="black"
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   bcgContainer: {
//     flex: 1,
//     justifyContent: "flex-end",
//     backgroundColor: "#FFF",
//   },
//   container: {
//     marginHorizontal: 16,
//     marginBottom: 16,
//   },
//   input: {
//     height: 50,
//     borderWidth: 1,
//     borderColor: "#E8E8E8",
//     borderRadius: 50,
//     padding: 16,
//     position: "relative",
//   },
//   submitBtn: {
//     position: "absolute",
//     right: 5,
//     top: 5,
//     backgroundColor: "#FF6C00",
//     borderRadius: 50,
//   },
//   submitBtnIcon: {
//     padding: 8,
//     color: "#FFF",
//   },
// });

// export default CommentsScreen;
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
} from "react-native";
import { useSelector } from "react-redux";
import { db } from "../../fireBase/config";

import { AntDesign } from "@expo/vector-icons";

const CommentsScreen = ({ route }) => {
  const { postId } = route.params;
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  const { nickname } = useSelector((state) => state.auth);

  useEffect(() => {
    getAllPosts();
  }, []);
  const createPost = async () => {
    db.firestore()
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .add({ comment, nickname });
  };

  const getAllPosts = async () => {
    db.firestore()
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .onSnapshot((data) =>
        setAllComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
  };

  return (
    <View style={styles.bcgContainer}>
      <FlatList
        data={allComments}
        renderItem={({ item }) => (
          <View style={styles.commentContainer}>
            <Text style={styles.comment}>{item.comment}</Text>
            <Text style={styles.nickname}>{item.nickname}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Комментарий..."
          value={comment}
          onChangeText={setComment}
        />
        <TouchableOpacity
          style={styles.submitBtn}
          activeOpacity={0.8}
          onPress={createPost}
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
  commentContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
});

export default CommentsScreen;
