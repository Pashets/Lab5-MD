import React from 'react';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import AppNavigation from "./navigation/AppNavigation";
import { StatusBar  } from 'react-native';
StatusBar.setBarStyle('dark-content')

const backColor = "#000000"

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: backColor,
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <AppNavigation />
    </NavigationContainer>
  )
}