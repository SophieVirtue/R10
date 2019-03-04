import React, { Component } from "react";
import { Text, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import Schedule from "./Schedule";
import gql from "graphql-tag";
import { formatSessionData } from "../../lib/helpers/dataFormatHelpers";
import FavesContext from "../../context";
import { fonts, colors } from "../../config/styles";

export default class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule",
    headerTintColor: colors.white,
    headerTitleStyle: {
      fontSize: 22,
      fontFamily: fonts.regular
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
          if (loading)
            return (
              <ActivityIndicator size="large" style={{ height: "100%" }} />
            );
          if (error) return <Text>Error</Text>;
          return (
            <FavesContext.Consumer>
              {({ faveIds, setFaveId, removeFaveId }) => {
                return (
                  <Schedule
                    data={formatSessionData(data.allSessions)}
                    navigation={this.props.navigation}
                    faveIds={faveIds}
                    setFaveId={setFaveId}
                    removeFaveId={removeFaveId}
                  />
                );
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}
