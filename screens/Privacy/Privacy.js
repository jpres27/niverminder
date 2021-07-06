//
//  OnboardingAlt2a
//  Onboarding-screens-vreedi 25-Jun-2021-125436
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View, Button, } from "react-native"
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Contacts from 'expo-contacts';


export default class Privacy extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return <View
			style={styles.onboardingAlt2aView}>
			<View
				pointerEvents="box-none"
				style={{
					position: "absolute",
					left: 0,
					right: 0,
					top: 0,
					bottom: 0,
					justifyContent: "center",
				}}>
				<Image
					source={require("./../../assets/images/onboarding-alt-2a-background-mask.png")}
					style={styles.onboardingAlt2aBackgroundMaskImage} />
			</View>
			<View
				pointerEvents="box-none"
				style={{
					position: "absolute",
					left: 14,
					right: 18,
					top: 385,
					bottom: 81,
					alignItems: "center",
				}}>
				<Text
					style={styles.loremIpsumIsSimplText}>NiverMinder uses  your contact list to check  birthday info and doesn’t save anything, but we would like to collect anonymous usage statistics.</Text>
				<View
					style={{
						flex: 1,
					}} />
				<Text
					style={styles.findBestPlaceText}>Privacy Policy</Text>
				<Button
					title="Press to schedule a notification"
					onPress={async () => {
						await schedulePushNotification();
					}}
				/>
			</View>
			<Text
				style={styles.findHotelFavoriteText}>Privacy Policy</Text>
		</View>
	}
}

async function getBirthdayFromContacts(){
	//Get Name as well. 
	console.log("Here");
   const { status } = await Contacts.requestPermissionsAsync();
		if (status === 'granted') {
		  const { data } = await Contacts.getContactsAsync({
			fields: [Contacts.Fields.Birthday],
		  });
  
		  return data
		}
  }
  
  async function schedulePushNotification() {
	  let birthdays = await getBirthdayFromContacts(); //[new Date(), new Date(), new Date()]
	  birthdays.map(async(data)=>{
		if(data.birthday){
		console.log(data.name+" "+data.birthday)
		//Notifications of IOS 
		  await Notifications.scheduleNotificationAsync({
		  content: {
			title: "Happy Birthday 📬"+data.name,
			body: 'Remember to call',
			data: { data: 'goes here' },
		  },
		  trigger: {seconds : 2},
		});
		}
	  });
	  
  }


const styles = StyleSheet.create({
	onboardingAlt2aView: {
		backgroundColor: "white",
		flex: 1,
	},
	onboardingAlt2aBackgroundMaskImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 640,
	},
	loremIpsumIsSimplText: {
		color: "rgb(41, 41, 41)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 24,
		backgroundColor: "transparent",
		alignSelf: "stretch",
	},
	findBestPlaceText: {
		color: "white",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginBottom: 11,
	},
	loremIpsumIsSimplTwoText: {
		backgroundColor: "transparent",
		color: "rgb(41, 41, 41)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 24,
	},
	findHotelFavoriteText: {
		color: "rgb(41, 41, 41)",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 117,
		top: 365,
	},
})