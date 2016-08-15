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
  constructor(props) {
    super(props)
    this.state = {
      inputs: [],
      result: ''
    }
    this.enter = this.enter.bind(this)
    this.remove = this.remove.bind(this)
    this.clear = this.clear.bind(this)
    this.calculate = this.calculate.bind(this)
  }
  enter(input) {
    this.setState({
      inputs: this.state.inputs.concat(input)
    })
  }
  remove() {
    const {inputs} = this.state
    this.setState({
      inputs: inputs.slice(0, inputs.length - 1)
    })
  }
  clear() {
    this.setState({
      inputs: [],
      result: ''
    })
  }
  calculate() {


  }
  render() {
    const {inputs, result} = this.state
    return (
      <View style={styles.container}>
        <InputArea inputs={inputs} result={result}/>
        <BasicKeyPad 
          enter={this.enter}
          remove={this.remove}
          clear={this.clear}
          calculate={this.calculate}/>
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
