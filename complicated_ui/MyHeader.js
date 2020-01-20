import React from 'react';
import { Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

export default function  MyHeader(){ 

        
    return (
      <Appbar.Header style={{backgroundColor:"white"}}>
           <Ionicons name="md-menu" size={32} color="#F86262" />
        <Appbar.Content
          title="Title"
          subtitle="Subtitle"
        />
 
      </Appbar.Header>
    );

}

