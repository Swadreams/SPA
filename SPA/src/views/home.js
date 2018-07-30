import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { DashboardHeader } from '../sections/spa-dashboard-content-header';
import { DashboardMainCard } from '../sections/spa-dashboard-card';

import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import styles1 from '../styles/theme.classes';

export default class LayoutExample extends Component {
  static navigationOptions = {
      title: 'Dashboard'
  }
  render() {
    return (
      <Content>
        <View>
          <DashboardHeader style={{height: 50, flex: 1}} classCount={20} studentsCount={40} /> 
          <DashboardMainCard />
          <Text style={styles1.h1}> H1 Styling Text</Text>
          <Text style={styles1.h2}> H2 Styling Text</Text>
          <Text style={styles1.h3}> H3 Styling Text</Text>
          <Text style={styles1.h4}> H4 Styling Text</Text>
          <Text style={styles1.h5}> H5 Styling Text</Text>
          <Text style={styles1.h6}> H6 Styling Text</Text>
          <Text style={styles1.Body_Regular}> Body Regular Text</Text>
          <Text style={styles1.Body_Small}> Body Small Text</Text>
          <Text style={styles1.Text_Style}> Regular Text</Text>
          <Text style={styles1.Link_Style}> Link style Text</Text>
          <Text style={styles1.Error_Style}> Error Text</Text>
        </View>   
      </Content>   
    );
  };
}