import React from 'react';
import { StyleSheet,Text,View,Button,TextInput,Alert,ScrollView,Image} from 'react-native';


// const Mydata = (props) =>{
//     return (
//       <View>
//   <Text>{ props.name } for {props.status}</Text>
//       </View>
//     )
// }
    

class App extends React.Component {
// state = {
//   text:"Loding data ..."
//   //name : "salim"
// }
// check(name_value){  
//   this.setState({
//     name :name_value
//   })      
// }  

componentDidMount(){
  fetch("http://cyberelite.work/projects/A_j/Api/banner")
 // method: 'POST'
  .then(data=>data.json())
  .then(data2=>{
    console.log(data2)
  })
}

  render(){ 
    console.log("From render")
   // console.log("updates data" ,this.state)
    // const array_list= ['salim','nitin','rohit','abhinay  bhai '];
    // const array_data= array_list.map(data=>{
    // return <Text>{data}</Text>
    // })
  return (
    <View style={styles.container}>  
    {/* { <Mydata name='car' status='active' /> }
    { <Text>{ this.state.name }</Text>
    <Button title='Press me' onPress={this.check.bind(this,"hii salim mansoori ")} /> }
    { <Text>   { this.state.text }</Text>
    <TextInput style={{ fontSize:30,height:40 }}
    placeholder="type here"  onChangeText={(text)=>this.setState({text:text})}
    />
    <Button title='Click me !!!' onPress={()=>(Alert.alert("sahi me dbaa dala bhai."))} /> */}
    {/* } */}

    {/* <ScrollView>
      <Image source={{ uri : "https://images.pexels.com/photos/3285405/pexels-photo-3285405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" ,height:300 ,width:500 }} />
      <Image source={{ uri : "https://images.pexels.com/photos/35551/women-model-beauty-portrait.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" ,height:500 ,width:500 }} />
      <Image source={{ uri : "https://images.pexels.com/photos/35551/women-model-beauty-portrait.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" ,height:500 ,width:500 }} />
      </ScrollView> */}



    </View> 
  );   
}
}

export default App;
 
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 