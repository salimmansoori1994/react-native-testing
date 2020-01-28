import React from 'react';
import { Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

export default function  MyHeader(props){    

         
    return (     
      <Appbar.Header style={{backgroundColor:"white"}}> 
           <Ionicons name="md-menu" size={32} color="#F86262" style={{marginLeft:10}} />
        <Text style={{ color:'#F86262' , marginLeft:10 , fontSize:25 }} >{props.name} </Text> 
      </Appbar.Header>
    );

}    

