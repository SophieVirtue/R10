import React, { Component } from "react";
import { View, Text, Image, FlatList, ScrollView } from "react-native";
import styles from "./styles";
import CollapsibleCodeOfConduct from "../../components/CollapsibleCodeOfConduct";

export default class About extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.display}>
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
                  <CollapsibleCodeOfConduct item={item} />
                </View>
              );
            }}
            keyExtractor={(item, index) => "" + index}
          />
        </View>
        <Text style={styles.RED}>&copy; RED Academy 2017</Text>
      </ScrollView>
    );
  }
}
