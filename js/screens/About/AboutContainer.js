import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
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
          console.log(data);
          return <About data={data} />;
    }}
    </Query>
    );
  }
}
