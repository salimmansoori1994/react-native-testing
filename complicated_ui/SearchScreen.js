import React from 'react';
import { View, Text , StyleSheet  ,TouchableHighlight} from 'react-native';
import { Avatar, Card,Button, Title, Paragraph ,Dialog } from 'react-native-paper'; 
import { ScrollView } from 'react-native';
import MyHeader from './MyHeader';
import Mycard from './Mycard'
  

export default class SearchScreen extends  React.Component{ 
    static navigationOptions = {
        drawerLabel:'Search',
    }

       render(){ 
    return (    
            <View >
            <MyHeader name='Search'  />
         
        

                        <View style={{flexDirection:'row',padding:10,justifyContent:'space-around'}}>
                        <Button mode="contained"   >
                        Adb
                        </Button>  
                        <Button mode="contained" >
                      DAB
                        </Button>  
                        </View>
                    
                        <ScrollView contentContainerStyle={{ paddingHorizontal: 0 }}>
               <Mycard />
               <Mycard />
               <Mycard />
               <Mycard />
               <Mycard />
               <Mycard />
               </ScrollView>
 
            </View>
           
    );
    }
}       

