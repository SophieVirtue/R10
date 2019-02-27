import React, { Component } from "react";
import { Text, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import Session from "./Session";
import gql from "graphql-tag";

export default class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session",
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontSize: 25
    }
  };

  render() {
    let { navigation } = this.props;
    let description = navigation.getParam("description");
    let title = navigation.getParam("title");
    let location = navigation.getParam("location");
    let startTime = navigation.getParam("startTime");
    let speaker = navigation.getParam("speaker");
    return (
      <Query
        query={gql`
          query allSpeakers($id: ID) {
            allSpeakers(filter: { id: $id }) {
              id
              bio
              name
              image
              url
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>Error</Text>;

          return (
            <Session
              data={data.allSpeakers[0]}
              description={description}
              title={title}
              location={location}
              startTime={startTime}
              speaker={speaker}
              navigation={navigation}
            />
          );
        }}
      </Query>
    );
  }
}
