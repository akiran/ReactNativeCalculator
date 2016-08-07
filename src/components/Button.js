import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

export default class Button extends Component {
  render() {

    return (
      <View style={styles.container}>
        <Text>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
  }
})
