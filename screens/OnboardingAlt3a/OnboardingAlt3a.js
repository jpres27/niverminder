//
//  OnboardingAlt3a
//  Onboarding-screens-vreedi 25-Jun-2021-125436
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class OnboardingAlt3a extends React.Component {

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
				style={styles.onboardingAlt3aView}>
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
						source={require("./../../assets/images/onboarding-alt-3a-background-mask.png")}
						style={styles.onboardingAlt3aBackgroundMaskImage}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 19,
						right: 13,
						top: 378,
						height: 99,
					}}>
					<Text
						style={styles.findCafeFavoriteText}>What We Do?</Text>
					<Text
						style={styles.loremIpsumIsSimplText}>NiverMinder will send a birthday message to everyone with a filled  birthday field in you contacts list</Text>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	onboardingAlt3aView: {
		backgroundColor: "white",
		flex: 1,
	},
	onboardingAlt3aBackgroundMaskImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 640,
	},
	findCafeFavoriteText: {
		color: "rgb(41, 41, 41)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
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
		marginTop: 6,
	},
})
