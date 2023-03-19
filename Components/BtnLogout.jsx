import { StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import { Feather } from "@expo/vector-icons";

import { authSignOutUser } from "../redux/auth/authOperation";

const BtnLogout = () => {
  const dispatch = useDispatch();

  const singOut = () => {
    dispatch(authSignOutUser());
  };
  return (
    <TouchableOpacity onPress={singOut}>
      <Feather name="log-out" size={24} style={styles.BtnLogout} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  BtnLogout: {
    color: "#BDBDBD",
    marginRight: 10,
  },
});

export default BtnLogout;
