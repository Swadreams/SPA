import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from './src/views/home';

const Routes = createStackNavigator({
  Home: { 
    screen: Home 
  },  
});
export default class App extends React.Component {
  render() {
    return (
      <Routes />
    );
  }
}