import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

import config from '../config'

export default class Button extends Component {
  render() {
    const {backgroundColor, color, fontSize, fontWeight, onPress} = this.props
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
        <TouchableHighlight onPress={onPress}>
          <Text style={textStyle}>
            {this.props.children}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

Button.defaultProps = {
  backgroundColor: 'white',
  color: '#666',
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
