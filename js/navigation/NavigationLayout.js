import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import AboutScreen from '../screens/About';
import MapsScreen from '../screens/Maps';
import FavesScreen from '../screens/Faves';
import SessionScreen from '../screens/Session';
import ScheduleScreen from '../screens/Schedule';


const ScheduleStack = createStackNavigator({
    Schedule: ScheduleScreen,
    Session: SessionScreen
});

const MapsStack = createStackNavigator({
    Maps: MapsScreen
});

const FavesStack = createStackNavigator({
    Faves: FavesScreen, 
    Session: SessionScreen
});

const AboutStack = createStackNavigator({
  About: AboutScreen
});


export default createBottomTabNavigator({
    Schedule: ScheduleStack,
    Maps: MapsStack,
    Faves: FavesStack,
    About: AboutStack
});