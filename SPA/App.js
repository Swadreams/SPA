import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from './src/views/home';

const Routes = createStackNavigator({
  Home: { 
    screen: Home,
  },  
});
export default class App extends React.Component {
  // static navigatorOptions = {
  //       header: null
  //   }
  constructor() {
    super();
    this.state = {
      readyFlag: false,
    };
  }
  
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('./Fonts/Roboto.ttf'),
      'Roboto_medium': require('./Fonts/Roboto_medium.ttf'),        
      'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });
    this.setState({ readyFlag: true });
  }

  render() {
    if (!this.state.readyFlag) {
      return <Expo.AppLoading />;
    }
    return (
      <Routes />
    );
  }
}