//
//  OnboardingAlt1a
//  Onboarding-screens-vreedi 25-Jun-2021-125436
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class OnboardingAlt1a extends React.Component {

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
				style={styles.onboardingAlt1aView}>
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
						source={require("./../../assets/images/onboarding-alt-1a-background-mask.png")}
						style={styles.onboardingAlt1aBackgroundMaskImage}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 41,
						right: 27,
						top: 114,
						bottom: 75,
						alignItems: "flex-end",
					}}>
					<Text
						style={styles.miderText}>Mider</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.findRestaurantFavoText}>Remember Special People{"\n"}on Their Special Day</Text>
					<Text
						style={styles.loremIpsumIsSimplText}>Your friends deserve to be remembered</Text>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	onboardingAlt1aView: {
		backgroundColor: "white",
		flex: 1,
	},
	onboardingAlt1aBackgroundMaskImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 640,
	},
	miderText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 80,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 127,
	},
	findRestaurantFavoText: {
		color: "rgb(41, 41, 41)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginRight: 47,
		marginBottom: 23,
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
		marginRight: 8,
	},
})
