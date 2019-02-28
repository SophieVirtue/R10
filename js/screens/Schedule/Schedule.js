import React, { Component } from "react";
import { View, Text, SectionList, TouchableHighlight, Platform } from "react-native";
import styles from "./styles";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";

export default class Schedule extends Component {
  render() {
    let { navigate } = this.props.navigation;
    return (
      <View>
        <SectionList
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableHighlight
                  onPress={() => {
                    if (!item.speaker) {
                      navigate("", {});
                    } else {
                      navigate("Session", {
                        description: item.description,
                        title: item.title,
                        location: item.location,
                        startTime: item.startTime,
                        id: item.id,
                        speaker: item.speaker
                      });
                    }
                  }}
                >
                  <View style={styles.block}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.location}>{item.location}</Text>
                    {this.props.faveIds.includes(item.id) ? (
                       <Icon
                       name={Platform.select({
                         ios: 'ios-heart',
                         android: 'md-heart'
                       })}
                       size={16}
                       color='red'
                     />
                    ) : (
                      <Text />
                    )}
                  </View>
                </TouchableHighlight>
              </View>
            );
          }}
          sections={this.props.data}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.time}>{moment(title).format("LT")}</Text>
          )}
          keyExtractor={(item, index) => index + ""}
        />
      </View>
    );
  }
}
