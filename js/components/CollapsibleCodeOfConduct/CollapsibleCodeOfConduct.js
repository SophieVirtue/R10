import React, { Component } from "react";
import {
  View,
  Text,
  LayoutAnimation,
  TouchableOpacity,
  Animated
} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../../config/styles";

export default class CollapsibleCodeOfConduct extends Component {
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