import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getQuestionList,
  answerQuestion,
  clearFetchData,
} from "../../../redux/triviaSlice";
import navigationScreenNames from "../../../utils/contants/navigationScreenNames";

const triviaSelector = (state) => state.trivia;
const useHome = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { isLoading, fetchSuccess } = useSelector(triviaSelector);

  useEffect(() => {
    if (fetchSuccess) {
      navigation.navigate(navigationScreenNames.quiz);
      dispatch(clearFetchData());
    }
  }, [fetchSuccess]);

  const onBeginPress = () => dispatch(getQuestionList());

  return {
    onBeginPress,
    isLoading,
  };
};

export default useHome;
