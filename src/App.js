import React from 'react'
import { Provider } from 'react-redux';
import GlobalStyles from '@pam/assets/styles/globalStyle';
import {store} from './redux/store';
import Routes from './router';
import AppProvider from './AppProvider';

const App = () => {
  return (
    <Provider store={store}>
      <AppProvider>
        <>
        <GlobalStyles />
        <Routes />
        </>
      </AppProvider>
    </Provider>
  )
}

export default App;

