import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class RectangleComponent extends Component {

	componentToHex = (c) => {
	  var hex = c.toString(16);
	  return hex.length == 1 ? "0" + hex : hex;
	}

	rgbToHex = (r, g, b) => {
	  return "#" + this.componentToHex(parseInt(r)) + this.componentToHex(parseInt(g)) + this.componentToHex(parseInt(b));
	}

	parseColor = (colorText) => {
		let finalColor;
		if(colorText == undefined)
			return this.props.defaultColor;
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
		return finalColor

	}

	render() {
		let bgColor = this.props.background;
		if(bgColor == undefined || bgColor.trim() == "")
				bgColor = this.props.defaultColor
		const styles = {
			rectangle: {
				width: this.props._width,
				height: this.props._height,
				backgroundColor: bgColor,
				borderRadius: this.props.borderRadius,
				borderWidth: this.props.border.enabled ? this.props.border.borderWidth : 0,
				borderColor: this.parseColor(this.props.border.borderColor)
			}
		}

		return (
			<View style={styles.rectangle}
			key={`rectView.${this.props._width+this.props._height+this.props.borderRadius}`}
			>

			</View>
		)
	}
}


export default RectangleComponent
