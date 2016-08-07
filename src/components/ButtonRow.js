import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import Button from './Button'

export default class ButtonRow extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.controls.map(function (control) {
          return (
            <Button>
              {control}
            </Button>
          )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row'
  }
})
