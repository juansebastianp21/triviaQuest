import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getQuestionList, answerQuestion } from "../../../redux/triviaSlice";
import navigationScreenNames from "../../../utils/contants/navigationScreenNames";

const triviaSelector = (state) => state.trivia;
const useQuiz = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { isLoading, questionList } = useSelector(triviaSelector);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questionList[currentIndex]
  );
  const isLastQuestion = currentIndex === questionList.length - 1;

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

  return {
    isLoading,
    questionList,
    currentQuestion,
    currentIndex,
    onAnswerPress,
  };
};

export default useQuiz;
