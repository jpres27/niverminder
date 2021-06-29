//
//  Onboarding3
//  Onboarding-screens-vreedi 25-Jun-2021-125436
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class Onboarding3 extends React.Component {

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
				style={styles.onboarding3View}>
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
						source={require("./../../assets/images/onboarding-3-background-mask.png")}
						style={styles.onboarding3BackgroundMaskImage}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 15,
						right: 17,
						top: 396,
						height: 71,
					}}>
					<Text
						style={styles.findCafeFavoriteText}>Enjoy</Text>
					<Text
						style={styles.loremIpsumIsSimplText}>Enjoy the peace of mind of never forgetting another friend’s birthday in your life</Text>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	onboarding3View: {
		backgroundColor: "white",
		flex: 1,
	},
	onboarding3BackgroundMaskImage: {
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
		color: "rgb(41, 41, 41)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 24,
		backgroundColor: "transparent",
		marginTop: 2,
	},
})
