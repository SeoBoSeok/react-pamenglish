import { all } from 'redux-saga/effects';
import authSagas from '@pam/redux/auth/saga';
import youtubeSearchSagas from '@pam/redux/youtubeSearch/sagas';
import ProfileSagas from '@pam/redux/profile/saga';

export default function* rootSaga(getState) {
    yield all([authSagas(), youtubeSearchSagas(), ProfileSagas()]);
}