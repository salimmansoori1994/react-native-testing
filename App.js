import React from 'react';
import { StyleSheet,Text,View,Button,TextInput,Alert,ScrollView,Image, ImageBackground} from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper'; 
import MyHeader from './complicated_ui/MyHeader';
import SearchScreen from './complicated_ui/SearchScreen';
import { createDrawerNavigator  } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
   
      

class App extends React.Component {

  static navigationOptions = {
    drawerLabel:'Home',
  } 

  render(){ 
 
  return (   
    <View style={styles.container}>  
        <MyHeader name='Home' /> 
    <ImageBackground style={{width:"100%",height:"55%",borderRadius:80}} resizeMode='stretch'  source={require('./assets/mycurve.png')} > 
      <TextInput style={{borderRadius:30,margin:20,marginTop:80,backgroundColor:'white',height:50,padding:10,textAlign:'center'}} placeholder='Enter the values' />
      </ImageBackground>  
            <View style={{flex:1,flexDirection:"row",marginTop:"-45%",justifyContent:'space-around'}}>
                      <View > 
                      <Card style={styles.card}>
                      
                      <Card.Content>
                      <Title>react native</Title>
                      <Paragraph>salim</Paragraph>
                      </Card.Content>
                      </Card>   
                       <Card style={styles.card}>
                      
                      <Card.Content>
                      <Title>react native</Title>
                      <Paragraph>salim</Paragraph>
                      </Card.Content>
                      </Card>  
                       <Card style={styles.card}>
                      
                      <Card.Content>
                      <Title>react native</Title>
                      <Paragraph>salim</Paragraph>
                      </Card.Content>
                      </Card>                  
                      </View>
                          <View> 
                       <Card style={styles.card}>
                      
                      <Card.Content>
                      <Title>react native</Title>
                      <Paragraph>salim</Paragraph>
                      </Card.Content>
                      </Card>   
                       <Card style={styles.card}>
                      
                      <Card.Content>
                      <Title>react native</Title>
                      <Paragraph>salim</Paragraph>
                      </Card.Content>
                      </Card>  
                       <Card style={styles.card}>
                      
                      <Card.Content>
                      <Title>react native</Title>
                      <Paragraph>salim</Paragraph>
                      </Card.Content>
                      </Card>                  
                      </View>
            </View>
    </View>   
  );      
}  
   
} 
 
 

const MyDrawer = createDrawerNavigator({
    search : SearchScreen,
    home : App 
});

export default createAppContainer(MyDrawer);
 
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f9f9f9',
    
  },
  card:{
    marginBottom:10,
    elevation:20
  }
});
 