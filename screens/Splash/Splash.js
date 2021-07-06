//
//  Splash.js
//  Logo screen
//
//  Created by Cesar Montalverne and John Presley.
// 
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class Splash extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return <View
			style={styles.splashView}>
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
					style={styles.splashBackgroundMaskImage} />
			</View>
			<View
				onTouchStart={() => this.props.navigation.navigate('About')}
				style={{ width: '100%', height: '100%' }}
			/>
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
					style={styles.minderText}>Minder</Text>
				<View
					style={{
						flex: 1,
					}} />
				<Text
					style={styles.simpleText}>Remember special people on their special day</Text>
			</View>
		</View>
	}
}

const styles = StyleSheet.create({
	splashView: {
		backgroundColor: "white",
		flex: 1,
	},
	splashBackgroundMaskImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 640,
	},
	minderText: {
		color: "black",

		fontSize: 80,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 350,
	},
	flavorText: {
		color: "rgb(41, 41, 41)",

		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginRight: 47,
		marginBottom: 23,
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
		marginRight: 8,
	},
})
