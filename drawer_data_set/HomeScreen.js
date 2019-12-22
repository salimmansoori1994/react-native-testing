import React from 'react';
import { View, Text , StyleSheet ,Button ,TouchableHighlight} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
 
export default class MyHomeScreen extends React.Component {
    
    static navigationOptions = {
        drawerLabel: 'Home Page', 
        drawerIcon: ({ tintColor }) => (
            <Ionicons name="md-home" style={{marginLeft:2}} size={32} color="white"   onPress={() =>navigation.toggleDrawer()} />
            
        ),
      };

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
   