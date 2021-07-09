import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import StorageInterface from '../../StorageInterface';
import SearchContacts from '../SearchContacts/SearchContacts';
//import InstanceInfo from '../../Components/InstanceInfo';

export default class AddBirthday extends React.Component {
  constructor(props) {
    super()
    this.info = props.route.params;
    this.firstName = this.info ? this.info.firstName.replace(/["]+/g, '') : '';
    this.lastName = this.info ? (this.info.lastName ? this.info.lastName.replace(/["]+/g, '') : '') : '';
    this.phoneNumber = this.info ? (this.info.phoneNumber ? this.info.phoneNumber.replace(/["]+/g, '') : '') : '';
    this.id = this.info ? (this.info.id) : ""
    this.state = {name : this.firstName + " " + this.lastName, birthday : "", number : this.phoneNumber}
  }
  render() {
    return (
      <View
        style={{ backgroundColor: 'white', padding: 30 }}
      >
        <Text style={styles.textStyle}>Name</Text>
        <TextInput
          style={styles.fieldStyle}
          placeholder="enter name"
          placeholderTextColor="grey"
          onChangeText={(text) => { 
            this.setState((state) => {return {...state, name : text}} 
            )}}
        >{this.firstName} {this.lastName}
        </TextInput>
        <Text style={styles.textStyle}>Birthday</Text>
        <TextInput
          style={styles.fieldStyle}
          placeholder="enter birthday"
          placeholderTextColor="grey"
          onChangeText={(text) => { 
            this.setState((state) => {return {...state, birthday : text}} 
            )}}
        >
        </TextInput>
        <Text style={styles.textStyle}>Phone Number</Text>
        <TextInput
          style={styles.fieldStyle}
          placeholder="enter phone number"
          placeholderTextColor="grey"
          onChangeText={(text) => { 
            this.setState((state) => {return {...state, number : text}}) 
          }}
        >{this.phoneNumber}
        </TextInput>
        <TouchableOpacity
          style={{ marginLeft: 135 }}
          onPress=  {() => {
             StorageInterface.save(JSON.stringify(Math.random()), this.state) 
            this.props.navigation.navigate("SearchContacts")
            }
          }
        >
          <Text>submit</Text>
        </TouchableOpacity>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  fieldStyle: {
    borderWidth: 2,
    borderColor: '#87ceeb',
    marginBottom: 25,
    marginTop: 5,
    fontSize: 20
  },
  textStyle: {
    fontSize: 20,
  }
})