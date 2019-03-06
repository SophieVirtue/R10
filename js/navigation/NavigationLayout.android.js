import React from "react";
import {
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";
import AboutScreen from "../screens/About";
import MapsScreen from "../screens/Maps";
import FavesScreen from "../screens/Faves";
import SessionScreen from "../screens/Session";
import ScheduleScreen from "../screens/Schedule";
import { colors, fonts } from "../config/styles";
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

export default createDrawerNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapsStack,
    Faves: FavesStack,
    About: AboutStack
  },
  {
    drawerWidth: 150,
    defaultNavigationOptions: ({ navigation }) => ({
      drawerIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Schedule") {
          iconName = `md-calendar`;
        } else if (routeName === "Map") {
          iconName = `md-map`;
        } else if (routeName === "Faves") {
          iconName = `md-heart`;
        } else if (routeName === "About") {
          iconName = `md-information-circle`;
        }
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      }
    }),
    drawerOptions: {
      activeTintColor: "#fff",
      inactiveTintColor: colors.mediumGrey,
      labelStyle: {
        fontSize: 10,
        fontFamily: fonts.regular
      },
      style: {
        backgroundColor: "#000"
      }
    }
  }
);
