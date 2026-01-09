import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { store, persistor } from '../store/store';
import RootNavigator from "../navigation/RootNavigator";
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import './localization/i18n'; // Initialize i18n



export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}