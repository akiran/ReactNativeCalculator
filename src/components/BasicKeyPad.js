import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import ButtonRow from './ButtonRow'
import Button from './Button'
import config from '../config'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class NumberPad extends Component {
  render() {
    const {enter, remove, clear, calculate} = this.props
    return (
      <View style={styles.container}>
        <ButtonRow>
          <Button 
            backgroundColor={config.lightGrey}
            color={config.blue}
            fontWeight='bold'
            onPress={clear}>
            C
          </Button>
          <Button 
            backgroundColor={config.lightGrey}
            color={config.blue}>
              ( )
          </Button>
          <Button
            backgroundColor={config.lightGrey}
            color={config.blue}
            onPress={() => enter('%')}>
            %
          </Button>
          <Button
            backgroundColor={config.lightGrey}
            color={config.blue}
            fontSize={config.keyPadFontSize*1.2}
            onPress={() => enter('/')}>&#x00f7;</Button>
        </ButtonRow>
        <ButtonRow>
          <Button onPress={() => enter(7)}>7</Button>
          <Button onPress={() => enter(8)}>8</Button>
          <Button onPress={() => enter(9)}>9</Button>
          <Button
            backgroundColor={config.lightGrey}
            onPress={() => enter('*')}>
            <Icon 
              name='clear' 
              color={config.blue} 
              size={config.keyPadFontSize}/>
          </Button>
        </ButtonRow>
        <ButtonRow>
          <Button onPress={() => enter(4)}>4</Button>
          <Button onPress={() => enter(5)}>5</Button>
          <Button onPress={() => enter(6)}>6</Button>
          <Button
            backgroundColor={config.lightGrey}
            onPress={() => enter('+')}>
            <Icon 
              name='add' 
              color={config.blue} 
              size={config.keyPadFontSize} />
          </Button>
        </ButtonRow>
        <ButtonRow>
          <Button onPress={() => enter(1)}>1</Button>
          <Button onPress={() => enter(2)}>2</Button>
          <Button onPress={() => enter(3)}>3</Button>
          <Button
            backgroundColor={config.lightGrey}
            onPress={() => enter('-')}>
            <Icon 
              name='remove' 
              color={config.blue} 
              size={config.keyPadFontSize} />
          </Button>
        </ButtonRow>
        <ButtonRow>
          <Button>&#9679;</Button>
          <Button  onPress={() => enter(0)}>0</Button>
          <Button>
            +/-
          </Button>
          <Button 
            backgroundColor={config.green} 
            color='white' 
            fontSize={config.keyPadFontSize*1.2}
            onPress={calculate}>
            =
          </Button>
        </ButtonRow>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
  }
})
