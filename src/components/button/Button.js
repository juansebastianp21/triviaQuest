import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import React from "react";
import styles from "./styles/ButtonStyles";

const Button = (props) => {
  const { isLoading, label, onPress } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {isLoading && <ActivityIndicator color={"#FFF"} style={styles.loading} />}
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
