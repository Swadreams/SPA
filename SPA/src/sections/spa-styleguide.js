import React, { Component } from 'react';
import { Text, View } from 'react-native';
import spaStyles from '../styles/theme.classes';

export class StyleGuide extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={spaStyles.h1}> H1 Styling Text</Text>
                <Text style={spaStyles.h2}> H2 Styling Text</Text>
                <Text style={spaStyles.h3}> H3 Styling Text</Text>
                <Text style={spaStyles.h4}> H4 Styling Text</Text>
                <Text style={spaStyles.h5}> H5 Styling Text</Text>
                <Text style={spaStyles.h6}> H6 Styling Text</Text>
                <Text style={spaStyles.Body_Regular}> Body Regular Text</Text>
                <Text style={spaStyles.Body_Small}> Body Small Text</Text>
                <Text style={spaStyles.Text_Style}> Regular Text</Text>
                <Text style={spaStyles.Link_Style}> Link style Text</Text>
                <Text style={spaStyles.Error_Style}> Error Text</Text>
            </View>
        )
    }
}