import { StyleSheet, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";

const BtnLogout = () => {
  return (
    <TouchableOpacity>
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
