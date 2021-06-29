//
//  Onboarding2
//  Onboarding-screens-vreedi 25-Jun-2021-125436
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class Onboarding2 extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	render() {
	
		return <View
				style={styles.onboarding2View}>
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
						source={require("./../../assets/images/onboarding-2-background-mask.png")}
						style={styles.onboarding2BackgroundMaskImage}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 16,
						right: 16,
						top: 216,
						bottom: 125,
						alignItems: "flex-end",
					}}>
					<Text
						style={styles.johnGaltText}>John Galt</Text>
					<Text
						style={styles.findHotelFavoriteText}>Make Sure Their Names are Right</Text>
					<Text
						style={styles.loremIpsumIsSimplText}>NiverMinder uses your contact’s first name to send them personalized birthday messages</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.findBestPlaceText}>GO TO CONTACTS</Text>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	onboarding2View: {
		backgroundColor: "white",
		flex: 1,
	},
	onboarding2BackgroundMaskImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 640,
	},
	johnGaltText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 40,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginRight: 67,
	},
	findHotelFavoriteText: {
		backgroundColor: "transparent",
		color: "rgb(41, 41, 41)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginRight: 25,
		marginTop: 110,
	},
	loremIpsumIsSimplText: {
		backgroundColor: "transparent",
		color: "rgb(41, 41, 41)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 24,
		alignSelf: "stretch",
	},
	findBestPlaceText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		alignSelf: "center",
	},
})
