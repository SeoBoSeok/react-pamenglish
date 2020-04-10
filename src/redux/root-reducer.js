import { combineReducers } from 'redux';
import App from '@pam/redux/app/reducer';
import Auth from '@pam/redux/auth/reducer';
import ThemeSwitcher from '@pam/redux/themeSwitcher/reducer';

export default combineReducers({
    Auth,
    App,
    ThemeSwitcher
});