import { combineReducers } from 'redux';
import App from '@pam/redux/app/reducer';
import Auth from '@pam/redux/auth/reducer';
import ThemeSwitcher from '@pam/redux/themeSwitcher/reducer';
import YoutubeSearch from '@pam/redux/youtubeSearch/reducers';
import profile from '@pam/redux/profile/reducer';

export default combineReducers({
    Auth,
    App,
    ThemeSwitcher,
    YoutubeSearch,
    profile
});