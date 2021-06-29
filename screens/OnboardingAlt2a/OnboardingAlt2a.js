//
//  OnboardingAlt2a
//  Onboarding-screens-vreedi 25-Jun-2021-125436
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class OnboardingAlt2a extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

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
						style={styles.onboardingAlt2aBackgroundMaskImage}/>
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
						}}/>
					<Text
						style={styles.findBestPlaceText}>Privacy Policy</Text>
					<Text
						style={styles.loremIpsumIsSimplTwoText}>I agree</Text>
				</View>
				<Text
					style={styles.findHotelFavoriteText}>Privacy Policy</Text>
			</View>
	}
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
		fontFamily: ".AppleSystemUIFont",
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
		fontFamily: ".AppleSystemUIFont",
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
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 24,
	},
	findHotelFavoriteText: {
		color: "rgb(41, 41, 41)",
		fontFamily: ".AppleSystemUIFont",
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
