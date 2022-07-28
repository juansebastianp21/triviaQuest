import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import useResults from "./hooks/useResults";
import styles from "./styles/ResultsStyles";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../components/button/Button";

const Results = (props) => {
  const { parsedQuestionList, correctAnswers, onRetryPress } =
    useResults(props);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{`You scored`}</Text>
          <Text
            style={styles.title}
          >{`${correctAnswers}/${parsedQuestionList.length}`}</Text>
        </View>
        {parsedQuestionList.map((q, i) => {
          const isCorrect = q.answer === q.correct_answer;
          return (
            <View key={i} style={styles.listItemContainer}>
              <View style={styles.iconContainer}>
                <AntDesign
                  name={isCorrect ? "check" : "close"}
                  size={16}
                  color={isCorrect ? "green" : "red"}
                />
              </View>
              <Text style={styles.itemText}>{q.question}</Text>
            </View>
          );
        })}
      </ScrollView>
      <LinearGradient
        colors={["#193252", "#19325200"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 0, y: 0 }}
        style={styles.buttonContainer}
      >
        <Button label="PLAY AGAIN" onPress={onRetryPress} />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Results;
