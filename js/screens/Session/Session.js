import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  Platform,
  ScrollView
} from "react-native";
import moment from "moment";
import LinearGradient from 'react-native-linear-gradient'
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import { colors } from "../../config/styles";

export default class Session extends Component {
  render() {
    return (
      <ScrollView style={styles.screen}>
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
          <Text style={styles.time}>
            {moment(this.props.startTime).format("LT")}
          </Text>
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
                <Text style={styles.speakerName}>
                  {this.props.speaker.name}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View>
          {this.props.faveIds.includes(this.props.id) ? (
            <TouchableOpacity
              onPress={() => {
                this.props.removeFaveId(this.props.id);
              }}
              style={styles.button}
            >
            <LinearGradient
              colors={['#9963ea', '#8797D6']}
              start={{ x: 0.0, y: 1.0 }}
              end={{ x: 1.0, y: 0.0 }}
              style={styles.rounded}
            >
              <Text style={styles.buttonText}>Remove from Faves</Text>
            </LinearGradient>
          </TouchableOpacity>
          ) : (
            <TouchableOpacity
            onPress={() => {
              this.props.setFaveId(this.props.id);
            }}
            style={styles.button}
          >
          <LinearGradient
            colors={['#9963ea', '#8797D6']}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={styles.rounded}
          >
            <Text style={styles.buttonText}>Add to Faves</Text>
          </LinearGradient>
        </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    );
  }
}
