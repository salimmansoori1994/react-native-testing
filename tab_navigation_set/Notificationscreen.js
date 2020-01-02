
import React from 'react';
import { View, Text , StyleSheet ,Button ,TouchableHighlight} from 'react-native';

export default  class MyNotificationsScreen extends React.Component {

  render() {
    return (
        <View style={styles.container}>
      <Button
        onPress={() =>this.props.navigation.navigate('Home')}
        title="Notification"
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
   