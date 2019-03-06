import React from "react";
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
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
import PropTypes from "prop-types";

const Speaker = props => {
  let { navigation, image, name, bio, url } = props;
  state = { modalVisable: false };
  return (
    <View style={styles.container}>
      <View style={styles.flexSpeaker}>
        <View style={{ paddingTop: 40 }}>
          <TouchableHighlight
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon name="ios-close" style={styles.x} size={50} />
          </TouchableHighlight>
        </View>
        <Text style={styles.heading}>About the Speaker</Text>
      </View>
      <ScrollView style={styles.infoSection}>
        <Image style={styles.image} source={{ uri: image }} />
        <Text style={styles.speakerName}>{name}</Text>
        <Text style={styles.bio}>{bio}</Text>
        <View>
          <TouchableOpacity
            onPress={() => Linking.openURL(`${url}`)}
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
};

Speaker.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired
};

export default Speaker;
