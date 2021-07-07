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
	}
})
