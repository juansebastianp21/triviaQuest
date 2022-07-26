import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import useResults from "./hooks/useResults";
import styles from "./styles/ResultsStyles";
import { AntDesign } from "@expo/vector-icons";

const Results = (props) => {
  const { parsedQuestionList, correctAnswers, onRetryPress } =
    useResults(props);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text>{`You scored`}</Text>
          <Text>{`${correctAnswers}/${parsedQuestionList.length}`}</Text>
        </View>
        {parsedQuestionList.map((q, i) => {
          const isCorrect = q.answer === q.correct_answer;
          return (
            <View>
              <AntDesign
                name={isCorrect ? "checkcircle" : "closecircle"}
                size={24}
                color={isCorrect ? "green" : "red"}
              />
              <Text>{q.question}</Text>
            </View>
          );
        })}
      </ScrollView>
      <TouchableOpacity onPress={onRetryPress} style={styles.button}>
        <Text>{"PLAY AGAIN"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Results;
