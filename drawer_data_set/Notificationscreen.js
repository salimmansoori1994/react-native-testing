
import React from 'react';
import { View, Text , StyleSheet ,Button ,TouchableHighlight} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default  class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Navigation Page ',
        drawerIcon: ({ tintColor }) => (
            <Ionicons name="md-notifications" style={{marginLeft:2}} size={32} color="white"   onPress={() =>navigation.toggleDrawer()} />
        ),
      };
  render() {
    return (
        <View style={styles.container}>
      <Button
        onPress={() =>this.props.navigation.openDrawer()}
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
   