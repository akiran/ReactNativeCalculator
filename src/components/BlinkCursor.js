import React, { Component } from 'react';
import {Text} from 'react-native'

export default class BlickCursor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCursor: true
    }
    setInterval(() => this.setState({showCursor: !this.state.showCursor}), 1000)
  }
  render() {
    return (
      <Text>{this.state.showCursor ? '|' : ''}</Text>
    );
  }
}
