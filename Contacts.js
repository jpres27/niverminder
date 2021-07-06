import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default class StorageInterface {

  KEYARRAYID = 'KEYARRAYID'

  static async save(key, value) {
    await SecureStore.setItemAsync(key, value);
    this.storeNewKey(key)
  }

  static async getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (!result) {
      alert('No values stored under that key.');
    }
    return result 
  }

  static async getAll() {
    let allKeys = this.getValueFor(KEYARRAYID)
    let allVals = allKeys.map(key => getValueFor(key));
    return allVals;
  }

  static async deleteItem(key) {
    await SecureStore.deleteItemAsync(key);
    if (result) {
      alert('Successfully deleted.');
    } else {
      alert('Unable to delete.');
    }
  }


  static async storeNewKey(key) {
    //check to see if key keyArray is available. (Get keyArray) from secure
    let result = await SecureStore.getItemAsync(KEYARRAYID)
    //check to see if key keyArray is available. (Get keyArray) from secure
    if (result != null) {
      //If None
      //Add key (to array)
      //Store new array in storage

      SecureStore.save(KEYARRAYID, result.push(key))
    } else {
      SecureStore.save(KEYARRAYID, [key])
    }
  }




}