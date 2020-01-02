import React from 'react';
import { StyleSheet, Text, View , AsyncStorage, Button} from 'react-native';
import { render } from 'react-dom';


export default class App extends React.Component {
state={

  item:'loading'
}
 
async componentDidMount(){   
  this.setState({
    item : await AsyncStorage.getItem('mykey')
  })
}

  storeData = async () => {
    try {
      await AsyncStorage.setItem('mykey', 'I miss you');
      this.setState({
         item : await AsyncStorage.getItem('mykey')
      })
     
    } catch (error) {
      console.log(error)
    } 
    console.log(this.state)
  };

  deletata = async () => {
      try{
           AsyncStorage.removeItem('mykey', async ()=>{
          console.log("deleted data successfully")
          this.setState({
            item : await AsyncStorage.getItem('mykey')
          })
        })
      }catch(error){
        console.log(error)
      }
      console.log(this.state)
  };


  

  render() {
  return (
    <View style={styles.container}>
      <Text></Text>

      <Button
    title = 'store data'
    onPress={this.storeData}
        />
 <Text></Text>
        
      <Button
    title = 'Delete data'
    onPress={this.deletata}
        />

  <Text>{this.state.item}</Text>

    </View>


  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
