
import React from 'react';
import { View, Text , StyleSheet ,Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  
  render() {
    
    // console.log("fromhome",this.props)
    return ( 
      <View style={styles.container}>
        <Text>Home Screen data </Text>  
        <Text>{this.props.navigation.getParam('name')}</Text>
        <Button color="#1E6738" 
        title ="go to about"
        onPress= {()=> this.props.navigation.navigate('About',{name:'i Love u'})}
        />
      </View>  
    );
  }
}  
 
class Aboutscreen extends React.Component {
  static navigationOptions = {
    title: 'About',
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text>About Screen data</Text>
    <Text>{this.props.navigation.getParam('name',"no data")}</Text>
        <Button color="red" 
        title = "go to home page"
        onPress={()=>this.props.navigation.navigate("Home",{name:'I Love u too'})} 
        />
      </View>  
    );
  }
}
    
const AppNavigator = createStackNavigator({
  Home: HomeScreen, 
  About:  Aboutscreen,
},
{
  initialRouteName: '',
  // headerMode:'none',
  /* The header config from HomeScreen is now here */
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});   

export default createAppContainer(AppNavigator);
  

//export default App;
 
const styles = StyleSheet.create({
  container: {  
    flex: 1, 
    backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 