import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import client from './config/api';
import { ApolloProvider } from 'react-apollo';
import About from '../js/screens/About';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <About />
      </ApolloProvider>
    );
  }
}