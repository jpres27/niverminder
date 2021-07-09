//
//  Splash.js
//  Logo screen
//
//  Created by Cesar Montalverne and John Presley.
// 
//

import React from "react"
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native"


export default class Splash extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return <View
			onTouchStart={() => this.props.navigation.navigate('About')}>

			<Image
				source={require("./../../assets/images/splashscreenimage.jpg")}
				style={styles.splashBackgroundMaskImage} />



		</View>



	}
}

const styles = StyleSheet.create({
	splashBackgroundMaskImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 640,
	},
	buttonStyle: {
		backgroundColor: "rgb(87, 107, 245)",
		color: "white",
		marginBottom: 25,
		alignItems: "center",
		minHeight: 50,
		justifyContent: "center",
		marginLeft: 22,
		marginRight: 22,
		borderRadius: 5,
	},
})
