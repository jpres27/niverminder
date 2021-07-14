import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
  Platform
} from 'react-native';
import StorageInterface from '../../StorageInterface';
import SearchContacts from '../SearchContacts/SearchContacts';
//import InstanceInfo from '../../Components/InstanceInfo';
import DateTimePicker from '@react-native-community/datetimepicker';//npm install @react-native-community/datetimepicker --save

export default class AddBirthday extends React.Component {
  constructor(props) {
    super(props)
    this.info = props.route.params;
    this.firstName = this.info ? this.info.firstName.replace(/["]+/g, '') : '';
    this.lastName = this.info ? (this.info.lastName ? this.info.lastName.replace(/["]+/g, '') : '') : '';
    this.phoneNumber = this.info ? (this.info.phoneNumber ? this.info.phoneNumber.replace(/["]+/g, '') : '') : '';
    this.id = this.info ? (this.info.id) : ""
    this.state = { name: this.firstName + " " + this.lastName, birthday: new Date(), number: this.phoneNumber, mode: 'date', show: false }
  }


  onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    this.setState((state) => ({ ...state, show: Platform.OS === 'ios' }))
    this.setState((state) => ({ ...state, birthday: currentDate }))
  };

  showMode = (currentMode) => {
    this.setState((state) => ({ ...state, show: true }))
    this.setState((state) => ({ ...state, mode: currentMode }))
  };

  showDatepicker = () => {
    this.showMode('date');
  };


  render() {
    return (
      <View
        style={{ backgroundColor: 'white', padding: 30 }}
      >
        <Text style={{
          textAlign: 'center',
          fontSize: 30,
          marginBottom: 70
        }}>Personal Information</Text>

        <Text style={styles.textStyle}>Name</Text>
        <TextInput
          style={styles.fieldStyle}
          placeholder="enter name"
          placeholderTextColor="grey"
          onChangeText={(text) => {
            this.setState((state) => { return { ...state, name: text } }
            )
          }}
        >{this.firstName}{this.lastName ? (' ' + this.lastName) : ('')}
        </TextInput>
        <Text style={styles.textStyle}>Phone Number</Text>
        <TextInput
          style={styles.fieldStyle}
          placeholder="enter phone number"
          placeholderTextColor="grey"
          onChangeText={(text) => {
            this.setState((state) => { return { ...state, number: text } })
          }}
        >{this.phoneNumber}
        </TextInput>
        {/* <Text style={styles.textStyle}>Birthday</Text>
        <TextInput
          style={styles.fieldStyle}
          placeholder="enter birthday"
          placeholderTextColor="grey"
          onChangeText={(text) => {
            this.setState((state) => { return { ...state, birthday: text } }
            )
          }}
        >
        </TextInput> */}



        <Text style={styles.textStyle}>Birthday</Text>
        <DateTimePicker
          style={styles.fieldStyle}

          testID="dateTimePicker"
          value={this.state.birthday}
          mode={this.state.mode}
          is24Hour={true}
          display="default"
          onChange={this.onChange}
        />



        <Button title="select from contacts" onPress={() => this.props.navigation.navigate('SearchContacts')} color='rgb(87, 107, 245)' />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            StorageInterface.save(JSON.stringify(Math.random()), this.state)
            this.props.navigation.navigate("SearchContacts")
          }
          }
        >
          <Text>Remind Me</Text>
        </TouchableOpacity>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  fieldStyle: {
    borderWidth: 3,
    borderColor: 'rgb(87, 107, 245)',
    marginBottom: 30,
    marginTop: 5,
    fontSize: 20,
    borderRadius: 5,
    height: 50,
  },
  textStyle: {
    fontSize: 20
  },
  buttonStyle: {
    backgroundColor: "rgb(87, 107, 245)",
    color: "white",
    marginBottom: 50,
    alignItems: "center",
    minHeight: 50,
    justifyContent: "center",
    marginLeft: 22,
    marginRight: 22,
    marginBottom: 70,
    borderRadius: 5,
    marginTop: 70
  },
})
