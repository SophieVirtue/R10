import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Query } from 'react-apollo';
import Maps from './Maps';
import gql from 'graphql-tag';

export default class MapsContainer extends Component {
  render() {
    return (
      <View>
        <Text> Maps! </Text>
      </View>
    );
  }
}
