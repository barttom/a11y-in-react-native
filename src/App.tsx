import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigator} from './navigators/MainNavigator';
import {AppContextProvider} from './context/AppContext';

export default function App() {
  return (
    <AppContextProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </AppContextProvider>
  );
}
