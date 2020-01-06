import React from 'react';
import { StyleSheet, Text, View , AsyncStorage ,ScrollView,Image} from 'react-native';
import { Appbar,TextInput,Button,Card,List,Alert, Title} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
// import { Item } from 'react-native-paper/lib/typescript/src/components/List/List';
import Myheader from './Header';

export default class HomeScreen extends React.Component {

    state={
        info:{
            name:"......",
            temp:"......",
            humidity:"......", 
            desc:"......",
            icon:"......"
        }
    }
 
 async   getWeather(){
      
    mycity = await  AsyncStorage.getItem("mericity");
    

if(!mycity){
    mycity = this.props.navigation.getParam('city','raipur');
}  
      
  

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${mycity}&unit=metric&APPID=817ae075b7454a8ae78808bd1c52aad1`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                info:{
                    name:data.name,
                    temp:data.main.temp,
                    desc:data.weather[0].description,
                    humidity:data.main.humidity, 
                    icon:data.weather[0].icon
                }      
            })
        }).catch(err=>{
            Alert.alert("Error"+err.message+"Please connect to internet",[{text:"ok"}])
        }

        )
    }

    componentDidMount(){
        this.getWeather()
    }
     
 render(){   
     
    if(this.props.navigation.getParam('city')){
        this.getWeather()
    }
 
// console.log(this.state.info);   
    
  return ( 
                <View style={styles.container}>
                <Myheader title='Current whether' />  
                <Card style={{margin:20}}>
                    <LinearGradient 
                    colors={['#021B79','#0575E6']}
                    >
                <View style={{padding:20,alignItems:'center'}}> 
                        <Title style={styles.text}>  { this.state.info.name } </Title>
                        <Image
                         style={{width:120,height:120}} 
                        source={{uri:'http://openweathermap.org/img/w/'+this.state.info.icon+".png"}}
                        />
                        <Title style={styles.text}>Temp : { this.state.info.temp } </Title>
                        <Title style={styles.text}>Description : { this.state.info.desc } </Title>                   
                        <Title style={styles.text}>Humidity : { this.state.info.humidity } </Title>
                        
                      
                </View>
                </LinearGradient>
                </Card>
                {/* <Text>Home </Text> */}
 
                </View> 
     
  );
  }
    
}  

const styles = StyleSheet.create({  
  container: {
    flex: 1,

    backgroundColor: 'white',

  },
  text : {textAlign:'center',
marginBottom:10,
color:'white',
fontSize:25
}
});