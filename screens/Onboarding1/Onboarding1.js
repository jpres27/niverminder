//
//  Onboarding1
//  Onboarding-screens-vreedi 25-Jun-2021-125436
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native"


export default class Onboarding1 extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return <View
			style={styles.onboarding1View}>
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
					source={require("./../../assets/images/onboarding-1-background-mask.png")}
					style={styles.onboarding1BackgroundMaskImage} />
			</View>
			<View
				pointerEvents="box-none"
				style={{
					position: "absolute",
					left: 16,
					right: 10,
					top: 376,
					bottom: 125,
					alignItems: "center",
				}}>
				<Text
					style={styles.findRestaurantFavoText}>Add Birthday Info to Your Contacts</Text>
				<Text
					style={styles.loremIpsumIsSimplText}>NiverMinder gathers information from your contacts to send each of them your best wishes</Text>
				<View
					style={{
						flex: 1,
					}} />
				<TouchableOpacity
					style={styles.button}
					onPress={() => this.props.navigation.navigate('Details')}
				>
					<Text
						style={styles.findBestPlaceText}>GO TO CONTACTS</Text>
				</TouchableOpacity>
			</View>
		</View>
	}
}

const styles = StyleSheet.create({
	onboarding1View: {
		backgroundColor: "white",
		flex: 1,
	},
	onboarding1BackgroundMaskImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 640,
	},
	findRestaurantFavoText: {
		backgroundColor: "transparent",
		color: "rgb(41, 41, 41)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		alignSelf: "flex-end",
		marginTop: 20,
		marginRight: 31,
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
		marginTop: 6,
	},
	findBestPlaceText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
})
