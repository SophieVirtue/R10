import React, { Component } from "react";
import { View, Text } from "react-native";
import { Query } from "react-apollo";
import Maps from "./Maps";
import gql from "graphql-tag";
import { fonts, colors } from "../../config/styles";

export default class MapsContainer extends Component {
  static navigationOptions = {
    title: "Map",
    headerTintColor: colors.white,
    headerTitleStyle: {
      fontSize: 22,
      fontFamily: fonts.regular
    }
  };

  render() {
    return (
      <View>
        <Text> Maps! </Text>
      </View>
    );
  }
}
