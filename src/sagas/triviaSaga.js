import { call, put, takeEvery } from "redux-saga/effects";
import {
  getQuestionListSuccess,
  getQuestionListFailure,
} from "../redux/triviaSlice";

function* getQuestionListFetch() {
  try {
    const response = yield call(() =>
      fetch(
        "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
      ).then((response) => response.json())
    );
    yield put(getQuestionListSuccess(response));
  } catch (error) {
    yield put(getQuestionListFailure(error));
  }
}

function* triviaSaga() {
  yield takeEvery("trivia/getQuestionList", getQuestionListFetch);
}

export default triviaSaga;
