import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  Button,
  Platform
} from "react-native";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import { colors } from "../../config/styles";

export default class Session extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <View>
          <View style={styles.flexHeart}>
            <Text style={styles.location}>{this.props.location}</Text>
            {this.props.faveIds.includes(this.props.id) ? (
              <Icon
                name={Platform.select({
                  ios: "ios-heart",
                  android: "md-heart"
                })}
                size={20}
                color={colors.red}
              />
            ) : (
              <Text />
            )}
          </View>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.time}>{moment(this.props.startTime).format("LT")}</Text>
          <Text style={styles.description}>{this.props.description}</Text>
          <Text style={styles.location}>Presented by:</Text>
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
              <View style={styles.flexSpeaker}>
              <Image
                  style={styles.image}
                  source={{ uri: this.props.speaker.image }}
                />
                <Text>{this.props.speaker.name}</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View>
          {this.props.faveIds.includes(this.props.id) ? (
            <Button
              onPress={() => {
                this.props.removeFaveId(this.props.id);
              }}
              title="Remove from Faves"
              color="#841584"
              accessibilityLabel="Unfavourite this Session"
            />
          ) : (
            <Button
              onPress={() => {
                this.props.setFaveId(this.props.id);
              }}
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
