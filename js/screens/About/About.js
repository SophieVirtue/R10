import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  LayoutAnimation,
  ScrollView,
  TouchableOpacity,
  Animated
} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../../config/styles";

class CollapsibleCodeOfConduct extends Component {
  state = {
    isOpen: false,
    spinValue: new Animated.Value(0)
  };

  animateOpen() {
    this.state.spinValue.setValue(0);
    Animated.timing(this.state.spinValue, {
      toValue: 1,
      duration: 1000
    }).start();
  }

  _toggle() {
    LayoutAnimation.easeInEaseOut();
    this.setState({ isOpen: !this.state.isOpen });
    this.animateOpen();
  }

  render() {
    const { item } = this.props;
    // const animatedIcon = Animated.createAnimatedComponent(Icon);
    const spinIcon = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });

    return (
      <View>
        <TouchableOpacity
          style={styles.sessionTitle}
          onPress={() => {
            this._toggle();
            this.animateOpen();
          }}
        >
          {this.state.isOpen ? (
            <View>
              <View style={styles.flexTitle}>
                <Animated.View style={{ transform: [{ rotate: spinIcon }] }}>
                    <Icon name={"ios-remove"} size={20} color={colors.purple} />
                </Animated.View>
                <Text style={styles.sessionTitle}>{item.title}</Text>
              </View>
              <View>
                <Text style={styles.sessionDescription}>
                  {item.description}
                </Text>
              </View>
            </View>
          ) : (
            <View style={styles.flexTitle}>
              <Animated.View style={{ transform: [{ rotate: spinIcon }] }}>
                  <Icon name={"ios-add"} size={20} color={colors.purple} />
              </Animated.View>
              <Text style={styles.sessionTitle}>{item.title}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

export default class About extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
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
        <Text>&copy; RED Academy 2017</Text>
      </ScrollView>
    );
  }
}
