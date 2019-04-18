import { put, call, select } from 'redux-saga/effects';

import api from '~/services/api';
import { Creators as UserActions } from '~/store/ducks/user';

export function* addUserRequest({ payload }) {
  try {
    const { data } = yield call(api.get, `/users/${payload.username}`);
    yield put(UserActions.addUserSuccess(data, payload.coordinate));
  } catch (error) {
    yield put(UserActions.addUserError());
    console.tron.log(error);
  }
}
