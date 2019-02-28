import React, { Component } from "react";
import { View, Text, Image, FlatList } from "react-native";
import styles from "./styles";

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.displayLogo}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/r10_logo.png")}
          />
        </View>
        <Text style={styles.text}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text style={styles.title}>Date & Venue</Text>
        <Text style={styles.text}>
          The R10 conference will take place on Tuesday, June 27, 2017 in
          Vancouver, BC.
        </Text>
        <Text style={styles.title}>Code of Conduct</Text>
        <FlatList
          data={this.props.data.allConducts}
          renderItem={({ item }) => {
            return (
              <View style={styles.list}>
                <Text style={styles.sessionTitle}>+  {item.title}</Text>
                <Text style={styles.sessionDescription}>{item.description}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => "" + index}
        />
        <View>
          <Text>&copy; RED Academy 2017</Text>
        </View>
      </View>
    );
  }
}
