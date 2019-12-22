
import React from 'react';
import { View, Text , StyleSheet ,Button ,TouchableHighlight} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator  } from 'react-navigation-stack';    
import { createDrawerNavigator  } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

import MyHomeScreen from './drawer_data_set/HomeScreen';
import MyNotificationsScreen from './drawer_data_set/Notificationscreen';  
   
      
     
const MyDrawerNavigator = createDrawerNavigator({
  Home:  MyHomeScreen,     
Notifications: MyNotificationsScreen,
},{
drawerOpenRoute : "DrawerOpen",
drawerCloseRoute: "DrawerClose",
drawerToggleRoute: "DrawerToggle",
drawerBackgroundColor: "#f4511e"
}); 

const Stackcontoiner= createStackNavigator({
    defaulthome:MyDrawerNavigator    
 },{ 
     defaultNavigationOptions: ({navigation})=>{
         return{
            title:'Home page',
            headerLeft:<Ionicons name="md-menu" style={{marginLeft:10}} size={32} color="white"   onPress={() =>navigation.toggleDrawer()} />, 
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',  
          headerTitleStyle: {       
            fontWeight: 'bold', 
          },  
         }
     },
   }   
 );

const AppContainer = createAppContainer(Stackcontoiner);

export default class App extends React.Component{
    render(){
        return <AppContainer />
    }  
}
  
