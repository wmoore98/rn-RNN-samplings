import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';
// import { Navigation } from "react-native-navigation";
import { pushTabBasedApp } from 'AppNavigator';


import styles from './styles';

export default class HomeScreen extends PureComponent {

/*
    goToProfile = () => {
        Navigation.push(this.props.componentId, {
            component: {
              name: 'projectTwoRN.PostsScreen',
              passProps: {
                text: 'Pushed screen'
              },
              options: {
                topBar: {
                  title: {
                    text: 'Profile'
                  }
                }
              }
            }
        });
    };
*/

    render() {
        const { containerStyle, textStyle } = styles;

        return (
            <View style={containerStyle}>
                <Text style={textStyle}>This is the Home Screen</Text>
                <Text style={textStyle}>{this.props.text}</Text>
                <Button
                    title={'Go to Profile'}
                    // onPress={this.goToProfile}
                    onPress={pushTabBasedApp}
                />
             </View>
        );
    }
}