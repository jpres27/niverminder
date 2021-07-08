import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
//import InstanceInfo from '../../Components/InstanceInfo';


export default class AddBirthday extends React.Component {
  constructor(){
    super()
  }
  render(){
    const info = this.props.route.params;
    const firstName = info?info.firstName:'';
    const lastName = info?(info.lastName?(' '+info.lastName):''):'';
    const phoneNumber = info?(info.phoneNumber?info.phoneNumber:''):'';
    //const itemId = params ? params.AddBirthday : null;
    //const otherParam = params ? params.otherParam : null;

    return(
      <View
      style = {{backgroundColor:'white', padding:30}}
      >
        <Text style={styles.textStyle}>Name</Text>
        <TextInput
        style = {styles.fieldStyle}
        placeholder = "enter name"
        placeholderTextColor = "grey"
        onChangeText = {(text)=>{this.setState({name:text})}}
        >{firstName?firstName.replace(/["]+/g, ''):''}{lastName?lastName.replace(/["]+/g, ''):''}
        </TextInput>
        <Text style={styles.textStyle}>Birthday</Text>
        <TextInput
        style = {styles.fieldStyle}
        placeholder = "enter birthday"
        placeholderTextColor = "grey"
        onChangeText = {(text)=>{this.setState({birthday:text})}}
        >
        </TextInput>
        <Text style={styles.textStyle}>Phone Number</Text>
        <TextInput
        style = {styles.fieldStyle}
        placeholder = "enter phone number"
        placeholderTextColor = "grey"
        onChangeText = {(text)=>{this.setState({number:text})}}
        >{phoneNumber.replace(/["]+/g, '')}
        </TextInput>
        <TouchableOpacity
        style = {{marginLeft:135}}
          //onPress = {()=>}
          >
            <Text>submit</Text>
    </TouchableOpacity>
      </View>
      
    )
  }
}
const styles = StyleSheet.create({
  fieldStyle: {
    borderWidth:2,
    borderColor:'#87ceeb',
    marginBottom:25,
    marginTop:5,
    fontSize:20
  },
  textStyle: {
    fontSize:20,
  }
})