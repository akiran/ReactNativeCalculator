import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import config from '../config'

export default class Button extends Component {
  render() {
    const {backgroundColor, color, fontSize, fontWeight} = this.props
    const style = {
      backgroundColor,
    }
    const textStyle = {
      color,
      fontSize,
      fontWeight,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 1
    }
    return (
      <View style={[styles.container, style]}>
        <Text style={textStyle}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

Button.defaultProps = {
  backgroundColor: 'white',
  color: config.grey,
  fontSize: config.keyPadFontSize,
  fontWeight: 'normal'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: config.borderWidth,
    borderColor: config.keyPadBorderColor,
  },
})
