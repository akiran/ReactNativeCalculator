import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import BlinkCursor from './BlinkCursor'
import Icon from 'react-native-vector-icons/MaterialIcons'
 
export default class InputArea extends Component {
  render() {
    return (
      <View style={styles.container}> 
        <BlinkCursor />
        <Icon name="alarm" size={30} color="#900" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2
  }
})
