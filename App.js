import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends React.Component {



  render(){

    const array_list= ['salim','nitin','rohit','abhinay  bhai '];
    const array_data= array_list.map(data=>{
    return <Text>{data}</Text>
    })


  return (
    <View style={styles.container}>  
      { array_data }
    </View>
  );
}
}

export default App;
 
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#00ff00',
    //backgroundimage: "./assets/flash.png",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 