import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Card, CardItem, View } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { styles } from '../styles/style'
import spaStyles from '../styles/theme.classes';
import FontAwesome, { Icons } from 'react-native-fontawesome';

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
                            <View style={[style1.dashboardCardIconBox, {backgroundColor: `${this.props.bgColor}`}]}>
                                <FontAwesome style={style1.dashboardCardIcon}>{Icons[this.props.icon]}</FontAwesome>
                            </View>                            
                        </Col>
                        <Col>                         
                            <Text style={style1.dashboardCardMainText}> {this.props.label}  </Text>
                            <Text style={[spaStyles.Link_Style, spaStyles.Align_Right]}> {this.props.subLabel}  </Text>
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
    },
    dashboardCardIcon: {
        fontSize: 35,
        color: 'white',
        textAlign: 'center',
        paddingTop: 13,
        marginLeft: 2       
    },
    dashboardCardMainText: {
        fontSize: 20,
        textAlign: 'right'
    }
})
