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
                  bio: item.bio,
                  image: item.image,
                  name: item.name,
                  id: item.id
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
