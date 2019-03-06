import React from "react";
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
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import { colors } from "../../config/styles";
import PropTypes from "prop-types";

const Session = props => {
  let {
    location,
    faveIds,
    id,
    title,
    startTime,
    description,
    navigation,
    speaker,
    setFaveId,
    removeFaveId
  } = props;
  return (
    <ScrollView style={styles.screen}>
      <View>
        <View style={styles.flexHeart}>
          <Text style={styles.location}>{location}</Text>
          {faveIds.includes(id) ? (
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
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>{moment(startTime).format("LT")}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.location}>Presented by:</Text>
        <View>
          <TouchableHighlight
          underlayColor={colors.white}
            onPress={() =>
              navigation.navigate("Speaker", {
                bio: speaker.bio,
                image: speaker.image,
                name: speaker.name,
                id: speaker.id,
                url: speaker.url
              })
            }
          >
            <View style={styles.flexSpeaker}>
              <Image style={styles.image} source={{ uri: speaker.image }} />
              <Text style={styles.speakerName}>{speaker.name}</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <View>
        {faveIds.includes(id) ? (
          <TouchableOpacity
            onPress={() => {
              removeFaveId(id);
            }}
            style={styles.button}
          >
            <LinearGradient
              colors={["#9963ea", "#8797D6"]}
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
              setFaveId(id);
            }}
            style={styles.button}
          >
            <LinearGradient
              colors={["#9963ea", "#8797D6"]}
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
};

Session.propTypes = {
  id: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  speaker: PropTypes.objectOf(PropTypes.string).isRequired,
  navigation: PropTypes.object.isRequired,
  faveIds: PropTypes.array.isRequired,
  setFaveId: PropTypes.func.isRequired,
  removeFaveId: PropTypes.func.isRequired
};

export default Session;
