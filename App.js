import React from 'react';
import { StyleSheet, Text, View , AsyncStorage} from 'react-native';
import { render } from 'react-dom';
import { Appbar,TextInput,Button} from 'react-native-paper';
// import { Item } from 'react-native-paper/lib/typescript/src/components/List/List';


export default class App extends React.Component {
arr=[]  
id = 0 
    state = {
        text: '',
        item :    
        [
            {id:1,data:"loading"}
        ]
      };
  
      storedata = async () => {
         this.arr.push({id:this.id,data:this.state.text})          
         this.id++;
         await AsyncStorage.setItem("mylist",JSON.stringify(this.arr))
         this.setState(
         {
           Item:JSON.parse(await AsyncStorage.getItem("mylist"))
         }
         )
           value = JSON.parse(await AsyncStorage.getItem("mylist"))
          console.log(value)
        // console.log(typeof value)

      }

  render() {
if(this.state.item.length > 1){
  renderList = this.state.item.map(item=>{
    return <Text>{item.data}</Text>
  })
}else{
  renderList = <Text>no item</Text>
}
    
  return ( 
     <View style={styles.container}>
            <Appbar.Header>
            <Appbar.BackAction
            onPress={this._goBack}
            />
            <Appbar.Content    
            title="TO DO LIST "
            /> 
            </Appbar.Header>

            <TextInput 
                {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        maxLength = {40}
        label='Email' 
        mode   ='outlined'
        TextInput = 'characters'        
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
      />

                <Button icon="camera" mode="contained" onPress={this.storedata}>
                Add Todo
                </Button>

              <Text> {renderList} </Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
