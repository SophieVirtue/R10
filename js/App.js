import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import client from './config/api';
import { ApolloProvider } from 'react-apollo';
import RootStackNavigator from './navigation/RootStackNavigator';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStackNavigator />
      </ApolloProvider>
    );
  }
}