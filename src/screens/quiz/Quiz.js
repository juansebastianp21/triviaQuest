import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import useQuiz from "./hooks/useQuiz";

const Quiz = (props) => {
  const {
    isLoading,
    questionList,
    currentQuestion,
    currentIndex,
    onAnswerPress,
  } = useQuiz(props);
  return (
    <View style={styles.container}>
      <Text>{currentQuestion.category}</Text>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => onAnswerPress(true)}>
          <Text>{"True"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onAnswerPress(false)}>
          <Text>{"False"}</Text>
        </TouchableOpacity>
      </View>
      <Text>{`${currentIndex + 1} of ${questionList.length}`}</Text>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "space-around",
  },
  questionContainer: {
    width: "80%",
    height: undefined,
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  questionText: {
    fontSize: 20,
    maxWidth: "90%",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
