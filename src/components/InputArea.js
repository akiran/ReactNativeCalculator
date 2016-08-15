import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import BlinkCursor from './BlinkCursor'
import Icon from 'react-native-vector-icons/MaterialIcons'
 
export default class InputArea extends Component {
  render() {
    const {inputs, result} = this.props
    return (
      <View style={styles.container}> 
        <View>
          {inputs.map(function (input) {
            return <Text>{input}</Text>
          })}
        </View>
        <BlinkCursor />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    elevation: 5,
    backgroundColor: 'white'
  }
})
