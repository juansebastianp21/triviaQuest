import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import LottieView from "lottie-react-native";
import styles from "./styles/HomeStyles";
import useHome from "./hooks/useHome";
import { Title } from "../../../assets/images";
import Loading from "../../components/loading/Loading";

const Home = (props) => {
  const { isLoading, onBeginPress, width, height } = useHome(props);
  // if (isLoading) return <Loading />;
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        style={styles.background}
        source={require("../../../assets/lottie/background.json")}
      />
      <Image source={Title} resizeMode="contain" style={styles.image} />
      <View style={styles.bottomContainer}>
        <Text style={styles.heading}>
          {"You will be presented with 10 True or False questions."}
        </Text>
        <Text style={styles.heading}>{"Can you score 100%?"}</Text>
        <View style={{ height: 40 }} />
        <TouchableOpacity style={styles.button} onPress={onBeginPress}>
          {isLoading && (
            <ActivityIndicator color={"#FFF"} style={styles.loading} />
          )}
          <Text style={styles.buttonText}>{"BEGIN"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
