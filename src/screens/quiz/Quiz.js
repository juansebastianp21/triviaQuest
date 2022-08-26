import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import useQuiz from './hooks/useQuiz';
import styles from './styles/QuizStyles';
import LottieView from 'lottie-react-native';

const Quiz = (props) => {
  const {
    questionList,
    currentQuestion,
    currentIndex,
    modalStyle,
    answerStyle,
    buttonPressed,
    iconAnimationRef,
    currentAnswerResult,
    onButtonPress,
    onLottieAnimationFinished,
  } = useQuiz(props);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#E85630', '#E88E18']}
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
      <Text style={styles.buttonsTitle}>{'Select the correct answer'}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => onButtonPress(true)}
        >
          <Text style={styles.buttonText}>{'True'}</Text>
        </TouchableOpacity>
        <View style={{ height: 30 }} />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => onButtonPress(false)}
        >
          <Text style={styles.buttonText}>{'False'}</Text>
        </TouchableOpacity>
      </View>
      {buttonPressed && (
        <Animated.View style={[styles.modal, modalStyle]}>
          <Animated.View style={[styles.answerContainer, answerStyle]}>
            {currentAnswerResult ? (
              <LottieView
                ref={iconAnimationRef}
                loop={false}
                style={styles.icon}
                source={require('../../../assets/lottie/success.json')}
                onAnimationFinish={onLottieAnimationFinished}
              />
            ) : (
              <LottieView
                ref={iconAnimationRef}
                loop={false}
                style={styles.icon}
                source={require('../../../assets/lottie/error.json')}
                onAnimationFinish={onLottieAnimationFinished}
              />
            )}
          </Animated.View>
        </Animated.View>
      )}
    </View>
  );
};

export default Quiz;
