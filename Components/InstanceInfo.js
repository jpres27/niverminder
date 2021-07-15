import { SortTypes } from 'expo-contacts';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

{/*
const InstanceInfo = ({ message }) => {
    return (
      <Text>{message}</Text>      
    );
  };
  
  export default InstanceInfo;
*/}

const types = {
    SELECT:"SELECT"
  }
class InstanceInfo extends Component {
  
  render() {
    return (
      <View>
        <TouchableOpacity 
        onPress = {()=>{
          this.props.SELECT(this.props.item);
          //console.log(this.props.item.firstName);
          this.props.navigation.navigate('AddBirthday');
        }}>
        {/*<Text style={{ fontSize: 20 }}>{this.props.name}</Text>*/}
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>
            {this.props.item.firstName + ' '}
            {this.props.item.lastName}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    SELECT: (contacts) =>{
     dispatch({ type: types.SELECT, contacts: contacts })
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InstanceInfo);
