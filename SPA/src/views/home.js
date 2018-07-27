import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home'
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>                
                <Text> This is Home Component </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})