import React, { Component } from "react";
import Speaker from "./Speaker";

export default class SpeakerContainer extends Component {
  render() {
    let { navigation } = this.props;
    return (
      <Speaker
        navigation={navigation}
        bio={navigation.getParam("bio")}
        image={navigation.getParam("image")}
        name={navigation.getParam("name")}
        url={navigation.getParam("url")}
      />
    );
  }
}
