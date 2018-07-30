import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { styles } from '../styles/style';
import lang from '../translations/locale';

export class DashboardHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid style={styles.container}>
                <Col style={styles.spaSummaryBox}>   
                <Text style={styles.spaBadge}> {this.props.classCount} </Text>
                <View style={styles.spaRow}> 
                    <Icon name='home' style={styles.spaItem} /> 
                    <Text style={styles.spaItem}> {lang.classes}  </Text>
                </View>
                </Col>

                <Col style={styles.spaSummaryBox}>            
                    <Text style={styles.spaBadge}> {this.props.studentsCount} </Text>                                    
                    <View style={styles.spaRow}> 
                        <Icon name='people' style={styles.spaItem} /> 
                        <Text style={styles.spaItem}> {lang.students}  </Text>
                    </View>
                </Col>
          </Grid>
        )
    }
}