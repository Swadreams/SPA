import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { DashboardHeader } from '../sections/spa-dashboard-content-header';
import { DashboardMainCard } from '../sections/spa-dashboard-main-card';
import { StyleGuide } from '../sections/spa-styleguide';

import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import lang from '../translations/locale';
export default class LayoutExample extends Component {
  static navigationOptions = {
      title: 'Dashboard'
  }
  
  constructor() {
    super();
    this.cards = [
      {icon: 'edit', label: lang.take_attendance, bgColor: '#e67e22', subLabel:lang.quick_add},
      {icon: 'book', label: lang.manage_your_classes, bgColor: '#27ae60', subLabel:lang.class_dashboard},
      {icon: 'users', label: lang.add_edit_students, bgColor: '#e74c3c', subLabel:lang.student_center},
      {icon: 'checkSquare', label: lang.record_grades, bgColor: '#af64cc', subLabel:''},
    ];
  }

  render() {
    return (
      <Content>
        <View>
          <DashboardHeader classCount={20} studentsCount={40} /> 
          <View>          
            <FlatList
                  data={ this.cards }
                  keyExtractor={(item, index) => item.icon.toString()}
                  renderItem={({item}) =>
                  <DashboardMainCard icon={item.icon}
                                    label={item.label}
                                    bgColor={item.bgColor} 
                                    subLabel={item.subLabel} />
                  } 
              />
          </View>
          <StyleGuide />
        </View>   
      </Content>   
    );
  };
}