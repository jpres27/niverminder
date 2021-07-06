//
//  Onboarding1
//  Onboarding-screens-vreedi 25-Jun-2021-125436
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View, Button } from "react-native"


export default class Birthdays extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return <View
			style={styles.birthdaysView}
			onTouchStart={() => this.props.navigation.navigate('Privacy')}//Names
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
					source={require("./../../assets/images/onboarding-1-background-mask.png")}
					style={styles.birthdaysBackgroundMaskImage} />
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
					style={styles.flavorText}>Add Birthday Info to Your Contacts</Text>
				<Text
					style={styles.simpleText}>NiverMinder gathers information from your contacts to send each of them your best wishes</Text>
				<View
					style={{
						flex: 1,
					}} />
				<Button
  						onPress= {()=>this.props.navigation.navigate('SearchContacts')}
  						title="Privacy Policy"
  						color="#841584"
  						//accessibilityLabel="Learn more"
					/>
			</View>
		</View>
	}
}

const styles = StyleSheet.create({
	birthdaysView: {
		backgroundColor: "white",
		flex: 1,
	},
	birthdaysBackgroundMaskImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 640,
	},
	flavorText: {
		backgroundColor: "transparent",
		color: "rgb(41, 41, 41)",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		alignSelf: "flex-end",
		marginTop: 20,
		marginRight: 31,
	},
	simpleText: {
		color: "rgb(41, 41, 41)",
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
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
})
