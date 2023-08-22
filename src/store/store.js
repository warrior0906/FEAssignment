import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import UsersSlice from './slice/UsersSlice';

const sagaMiddle = createSagaMiddleware();

export const createStore = () => configureStore({
  reducer: {
    user: UsersSlice,
  },
  middleware: [sagaMiddle],
});

export const store = createStore();

sagaMiddle.run(rootSaga);