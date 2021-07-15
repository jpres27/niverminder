//
//  App.js
//  App file for Niverminder, contains navigation and implementation of some push notification functionality
//
//  Created by John Presley and Cesar Montalverne.

import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import Splash from './screens/Splash/Splash';
import About from './screens/About/About';
import Birthdays from './screens/Birthdays/Birthdays';
import ScheduleReminders from './screens/ScheduleReminders/ScheduleReminders';
import SearchContacts from './screens/SearchContacts/SearchContacts';
import AddBirthday from './screens/AddBirthday/AddBirthday';
import Main from './screens/Main/Main';
import { createStore } from 'redux';
import {Provider} from 'react-redux'




Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const Stack = createStackNavigator();
const types = {
  SELECT:"SELECT"
}
const reducer = (state, action) => {
  if (action.type === types.SELECT) {
    //console.log('reducer')
    return { contacts : action.contacts };
  }
  return state;
};
const initialState = {contacts:''}
const store = createStore(reducer,initialState)

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log("Daniel tapped notificatoin");
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <Provider store ={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Birthdays" component={Birthdays} />
        <Stack.Screen name="ScheduleReminders" component={ScheduleReminders} />
        <Stack.Screen name="SearchContacts" component={SearchContacts} />
        <Stack.Screen name="AddBirthday" component={AddBirthday} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

async function registerForPushNotificationsAsync() {
	let token;
	if (Constants.isDevice) {
	  const { status: existingStatus } = await Notifications.getPermissionsAsync();
	  let finalStatus = existingStatus;
	  if (existingStatus !== 'granted') {
		const { status } = await Notifications.requestPermissionsAsync();
		finalStatus = status;
	  }
	  if (finalStatus !== 'granted') {
		alert('Failed to get push token for push notification!');
		return;
	  }
	  token = (await Notifications.getExpoPushTokenAsync()).data;
	  console.log(token);
	} else {
	  alert('Must use physical device for Push Notifications');
	}
  
	if (Platform.OS === 'android') {
	  Notifications.setNotificationChannelAsync('default', {
		name: 'default',
		importance: Notifications.AndroidImportance.MAX,
		vibrationPattern: [0, 250, 250, 250],
		lightColor: '#FF231F7C',
	  });
	}
  
	return token;
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
