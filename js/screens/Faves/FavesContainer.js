import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Query } from 'react-apollo';
import Faves from './Faves';
import gql from 'graphql-tag';

export default class FavesContainer extends Component {

  static navigationOptions = {
    title: 'Faves',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 25
    }
  };

  render() {
    return (
      <View>
        <Text> Faves! </Text>
      </View>
    );
  }
}
