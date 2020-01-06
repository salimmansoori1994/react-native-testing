import React from 'react';
import { StyleSheet, Text, View , AsyncStorage} from 'react-native';

import { Appbar,TextInput,Button,Card,List,ScrollView} from 'react-native-paper'


const Myheader = (props)=>{

    return (
        <Appbar.Header>
       
          <Appbar.Content
            title="Whiter App"
            subtitle={props.title}
            style = {{alignItems:"center"}}
          />
        </Appbar.Header>
      );

}

export default Myheader ; 