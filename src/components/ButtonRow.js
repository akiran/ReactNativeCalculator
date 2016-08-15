import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import Button from './Button'
import config from '../config'

export default class ButtonRow extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row',
    borderBottomWidth: config.borderWidth,
    borderColor: config.keyPadBorderColor,
  }
})
