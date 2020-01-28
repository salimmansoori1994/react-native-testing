import React from 'react';
import { View, Text , StyleSheet  ,TouchableHighlight} from 'react-native';
import { Avatar, Card, Title, Paragraph , Button } from 'react-native-paper'; 
import { Ionicons } from '@expo/vector-icons';
import MyHeader from './MyHeader';
  

export default function Mycard(){ 

      
    return (    
            <View  style={{margin:10}}>
         
               
                            <Card style={{elevation:5}}>  
 
                            <View style={{flexDirection:'row',padding:10}}>
                                 <View style={{height:80,width:80,borderRadius:40,backgroundColor:"#F86262"}} /> 

                                  <View> 
                                    <Card.Content>
                                    <Title>Salim </Title>
                                    <Paragraph style={{color:'green'}}>Mansoori</Paragraph>
                                    </Card.Content>
                                 </View>
                                 <View> 
                                 <Card.Content>
                                    <Paragraph>Available date</Paragraph>
                                    <View style={{ flaxDirection:'row' }}>
                                    <Ionicons name="md-calendar" size={20} color="#F86262" />
                                    <Text style={{fontSize:10,marginLeft:15,color:'red',marginLeft:15}}> 28/10/2020 </Text>
                                    </View>
                                    </Card.Content>
                                 </View>  
                            </View>
                            <View style={{flexDirection:'row',padding:10,justifyContent:'space-around'}}>
                                                        <Button icon="camera" mode="outlined"  style={{borderRadius:20}} >
                                                        Press me
                                                        </Button>  
                                                        <Button icon="camera" mode="outlined" style={{borderRadius:20}} >
                                                        Press me
                                                        </Button>  
                            </View>


                            </Card>
                 </View>   

       
           
    );
    
}       

