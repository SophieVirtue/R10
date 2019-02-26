import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Query } from 'react-apollo';
import Schedule from './Schedule';
import gql from 'graphql-tag';

export default class ScheduleContainer extends Component {
  render() {
    return (
      <View>
        <Text> Schedule! </Text>
      </View>
    );
  }
}
