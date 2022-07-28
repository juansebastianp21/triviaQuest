import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import useQuiz from "./hooks/useQuiz";
import styles from "./styles/QuizStyles";

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
      <LinearGradient
        colors={["#E85630", "#E88E18"]}
        start={{ x: 0.1, y: 0.2 }}
        style={styles.categoryContainer}
      >
        <Text style={styles.categoryText}>{currentQuestion.category}</Text>
      </LinearGradient>
      <View style={[styles.questionContainer, styles.shadowProps]}>
        <Text style={styles.infoText}>{`${currentIndex + 1} of ${
          questionList.length
        }`}</Text>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Text style={styles.buttonsTitle}>{"Select the correct answer"}</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => onAnswerPress(true)}
        >
          <Text style={styles.buttonText}>{"True"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => onAnswerPress(false)}
        >
          <Text style={styles.buttonText}>{"False"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quiz;
