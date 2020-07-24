import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class RectangleComponent extends Component {

	componentToHex = (c) => {
	  var hex = c.toString(16);
		console.log(hex)
	  return hex.length == 1 ? "0" + hex : hex;
	}

	rgbToHex = (r, g, b) => {
	  return "#" + this.componentToHex(parseInt(r)) + this.componentToHex(parseInt(g)) + this.componentToHex(parseInt(b));
	}

	parseColor = (colorText) => {
		let finalColor;
		if(colorText.indexOf('#') != -1){
			finalColor = colorText;
		}
		else{
			let rgbVals;
			if(colorText.indexOf('(') != -1)   //rgb(2,2,2)  "rgb", "2,2,2)""
				rgbVals = colorText.split('(')[1].split(')')[0].split(',')
			else{
				rgbVals = colorText.split(',')
			}

			if(rgbVals.length == 3){
				finalColor = this.rgbToHex(rgbVals[0], rgbVals[1], rgbVals[2])
			}
			else{
				finalColor = "#000000"
			}
		}
		console.log(finalColor)
		return finalColor

	}
	styles = {
		rectangle: {
			width: this.props.width,
			height: this.props.height,
			backgroundColor: this.parseColor(this.props.background),
			borderRadius: this.props.borderRadius,
			borderWidth: this.props.borderWidth,
			borderColor: this.parseColor(this.props.borderColor)
		}
	}
	render() {

		return (
			<View style={this.styles.rectangle}>

			</View>
		)
	}
}


export default RectangleComponent
