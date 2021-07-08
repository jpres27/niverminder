//
//  Onboarding1
//  Onboarding-screens-vreedi 25-Jun-2021-125436
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View, Button, TouchableOpacity } from "react-native"


export default class Birthdays extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return <View
			style={styles.birthdaysView}
			onTouchStart={() => this.props.navigation.navigate('ScheduleReminders')}//Names
		>
			<Image
				source={require("./../../assets/images/onboarding-1-background-mask.png")}
				style={styles.birthdaysBackgroundMaskImage} />
			<View style={styles.overlay}>
				<Text
					style={styles.flavorText}>Import Contacts</Text>
				<Text
					style={styles.simpleText}>Choose from your list of contacts the people for whom you would like to add birthdays and receive reminders.</Text>
				<TouchableOpacity
					onPress={() => this.props.navigation.navigate('SearchContacts')}
					style={styles.buttonStyle}>
					<Text>Select Contacts</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress= {()=>this.props.navigation.navigate('AddBirthday')}
					style={styles.buttonStyle}>
					<Text>Add Birthdays</Text>
				</TouchableOpacity>
			</View>
		</View>
	}
}

const styles = StyleSheet.create({
	birthdaysView: {
		flex: 1,
	},
	birthdaysBackgroundMaskImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 640,
		zIndex: -1,
	},
	flavorText: {
		color: "rgb(41, 41, 41)",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		alignSelf: "flex-end",
		marginTop: 5,
		marginRight: 140,
	},
	simpleText: {
		color: "rgb(41, 41, 41)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 24,
		alignSelf: "flex-end",
		marginTop: 6,
		marginBottom: 20,
		marginRight: 15,
		marginLeft: 15,
		padding: 5,
	},
	buttonStyle: {
		backgroundColor: "rgb(87, 107, 245)",
		color: "white",
		marginBottom: 50,
		alignItems: "center",
		minHeight: 50,
		justifyContent: "center",
		marginLeft: 22,
		marginRight: 22,
		marginBottom: 25,
		borderRadius: 5,
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
	}
})
