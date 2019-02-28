import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import AboutScreen from "../screens/About";
import MapsScreen from "../screens/Maps";
import FavesScreen from "../screens/Faves";
import SessionScreen from "../screens/Session";
import ScheduleScreen from "../screens/Schedule";
import { colors } from "../config/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { sharedNavigationOptions } from './config';

const ScheduleStack = createStackNavigator(
    {
        Schedule: ScheduleScreen,
        Session: SessionScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
          ...sharedNavigationOptions(navigation)
        })
    }
);

const MapsStack = createStackNavigator(
    {
        Map: MapsScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
          ...sharedNavigationOptions(navigation)
        })
    }
);

const FavesStack = createStackNavigator(
    {
        Faves: FavesScreen,
        Session: SessionScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
          ...sharedNavigationOptions(navigation)
        })
    }
);

const AboutStack = createStackNavigator(
    {
        About: AboutScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
          ...sharedNavigationOptions(navigation)
        })
    }
);

export default createBottomTabNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapsStack,
    Faves: FavesStack,
    About: AboutStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Schedule") {
          iconName = `ios-calendar`;
        } else if (routeName === "Map") {
          iconName = `ios-map`;
        } else if (routeName === "Faves") {
          iconName = `ios-heart`;
        } else if (routeName === "About") {
          iconName = `ios-information-circle`;
        }
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#fff",
      inactiveTintColor: colors.mediumGrey,
      labelStyle: {
        fontSize: 10,
        fontFamily: 'Montserrat'
      },
      style: {
        backgroundColor: "#000"
      }
    }
  }
);
