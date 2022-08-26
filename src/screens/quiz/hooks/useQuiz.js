import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  runOnJS,
  withSpring,
} from 'react-native-reanimated';
import { getQuestionList, answerQuestion } from '../../../redux/triviaSlice';
import navigationScreenNames from '../../../utils/contants/navigationScreenNames';

const triviaSelector = (state) => state.trivia;
const useQuiz = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { isLoading, questionList } = useSelector(triviaSelector);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAnswerResult, setCurrentAnswerResult] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(
    questionList[currentIndex],
  );
  const isLastQuestion = currentIndex === questionList.length - 1;
  const modalOpacity = useSharedValue(0);
  const answerScaleValue = useSharedValue(0);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [firstAnimationFinished, setFirstAnimationFinished] = useState(false);
  const [lottiePlayFinished, setLottiePlayAnimationFinished] = useState(false);
  const iconAnimationRef = useRef(null);
  const config = {
    duration: 1000,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  useEffect(() => {
    dispatch(getQuestionList());
  }, []);

  const onAnswerPress = (value) => {
    const payload = {
      index: currentIndex,
      answer: value,
    };
    dispatch(answerQuestion(payload));
    if (isLastQuestion) navigation.navigate(navigationScreenNames.results);
    else {
      setCurrentIndex(currentIndex + 1);
      setCurrentQuestion(questionList[currentIndex + 1]);
    }
  };

  const onModalAnimationFinished = () => {
    setFirstAnimationFinished(true);
  };
  const onIconAnimationFinished = () => {
    iconAnimationRef.current?.play();
    setLottiePlayAnimationFinished(true);
  };

  const onLottieAnimationFinished = () => {
    answerScaleValue.value = 0;
    modalOpacity.value = 0;
    setTimeout(() => {
      setButtonPressed(false);
      setFirstAnimationFinished(false);
      setLottiePlayAnimationFinished(false);
    }, 1100);
    onAnswerPress(currentAnswerResult);
  };

  const modalStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(modalOpacity.value, config, (finished) => {
        if (finished && buttonPressed) {
          answerScaleValue.value = 1;
          runOnJS(onModalAnimationFinished)();
        }
      }),
    };
  });

  const answerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withSpring(answerScaleValue.value, undefined, (finished) => {
            if (finished && firstAnimationFinished && !lottiePlayFinished) {
              console.log('Answer animation Dispatched');
              runOnJS(onIconAnimationFinished)();
            }
          }),
        },
      ],
    };
  });

  const onButtonPress = (value) => {
    console.log('Button Presed, value: ', value);
    setCurrentAnswerResult(
      JSON.stringify(value) === currentQuestion.correct_answer.toLowerCase(),
    );
    setButtonPressed(true);
    modalOpacity.value = 1;
  };

  return {
    isLoading,
    questionList,
    currentQuestion,
    currentIndex,
    modalStyle,
    answerStyle,
    iconAnimationRef,
    buttonPressed,
    currentAnswerResult,
    onAnswerPress,
    onButtonPress,
    onLottieAnimationFinished,
  };
};

export default useQuiz;
