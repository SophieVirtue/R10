import React, { Component } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import About from './About';
import gql from 'graphql-tag';

export default class AboutContainer extends Component {

  static navigationOptions = {
    title: 'About',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 25
    }
  };

  render() {
    return (
        <Query query={gql`
            {
                allConducts {
                    description
                    id
                    order
                    title
                }
            }
          `}
        >
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>Error</Text>;
          return <About data={data} />;
    }}
    </Query>
    );
  }
}
