//
//  StorageInterface.js
//  Wrapper class for expo.SecureStore
//
//  Created by John Presley

import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const KEYARRAYID = 'KEYARRAYID';

export default class StorageInterface {

  static async save(key, value) {
    console.log(value + " is saved")
    await SecureStore.setItemAsync(key, JSON.stringify(value));
    await this.storeNewKey(key)
  }

  static async getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (!result) {
      alert('No values stored under that key.');
    }
    return JSON.parse(result)
  }

  static async getAll() {
    let allKeys = await this.getValueFor(KEYARRAYID)
    console.log("All keys: " + allKeys)
    //let allVals = allKeys.map(key => this.getValueFor(key));
    //return allVals;
    return Promise.all(allKeys.map(key => this.getValueFor(key)));
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
    let result = await SecureStore.getItemAsync(KEYARRAYID);
    //check to see if key keyArray is available. (Get keyArray) from secure
    if (Array.isArray(result) || result != 2) {
      await SecureStore.setItemAsync(KEYARRAYID, JSON.stringify(result.push(key)))
    } else {
      SecureStore.setItemAsync(KEYARRAYID, JSON.stringify([key]))
    }



  }
}