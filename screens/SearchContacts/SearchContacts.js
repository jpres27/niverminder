//
//  SearchContacts.js
// 
//
//  Created by Cesar Montalverne.
import React from 'react';
import {StyleSheet,Text,View,TextInput,FlatList, TouchableOpacity, TouchableWithoutFeedbackBase} from 'react-native';
import * as Contacts from 'expo-contacts';
import StorageInterface from '../../StorageInterface';
/*import AddBirthday from '../AddBirthday/AddBirthday';
import { createStore } from 'redux';
import InstanceInfo from '../../Components/InstanceInfo';
import {Provider} from 'react-redux'
const types = {
  SELECT:"SELECT"
}
const reducer = (state, action) => {
  if (action.type === types.SELECT) {
    return { name : 'other' };
  }
  return state;
};
// Define the initial state of our store
const initialState = { name: '' };
*/
//const store = createStore(reducer,initialState)

export default class SearchContacts extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            contacts:[],
            searchAlign:'center'
        }
    }
    loadContacts = async () => {
        const { status } = await Contacts.requestPermissionsAsync();
		if (status !== 'granted') {
		  return;
		}
		const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Birthday]
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
        onPress = {()=>this.props.navigation.navigate('AddBirthday',
        {firstName:JSON.stringify(item.firstName), 
        lastName:JSON.stringify(item.lastName),
        id:JSON.stringify(item.id),
        phoneNumber:JSON.stringify(item.phoneNumbers && item.phoneNumbers[0] && item.phoneNumbers[0].number)
        })}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>
            {item.firstName + ' '}
            {item.lastName}</Text>
            {/*<Text>{typeof(item.Birthday)}</Text>*/}
        </TouchableOpacity>
        {/*<Provider store = {store}>
          <InstanceInfo message={item.lastName?(item.firstName+' '+ item.lastName):item.firstName}/>
      </Provider>*/}
      </View>
    )
    findContacts = value => {
		const filteredContacts = this.state.inMemoryContacts.filter(contact => {
		  let contactLowercaseFirst = contact.firstName?contact.firstName.toLowerCase():'';
      let contactLowercaseLast = contact.lastName?contact.lastName.toLowerCase():'';
		  let searchContactLowercase = value.toLowerCase();
		  return contactLowercaseFirst.indexOf(searchContactLowercase)==0||contactLowercaseLast.indexOf(searchContactLowercase)==0;
		});
		this.setState({ contacts: filteredContacts, searchAlign:'left' });
	  };
    searchAlignLeft = ()=>{
      this.setState({searchAlign:'left' })
    }
    render() {
		return (
      <View style={{flex:1}}>
          {/*<AddBirthday message = "hello"></AddBirthday>*/}
          <View style={{padding:15, backgroundColor:"white"}}>
          <TextInput
              //inlineImageLeft = "../../node_modules\drawable/search.png"
              placeholder = "Search Name"
              placeholderTextColor = "black"
              onChangeText={value => this.findContacts(value)}
              onTouchStart = {()=>this.searchAlignLeft()}
              style = {{backgroundColor:'white',
                height:41,
                fontSize:16,
                padding:10,
                color:'black',
                borderColor:'black',
                borderWidth:1.5,
                borderRadius:80,
                textAlign:this.state.searchAlign
              }}
              />
            </View>
          <View style={{flex:1, backgroundColor:'light-grey',marginLeft:15}}>
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
        height:40,
        fontSize:20,
        padding:10,
        color:'black',
        borderColor:'black',
        borderWidth:1.5,
        borderRadius:128
      },
    namesStyles: {}
})