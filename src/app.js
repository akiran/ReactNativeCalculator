import React, { Component } from 'react'
import {
  AppRegistry,
  View
} from 'react-native'
import BlinkCursor from './components/BlinkCursor'

export default class ReactNativeCalculator extends Component {
  render() {
    return (
      <View>
        <BlinkCursor />
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeCalculator', () => ReactNativeCalculator)
