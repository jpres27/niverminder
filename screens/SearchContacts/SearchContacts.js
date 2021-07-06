//
//  SearchContacts.js
// 
//
//  Created by Cesar Montalverne.

import React from 'react';
import {StyleSheet,Text,View,TextInput,FlatList, TouchableOpacity} from 'react-native';
import * as Contacts from 'expo-contacts';

export default class SearchContacts extends React.Component {
    constructor(){
        super()
        this.state = {
            contacts:[]
        }
    }
    loadContacts = async () => {
        const { status } = await Contacts.requestPermissionsAsync();
		if (status !== 'granted') {
		  return;
		}
		const { data } = await Contacts.getContactsAsync({
		  fields: [Contacts.Fields.PhoneNumbers]
		});
		this.setState({contacts: data, inMemoryContacts: data});
    }
    componentDidMount() {
		this.loadContacts();
	}
    renderItem = ({item }) => (
        <View style={{padding: 10,borderBottomWidth:0.2 }}>
        {/*
        <Button
            style = {styles.names}
            onPress= {()=>this.props.navigation.navigate('SearchContacts')}
            title={item.firstName + ' '+item.lastName}
            //accessibilityLabel="Learn more"
        />
        */}
        <TouchableOpacity 
        style = {styles.namesStyles}
        onPress = {()=>this.props.navigation.navigate('Birthday')}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>
            {item.firstName + ' '}
            {item.lastName}</Text>
        </TouchableOpacity>
      </View>
    )
    findContacts = value => {
		const filteredContacts = this.state.inMemoryContacts.filter(contact => {
		  let contactLowercase = (contact.firstName +' ' +contact.lastName).toLowerCase();
		  let searchContactLowercase = value.toLowerCase();
		  return contactLowercase.indexOf(searchContactLowercase) > -1;
		});
		this.setState({ contacts: filteredContacts });
	  };
    render() {
		return (
            <View style={{flex:1}}>
                <TextInput
                    style = {styles.textInputStyle}
                    placeholder = "Search Name"
                    placeholderTextColor = "black"
                    onChangeText={value => this.findContacts(value)}
                    />
                <View style={{flex:1, backgroundColor:'light-grey'}}>
                    <FlatList
                        data = {this.state.contacts}
                        renderItem = {this.renderItem}
                        ListEmptyComponent={() => (
                            <View style={{flex: 1, padding: 15}}>
                              <Text style={{ color: 'black' }}>No Contacts Found</Text>
                            </View>
                          )}
                    ></FlatList>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textInputStyle: {
        backgroundColor:'white',
        height:60,
        fontSize:30,
        padding:10,
        color:'black',
        borderBottomColor:'black',
        borderBottomWidth:1.5
    },
    namesStyles: {}
})