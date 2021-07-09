//
//  About.js
//  Info dump about the app for the user
//
//  Created by Cesar Montalverne and John Presley
// 
//

import React from "react"
import { Image, StyleSheet, Text, View, TouchableOpacity, Linking } from "react-native"
import * as WebBrowser from 'expo-web-browser';


export default class About extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return <View
			style={styles.aboutView}
			onTouchStart={() => this.props.navigation.navigate('Birthdays')}

		>

			<Image
				source={require("./../../assets/images/onboarding-alt-3a-background-mask.png")}
				style={styles.aboutBackgroundMaskImage} />

			<View
				style={styles.overlay}>
				<Text
					style={styles.flavorText}>What Do We Do?</Text>
				<Text
					style={styles.simpleText}>NiverMinder allows you to import people from your contacts, set birthdays for them, and schedule reminders so that you will never forget to wish your friends and family happy birthdays again.</Text>
			</View>



			<TouchableOpacity
				onPress={() => WebBrowser.openBrowserAsync('https://jpres27.github.io/')}
				style={styles.buttonStyle}

			>
				<Text>Privacy Policy</Text>
			</TouchableOpacity>

		</View>
	}
}

const styles = StyleSheet.create({
	aboutView: {
		backgroundColor: "white",
		flex: 1,
	},
	aboutBackgroundMaskImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
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
		backgroundColor: "transparent",
		alignSelf: "center",
		padding: 15,
	},
	simpleText: {
		color: "rgb(41, 41, 41)",
		width: "100%",
		minHeight: 70,
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 24,
		marginTop: 30,
		marginBottom: 50,
		flexWrap: "wrap",
		padding: 10,
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
		color: "white",
		marginBottom: 50,
		alignItems: "center",
		minHeight: 30,
		justifyContent: "center",
		marginLeft: 22,
		marginRight: 22,
		borderRadius: 5,
	},
})
