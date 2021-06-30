import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash/Splash';
import About from './screens/About/About';
import Birthdays from './screens/Birthdays/Birthdays\'';
import Names from './screens/Names/Names';
import Enjoy from './screens/Enjoy/Enjoy';
import Privacy from './screens/Privacy/Privacy';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Birthdays" component={Birthdays} />
        <Stack.Screen name="Names" component={Names} />
        <Stack.Screen name="Enjoy" component={Enjoy} />
        <Stack.Screen name="Privacy" component={Privacy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
