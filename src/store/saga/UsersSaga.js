import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  fetchUsersSuccess,
  fetchUsersFailure,
} from "../slice/UsersSlice";

export default function* fetchUsersData() {
  yield all([takeEvery("user/fetchUsers", usersSaga)]);
}

function* usersSaga() {
  try {
    const data = yield call(() => fetch("https://panorbit.in/api/users.json"));
    const formattedData = yield data.json();
    yield put(fetchUsersSuccess(formattedData?.users));
    console.log("usersData", formattedData?.users);
  } catch (err) {
    yield put(fetchUsersFailure(err));
    console.log("err", err);
  }
}
