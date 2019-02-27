import React, { Component } from "react";
import { View, Text, SectionList, TouchableHighlight } from "react-native";
import styles from "./styles";
import moment from "moment";

export default class Schedule extends Component {
  render() {
    let {navigate} = this.props.navigation
    return (
      <View>
        <SectionList
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableHighlight onPress={() =>
                  navigate("Session", {
                  description: item.description,
                  title: item.title,
                  location: item.location,
                  startTime: item.startTime,
                  id: item.id,
                  speaker: item.speaker
                })
              }>
              <View style={styles.block}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.location}>{item.location}</Text>
                  </View>
                </TouchableHighlight>
              </View>
            );
          }}
          sections={this.props.data}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.time}>
              {moment(title).format("LT")}
            </Text>
          )}
          keyExtractor={(item, index) => index + ""}
        />
      </View>
    );
  }
}
