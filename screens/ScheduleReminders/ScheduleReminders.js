//
//  Privacy.js
//  Screen where the user will allow permissions to set notifications for all selected birthdays
//
//  Created by John Presley and Cesar Montalverne.


import React from "react"
import { Image, StyleSheet, Text, View, Button, TouchableOpacity, } from "react-native"
import * as Notifications from 'expo-notifications';
import StorageInterface from "../../StorageInterface";


export default class ScheduleReminders extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return <View>
			<Image style={styles.onboardingAlt2aBackgroundMaskImage}
				source={require("./../../assets/images/onboarding-alt-2a-background-mask.png")}
				style={styles.onboardingAlt2aBackgroundMaskImage} />
			<View style={styles.overlay}>
			<Text
				style={styles.loremIpsumIsSimplText}>Now Niverminder can schedule notifications for all of the birthdays you have selected</Text>
			<TouchableOpacity 
				style={styles.buttonStyle}
				onPress={async () => {
				await schedulePushNotification();
			}}>
				<Text>Schedule Reminders</Text>
			</TouchableOpacity>
			</View>
		</View>
	}
}

//Returns an array of Contact objects from storage
async function getAllBirthdayFromStorage() {
	return await StorageInterface.getAll()
	 
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
			const datePattern = /(\d{1,2})\/(\d{1,2})\/(\d{4})/;
			const extractDate = datePattern.exec(data.birthday);
			curYear = new Date().getFullYear()
			newDate = new Date(curYear, extractDate[1], extractDate[2])
			currentDate = new Date()
			if(newDate.getTime() < currentDate.getTime()) {
				curYear++
				newDate = new Date(curYear, extractDate[1], extractDate[2])
			}
			trigger = new Date(newDate + 60 * 60 * 1000);
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
		flex: 1,
	},
	onboardingAlt2aBackgroundMaskImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 640,
		zIndex: -1,
	},
	loremIpsumIsSimplText: {
		color: "rgb(41, 41, 41)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 24,
		alignSelf: "stretch",
		minHeight: 60,
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 30,
	},
	overlay: {
		position: "absolute",
		width: "100%",
		height: "100%",
		flex: 1,
		left: 0,
		top: 0,
		flexDirection: "column",
		justifyContent: "flex-end",
	},
	buttonStyle: {
		backgroundColor: "rgb(87, 107, 245)",
		marginBottom: 50,
		alignItems: "center",
		minHeight: 50,
		justifyContent: "center",
		marginLeft: 22,
		marginRight: 22,
		marginBottom: 50,
		borderRadius: 5,
	}
})
