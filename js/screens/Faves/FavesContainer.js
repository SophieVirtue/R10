import React, { Component } from "react";
import { Text, ActivityIndicator, View } from "react-native";
import { Query } from "react-apollo";
import Faves from "./Faves";
import gql from "graphql-tag";
import { formatSessionData } from "../../lib/helpers/dataFormatHelpers";
import FavesContext from "../../context";
import { fonts, colors } from "../../config/styles";

export default class FavesContainer extends Component {
  static navigationOptions = {
    title: "Faves",
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
                let filteredSessions = data.allSessions.filter(item => {
                  return faveIds.includes(item.id);
                });
                if (filteredSessions.length === 0) {
                  return (
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Text
                        style={{
                          color: colors.purple,
                          fontSize: 20,
                          padding: 50,
                          paddingTop: 220,
                          textAlign: 'center'
                        }}
                      >
                        You haven't Faved any Sessions yet! When you do, they
                        will show up here.
                      </Text>
                    </View>
                  );
                } else {
                  return (
                    <Faves
                      data={formatSessionData(filteredSession)}
                      navigation={this.props.navigation}
                      faveIds={faveIds}
                      setFaveId={setFaveId}
                      removeFaveId={removeFaveId}
                    />
                  );
                }
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}
