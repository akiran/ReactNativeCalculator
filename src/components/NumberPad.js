import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import ButtonRow from './ButtonRow'

export default class NumberPad extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ButtonRow controls={['C', '()', '%', '/']} />
        <ButtonRow controls={['7', '8', '9', 'X']} />
        <ButtonRow controls={['4', '5', '5', '-']} />
        <ButtonRow controls={['1', '2', '3', '+']} />
        <ButtonRow controls={['.', '0', '+/-', '=']} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
  }
})
