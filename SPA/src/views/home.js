import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { DashboardHeader } from '../sections/spa-dashboard-content-header';
import { DashboardMainCard } from '../sections/spa-dashboard-card';
import { StyleGuide } from '../sections/spa-styleguide';

import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class LayoutExample extends Component {
  static navigationOptions = {
      title: 'Dashboard'
  }
  render() {
    return (
      <Content>
        <View>
          <DashboardHeader style={{height: 50, flex: 1}} classCount={20} studentsCount={40} /> 
          <DashboardMainCard icon='people' label="First Link" bgColor="red"  subLabel="Click On This Link"/>
          <StyleGuide />
        </View>   
      </Content>   
    );
  };
}