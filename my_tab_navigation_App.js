
import React from 'react';
import { View, Text , StyleSheet ,Button , Platform} from 'react-native';

import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator  } from 'react-navigation-stack';   
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import MyHomeScreen from './tab_navigation_set/HomeScreen';
import MyNotificationsScreen from './tab_navigation_set/Notificationscreen';  
    
 

const MyHomestack = createStackNavigator({
    Home :  MyHomeScreen,     

  },{
      defaultNavigationOptions:{
          title : "My home"
      }
  }); 
  
  
  const MyNotificationstack = createStackNavigator({
    Notifications :  MyNotificationsScreen,     

  }
  ,{
    defaultNavigationOptions:{
        title : "My notification"
    }   
}); 
    
     
const Mytabs = createBottomTabNavigator({
  Home:  MyHomestack,     
Notifications: MyNotificationstack,
},{
    defaultNavigationOptions:({navigation})=>{
        return{
            tabBarIcon:({tintColor})=>{
                const { routeName } = navigation.state;
                let myicon 
                if(routeName == 'Home'){
                    myicon = 'md-home'
                }else if(routeName == 'Notifications'){
                    myicon = 'md-notifications'
                }

              return <Ionicons name={myicon} size={30} color={tintColor}  />
                        
        }
        }
    }

}); 
  


const AppContainer = createAppContainer(Mytabs);

export default class App extends React.Component{
    render(){
        return <AppContainer />
    }  
}
  
 