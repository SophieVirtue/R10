import React, { Component } from "react";
import Maps from "./Maps";
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
      <Maps
        latitude={49.2633479}
        longitude={-123.1403165}
    />
    );
  }
}
