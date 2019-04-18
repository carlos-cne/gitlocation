import { all, takeLatest } from 'redux-saga/effects';

import { addUserRequest } from './user';
import { Types as UserTypes } from '~/store/ducks/user';

export default function* rootSaga() {
  yield all([takeLatest(UserTypes.ADD_USER_REQUEST, addUserRequest)]);
}
