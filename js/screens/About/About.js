import React, { Component } from "react";
import { View, Text, Image, ActivityIndicator, FlatList } from "react-native";
import styles from "./styles";

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 200, height: 50 }}
          source={require("../../assets/images/r10_logo.png")}
        />
        <Text>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text>Date & Venue</Text>
        <Text>
          The R10 conference will take place on Tuesday, June 27, 2017 in
          Vancouver, BC.
        </Text>
        <Text>Code of Conduct</Text>
        <FlatList
          data={this.props.data.allConducts}
          renderItem={({ item }) => {
            return (
              <View style={styles.list}>
                <Text>
                  {item.title}
                  {item.description}
                </Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.line} />}
          keyExtractor={(item, index) => "" + index}
        />
        <Text>&copy; RED Academy 2017</Text>
      </View>
    );
  }
}
