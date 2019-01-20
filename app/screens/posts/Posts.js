import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Navigation } from "react-native-navigation";

import styles from './styles';

export default class PostsScreen extends Component {

    goToHome = () => {
        Navigation.push(this.props.componentId, {
            component: {
              name: 'projectTwoRN.HomeScreen',
              passProps: {
                text: 'Pushed screen'
              },
              options: {
                topBar: {
                  title: {
                    text: 'Homey Screen'
                  }
                }
              }
            }
        });
    };

    render() {
        const { containerStyle, textStyle } = styles;
        return (
            <View style={containerStyle}>
                <Text style={textStyle}>This is the Posts Screen</Text>
                <Text style={textStyle}>{this.props.text}</Text>
                {/* <Button
                    title="Go to Home"
                    onPress={goToHome}
                /> */}
            </View>
        );
    }
}