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
        <View >
          <Text style={textStyle}>
            {this.props.children}
          </Text>
        </View>
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
    // borderColor: config.keyPadBorderColor,
    // borderWidth: 0.5,
    // borderBottomWidth: config.borderWidth,
    // borderRightWidth: config.borderWidth,
  },
})
