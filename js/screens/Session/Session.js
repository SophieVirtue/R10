import React, { Component } from "react";
import { View, Text, TouchableHighlight, Image, Button } from "react-native";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";

export default class Session extends Component {
  render() {
    return (
      <View>
        <View>
          <Text>{this.props.location}</Text>
          <Icon name="ios-heart" color="red" size={16} />
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
        <View>
          {
            this.props.faveIds.includes(this.props.id)
          ? (
           <Button
            onPress={() => {this.props.removeFaveId(this.props.id)}}
            title="Remove from Faves"
            color="#841584"
            accessibilityLabel="Unfavourite this Session"
          /> 
          ) : (
           <Button
            onPress={() => {this.props.setFaveId(this.props.id)}}
            title="Add to Faves"
            color="#841584"
            accessibilityLabel="Favourite this Session"
          /> 
          )}
        </View>
      </View>
    );
  }
}
