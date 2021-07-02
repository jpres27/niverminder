//
//  OnboardingAlt3a
//  Onboarding-screens-vreedi 25-Jun-2021-125436
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native"


export default class About extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return <View
			style={styles.aboutView}
			onTouchStart={() => this.props.navigation.navigate('Privacy')}

			>
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
					style={styles.aboutBackgroundMaskImage} />
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
					style={styles.flavorText}>What We Do?</Text>
				<Text
					style={styles.simpleText}>NiverMinder will send a birthday message to everyone with a filled  birthday field in you contacts list</Text>
			</View>

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
	},
	flavorText: {
		color: "rgb(41, 41, 41)",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		flex: 1,
		justifyContent: 'flex-end',
	},
	simpleText: {
		backgroundColor: "transparent",
		color: "rgb(41, 41, 41)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 24,
		marginTop: 6,
		flex: 1,
		justifyContent: 'flex-end',
	},
	findBestPlaceText: {
		backgroundColor: "transparent",
		color: "white",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	}
})
