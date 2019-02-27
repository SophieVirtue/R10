import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";

export default class Session extends Component {
  render() {
    
    
    return (
      <View>
        {/* <TouchableHighlight
          onPress={() =>
            navigate("Speaker", {
              bio: item.bio,
              name: item.name,
              id: item.id
            })
          }
        > */}
          <View>
          <Text>{this.props.location}</Text>
            <Text>{this.props.title}</Text>
            <Text>{this.props.startTime}</Text>
            <Text>{this.props.description}</Text>

          </View>
        {/* </TouchableHighlight> */}
      </View>
    );
  }
}
