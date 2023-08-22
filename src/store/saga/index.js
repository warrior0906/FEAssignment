import {fork, all} from 'redux-saga/effects';
import usersSaga from './UsersSaga';

export default function* rootSaga() {
  yield all([fork(usersSaga)]);
}