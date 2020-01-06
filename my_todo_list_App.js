import React from 'react';
import { StyleSheet, Text, View , AsyncStorage} from 'react-native';
import { render } from 'react-dom';
import { Appbar,TextInput,Button,Card,List,ScrollView} from 'react-native-paper';
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
          item:JSON.parse(await AsyncStorage.getItem("mylist"))
         }
         )
           value = JSON.parse(await AsyncStorage.getItem("mylist"))
        //  console.log(value)
        // console.log(typeof value)

      }

   


      async    componentDidMount(){
        this.setState({
           item:JSON.parse(await AsyncStorage.getItem("mylist") || '')
          })
         this.arr=JSON.parse(await AsyncStorage.getItem("mylist") || '');
         this.id=this.arr[this.arr.length-1].id+1;
      }  


      delete_item(item_id){
        console.log(this.state.item[item_id])
        AsyncStorage.removeItem(this.state.item[item_id])
      //  AsyncStorage.removeItem('mykey') 
      } 

      deletata = async () => {
        try{
             AsyncStorage.removeItem('mylist', async ()=>{
            console.log("deleted data successfully")
            this.setState({
              item : await AsyncStorage.getItem('mylist')
            })
          })
        }catch(error){
          console.log(error)
        } 
        console.log(this.state)
    };
  
 
 
  

  render() { 
  
if(this.state){
  if(this.state.item){
  renderList = this.state.item.map(item=>{
    // console.log(item.data)  
    return ( 
         <Card key={item.id} style={{margin:10}} onPress={()=>this.delete_item(item.id)}>
  
    <List.Item  
title = {item.data}
right= { ()=> <List.Icon  icon="delete"    /> }
 />

    </Card> 
  )
  }) 
}else{
  renderList = <Text style={{margin:10}}>no items</Text>
}
  }else{
    renderList = <Text style={{margin:10}}>no items</Text>
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

                <Button icon="camera" mode="contained" onPress={this.storedata}  style={{margin:20}}>
                Add Todo
                </Button> 
                <Button icon="delete" mode="contained" onPress={this.deletata}  style={{margin:20}}>
              remove all
                </Button> 
                 
               
                 {renderList} 
            

    </View> 
    
  );
  }
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: 'green',

  },
});
