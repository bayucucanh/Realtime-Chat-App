import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import Router from './routes';
import {Provider} from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
        <FlashMessage position="top" />
      </NavigationContainer>
    </Provider>
  );
}
