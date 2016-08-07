import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native'
import InputArea from './components/InputArea'
import BasicKeyPad from './components/BasicKeyPad'

export default class ReactNativeCalculator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <InputArea />
        <BasicKeyPad />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

// TBR: disabling warning for now
console.disableYellowBox = true

AppRegistry.registerComponent('ReactNativeCalculator', () => ReactNativeCalculator)
