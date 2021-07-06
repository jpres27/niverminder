//
//  Privacy.js
//  Screen where the user will allow permissions to set notifications for all selected birthdays
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View, Button, } from "react-native"
import * as Notifications from 'expo-notifications';
import StorageInterface from "../../StorageInterface";


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

//Returns an array of Contact objects from storage
async function getAllBirthdayFromStorage() {
	const { data } = await StorageInterface.getAll()
	return data
}

//Takes all of the Contact objects in storage and sets up a birthday notification for each of them
async function schedulePushNotification() {
	//Get all contacts from storage
	let birthdays = await getAllBirthdayFromStorage(); //[new Date(), new Date(), new Date()]
	//Iterate across the contacts and for each set up a notification
	birthdays.map(async (data) => {
		if (data.birthday) {
			console.log(data.name + " " + data.birthday)
			//Sets the trigger for each notification to be the birthday, and then the top of the next hour
			trigger = new Date(data.birthday + 60 * 60 * 1000);
			trigger.setMinutes(0);
			trigger.setSeconds(0);
			await Notifications.scheduleNotificationAsync({
				content: {
					title: "Happy Birthday 📬" + data.name,
					body: 'Remember to call',
					data: { data: 'goes here' },
				},
				trigger,
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
