import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getQuestionList, answerQuestion } from "../../../redux/triviaSlice";
import navigationScreenNames from "../../../utils/contants/navigationScreenNames";

const triviaSelector = (state) => state.trivia;
const useResults = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { questionList } = useSelector(triviaSelector);
  const parsedQuestionList = questionList.map((item) => ({
    ...item,
    correct_answer: item.correct_answer.toLowerCase() === "true",
  }));
  const correctAnswers = parsedQuestionList.filter(
    (item) => item.answer === item.correct_answer
  ).length;

  const onRetryPress = () => navigation.navigate(navigationScreenNames.home);

  return {
    parsedQuestionList,
    correctAnswers,
    onRetryPress,
  };
};

export default useResults;
