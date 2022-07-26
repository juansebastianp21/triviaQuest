import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";

import triviaReducer from "./triviaSlice";
import triviaSaga from "../sagas/triviaSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: {
    trivia: triviaReducer,
  },
  middleware: [...middlewares],
});
sagaMiddleware.run(triviaSaga);

export default store;
