import React, { Component } from "react";
import { Text, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import Schedule from "./Schedule";
import gql from "graphql-tag";
import { formatSessionData } from '../../lib/helpers/dataFormatHelpers';
import { colors } from "../../config/styles";

export default class ScheduleContainer extends Component {

static navigationOptions = {
  title: 'Schedule',
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontSize: 25
  }
};

  render() {
    return (
      <Query
        query={gql`
          {
            allSessions {
              id
              location
              startTime
              title
              description
              speaker {
                id
                name
                bio
                image
                url
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>Error</Text>;
          return <Schedule data={formatSessionData(data.allSessions)} navigation={this.props.navigation} />;
        }}
      </Query>
    );
  }
}


