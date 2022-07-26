import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import styles from "./styles/HomeStyles";
import useHome from "./hooks/useHome";
import Loading from "../../components/loading/Loading";

const Home = (props) => {
  const { isLoading, onBeginPress } = useHome(props);
  if (isLoading) return <Loading />;
  return (
    <View style={styles.container}>
      <Text>{"Wellcome to the trivia challenge"}</Text>
      <Text>{"You will be presented with 10 True or False questions."}</Text>
      <Text>{"Can you score 100%?"}</Text>
      <TouchableOpacity onPress={onBeginPress}>
        <Text>{"BEGIN"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
