import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import Splash from './screens/Splash/Splash';
import About from './screens/About/About';
import Privacy from './screens/Privacy/Privacy';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const Stack = createStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Privacy" component={Privacy} />
      </Stack.Navigator>
    </NavigationContainer>
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
