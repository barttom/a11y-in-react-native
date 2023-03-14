import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigator} from './navigators/MainNavigator';
import {MealsContextProvider} from './context/MealsContext';

export default function App() {
  return (
    <MealsContextProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </MealsContextProvider>
  );
}
