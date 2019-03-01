import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  LayoutAnimation,
  ScrollView, 
  TouchableOpacity
} from "react-native";
import styles from "./styles";

class CollapsibleCodeOfConduct extends Component {
  state = { isOpen: false };

  _toggle() {
    LayoutAnimation.easeInEaseOut();
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { styles, item } = this.props;
    return (
      <View>
        <TouchableOpacity style={styles.sessionTitle} onPress={() => this._toggle()}>
        {this.state.isOpen === false ? (<View style={styles.flexTitle}><Text style={styles.sessionTitle}>+  </Text><Text style={styles.sessionTitle}>{item.title}</Text></View>) :
        (<View style={styles.flexTitle}><Text style={styles.sessionTitle}>-  </Text><Text style={styles.sessionTitle}>{item.title}</Text></View>)
        }
         
        </TouchableOpacity>
        {this.state.isOpen ? (
          <Text style={styles.sessionDescription}>{item.description}</Text>
        ) : null}
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
                <CollapsibleCodeOfConduct styles={styles} item={item}/>
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
