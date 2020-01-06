import React from 'react';
import { StyleSheet, Text, View ,ScrollView ,AsyncStorage} from 'react-native';
import { Appbar,TextInput,Button,Card,List} from 'react-native-paper';
// import { Item } from 'react-native-paper/lib/typescript/src/components/List/List';
import Myheader from './Header';

export default class SearchScreen extends React.Component {
    state = { 
        text: '',
        cities:[]
      }; 


 async     buttonclick(){
    await    AsyncStorage.setItem("mericity",this.state.text)
          this.props.navigation.navigate('Current City',{city:this.state.text})
         
      }
      
      async listclick(name){  
          this.setState({
              text : name
          })
     await     AsyncStorage.setItem("mericity",this.state.text)
          this.props.navigation.navigate('Current City',{city:this.state.text})

      }


 fetchCities(text){
this.setState({  text })
//console.log(text_value);
fetch(`http://battuta.medunes.net/api/country/search/?key=41a009a4e45193f8971d39c6a7c4908b&country=${text}`)
.then(data=>data.json())
.then(city=>{
    // console.log(city.slice(2, 4));
    this.setState({
        cities :  city.slice(0, 30)
    })
})

 

 }

 render() { 
 
    renderCity=<Card> 
        <List.Item 
        title = "no cities"  
        />
    </Card>
    

    if((this.state.cities.length > 0)){
        renderCity=this.state.cities.map(
            city=>{
                return(
      
                    <Card key= {city.code}  onPress={()=>this.listclick(city.name)} >
                    <List.Item 
                     title = {city.name}
                    />
                </Card>
                ) 
            }
        )
    }
  
  return ( 
     <View style={styles.container}>
         <Myheader title='Select city' /> 

         <TextInput
        label='Enter City name'
        value={this.state.text}
        onChangeText={text => this.fetchCities(text)}
           />
  <Button mode="contained" style={{margin:20}} onPress={() => this.buttonclick()}>
Save changes
  </Button>
  <ScrollView>{renderCity}</ScrollView>
    </View> 
      
  );
  }

}

const styles = StyleSheet.create({  
  container: {
    flex: 1,

    backgroundColor: 'white',

  },
});