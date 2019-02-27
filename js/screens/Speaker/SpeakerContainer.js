import React, { Component } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import Speaker from './Speaker';
import gql from 'graphql-tag';

export default class SpeakerContainer extends Component {
  render() {
    let { navigation } = this.props;
    let image = navigation.getParam('image');
    let name = navigation.getParam('name');
    let bio = navigation.getParam('bio');
    let id = navigation.getParam('id');
    return (
      <Query
      query={gql`
          speaker {
            id
            bio
            name
            image
          }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <ActivityIndicator />;
        if (error) return <Text>Error</Text>;

        return (
          <Speaker
            image={image}
            name={name}
            bio={bio}
            id={id}
            navigation={this.props.navigation}
          />
        );
      }}
    </Query>
    );
  }
}
