import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Text, Card, CardItem, View } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { styles } from '../styles/style'

export class DashboardMainCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <View style={styles.spaRow}>
                        <Col>
                            <View style={style1.dashboardCardIconBox}>
                            <Icon name='home' style={style1.dashboardCardIcon} /> 
                            </View>                            
                        </Col>
                        <Col>                         
                            <Text style={style1.dashboardCardMainText}> Classes  </Text>
                        </Col>
                    </View>
                </CardItem>
            </Card>
        )
    }
}

const style1 = StyleSheet.create({
    dashboardCardIconBox: {
        width: 60,
        height: 60,
        borderRadius: 50,        
        backgroundColor: 'green'
    },
    dashboardCardIcon: {
        fontSize: 40,
        color: 'white',
        textAlign: 'center',
        paddingTop: 7        
    },
    dashboardCardMainText: {
        fontSize: 20,
        textAlign: 'right'
    }
})
