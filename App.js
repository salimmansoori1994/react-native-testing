import React from 'react';
import { StyleSheet, Text, View , AsyncStorage ,ScrollView} from 'react-native';
import { render } from 'react-dom';
import { Appbar,TextInput,Button,Card,List} from 'react-native-paper';

import Ionicons from 'react-native-vector-icons/Ionicons';  
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Searchscreen from './whather_app/searchscreen';
import HomeScreen from './whather_app/HomeScreen';
   

const TabNavigator = createBottomTabNavigator({
    "Current City": HomeScreen,
    "Select city": Searchscreen,
  },    
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Current City') {
          iconName = `md-cloud`;
   
        } else if (routeName === 'Select city') {
          iconName = `md-options`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      activeBackgroundColor:"#6200ee",
      inactiveBackgroundColor:"#6200ee"
    },
  }); 
  
  export default createAppContainer(TabNavigator);

  
   