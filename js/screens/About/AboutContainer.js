import React, { Component } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import About from './About';
import gql from 'graphql-tag';

export default class AboutContainer extends Component {
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
          if (loading) return <ActivityIndicator />
          return <About data={data} />;
    }}
    </Query>
    );
  }
}
