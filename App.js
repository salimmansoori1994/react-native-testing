import React from 'react';
import { StyleSheet,Text,View,Button,TextInput,Alert,ScrollView,Image} from 'react-native';
import MyHeader from './complicated_ui/MyHeader';

 
    

class App extends React.Component {


  render(){ 

  return (
    <View style={styles.container}>  
<MyHeader />

<Text> salim mansoori</Text>
    </View> 
  );   
}
}

export default App;
 
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white',
  
  },
});
 