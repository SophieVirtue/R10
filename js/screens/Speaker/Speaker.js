import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Button,
  Linking,
  TouchableHighlight
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "./styles";

export default class Speaker extends Component {
  state = { modalVisable: false };
  render() {
    return (
      <View>
        <View style={{ paddingTop: 40 }}>
          <TouchableHighlight
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <Icon name="ios-close" color="#000" size={60} />
          </TouchableHighlight>
        </View>
        <Text>About the Speaker</Text>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: this.props.image }}
        />
        <Text>{this.props.name}</Text>
        <Text>{this.props.bio}</Text>
        <Button
          onPress={() => Linking.openURL(`${this.props.url}`)}
          title="Learn More on Wikipedia"
          color="#841584"
          accessibilityLabel="Learn more about this speaker on Wikipedia"
        />
      </View>
    );
  }
}
