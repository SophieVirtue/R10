import React, { Component } from "react";
import { Text, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import Faves from "./Faves";
import gql from "graphql-tag";
import { formatSessionData } from "../../lib/helpers/dataFormatHelpers";
import FavesContext from '../../context';

export default class FavesContainer extends Component {
  static navigationOptions = {
    title: "Faves",
    headerTintColor: "#fff",
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
          return (
            <FavesContext.Consumer>
              {({ faveIds, setFaveId, removeFaveId }) => {
                let filteredSession = data.allSessions.filter(item => {
                  return faveIds.includes(item.id);
                });
                return (
                  <Faves
                    data={formatSessionData(filteredSession)}
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

