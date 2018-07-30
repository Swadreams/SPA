import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class AnatomyExample extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <Container style={styles.container}>
          <Text> Text test </Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green'
  },
  headerText: {
    textAlign: 'right',
    color: '#fff',
    fontSize: 20
},
})