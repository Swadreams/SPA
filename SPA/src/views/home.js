import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { DashboardHeader } from '../sections/spa-dashboard-content-header';
import { DashboardMainCard } from '../sections/spa-dashboard-card';
import { StyleGuide } from '../sections/spa-styleguide';

import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class LayoutExample extends Component {
  static navigationOptions = {
      title: 'Dashboard'
  }
  
  constructor() {
    super();
    this.cards = [{id: 1, icon: 'edit', label: 'First Link', bgColor: 'red', subLabel:"Click On This Link"}];
  }

  render() {
    return (
      <Content>
        <View>          
          <DashboardHeader classCount={20} studentsCount={40} /> 
          <View>          
            <FlatList
                  data={ this.cards }
                  keyExtractor={(item, index) => item.id.toString()}
                  renderItem={({item}) =>
                  <DashboardMainCard icon={item.icon} 
                                    label="First Link" 
                                    bgColor="red"  
                                    subLabel="Click On This Link"/>
                  } 
              />
          </View>
          <StyleGuide />
        </View>   
      </Content>   
    );
  };
}