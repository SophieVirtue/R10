import React, { Component } from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import moment from "moment";
import styles from "./styles";

export default class Session extends Component {
  render() {
    return (
      <View>
        <View>
          <Text>{this.props.location}</Text>
          <Text>{this.props.title}</Text>
          <Text>{moment(this.props.startTime).format("LT")}</Text>
          <Text>{this.props.description}</Text>
          <Text>Presented By:</Text>
          <View>
            <TouchableHighlight
              onPress={() =>
                this.props.navigation.navigate("Speaker", {
                  bio: this.props.speaker.bio,
                  image: this.props.speaker.image,
                  name: this.props.speaker.name,
                  id: this.props.speaker.id,
                  url: this.props.speaker.url
                })
              }
            >
              <View>
                <Text>{this.props.speaker.name}</Text>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={{ uri: this.props.speaker.image }}
                />
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
