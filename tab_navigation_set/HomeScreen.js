import React from 'react';
import { View, Text , StyleSheet ,Button } from 'react-native';

 
export default class MyHomeScreen extends React.Component {


  render() {
    return (
        <View style={styles.container}>
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Home"
      />
      </View>
    );  
  }  
}


//export default App;
 
const styles = StyleSheet.create({
    container: {  
      flex: 1, 
      backgroundColor: '#00ff00',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
   