import React, { Component } from "react";
import { View, Text } from "react-native";
import { Query } from "react-apollo";
import Faves from "./Faves";
import FavesContext from "../../context";
import gql from "graphql-tag";

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
      <FavesContext.Consumer>
        {({ faveIds, setFaveId, removeFaveId }) => {
          return <Faves faveIds={faveIds} />;
        }}
      </FavesContext.Consumer>
    );
  }
}
