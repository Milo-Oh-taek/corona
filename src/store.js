import { createStore } from "redux";
import reducer from "./reducers/corona";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";
import { applyMiddleware } from "redux";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)