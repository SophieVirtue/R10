import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  TouchableHighlight,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from 'react-native-linear-gradient'
import styles from "./styles";

export default class Speaker extends Component {
  state = { modalVisable: false };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flexSpeaker}>
          <View style={{ paddingTop: 40 }}>
            <TouchableHighlight
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <Icon name="ios-close" style={styles.x} size={50} />
            </TouchableHighlight>
          </View>
          <Text style={styles.heading}>About the Speaker</Text>
        </View>
        <ScrollView style={styles.infoSection}>
          <Image style={styles.image} source={{ uri: this.props.image }} />
          <Text style={styles.speakerName}>{this.props.name}</Text>
          <Text style={styles.bio}>{this.props.bio}</Text>
          <View>
          <TouchableOpacity
            onPress={() => Linking.openURL(`${this.props.url}`)}
            style={styles.button}
          >
            <LinearGradient
              colors={["#9963ea", "#8797D6"]}
              start={{ x: 0.0, y: 1.0 }}
              end={{ x: 1.0, y: 0.0 }}
              style={styles.rounded}
            >
              <Text style={styles.buttonText}>Read More on Wikipedia</Text>
            </LinearGradient>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
