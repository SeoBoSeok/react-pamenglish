import { all } from 'redux-saga/effects';
import authSagas from '@pam/redux/auth/saga';

export default function* rootSaga(getState) {
    yield all([authSagas()]);
}