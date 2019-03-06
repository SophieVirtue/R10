import React from "react";
import {
  View,
  Text,
  SectionList,
  TouchableHighlight,
  Platform
} from "react-native";
import styles from "./styles";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../../config/styles";
import PropTypes from "prop-types";

const Faves = props => {
  let { navigate } = props.navigation;
  let { data, faveIds } = props;
  return (
    <View>
      <SectionList
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableHighlight
                onPress={() =>
                  navigate("Session", {
                    description: item.description,
                    title: item.title,
                    location: item.location,
                    startTime: item.startTime,
                    id: item.id,
                    speaker: item.speaker
                  })
                }
              >
                <View style={styles.block}>
                  <Text style={styles.title}>{item.title}</Text>
                  <View style={styles.flexHeart}>
                    <Text style={styles.location}>{item.location}</Text>
                    {faveIds.includes(item.id) ? (
                      <Icon
                        name={Platform.select({
                          ios: "ios-heart",
                          android: "md-heart"
                        })}
                        size={18}
                        color={colors.red}
                      />
                    ) : (
                      <Text />
                    )}
                  </View>
                </View>
              </TouchableHighlight>
            </View>
          );
        }}
        sections={data}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.time}>{moment(title).format("LT")}</Text>
        )}
        keyExtractor={(item, index) => index + ""}
      />
    </View>
  );
};

Faves.propTypes = {
  data: PropTypes.array.isRequired,
  faveIds: PropTypes.array.isRequired
};

export default Faves;
