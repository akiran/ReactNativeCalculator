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
    return (
      <View style={styles.container}>
        <ButtonRow>
          <Button 
            backgroundColor={config.lightGrey}
            color={config.blue}
            fontWeight='bold'>
            C
          </Button>
          <Button 
            backgroundColor={config.lightGrey}
            color={config.blue}>
              ( )
          </Button>
          <Button
            backgroundColor={config.lightGrey}
            color={config.blue}>
            %
          </Button>
          <Button
            backgroundColor={config.lightGrey}
            color={config.blue}
            fontSize={config.keyPadFontSize*1.2}>&#x00f7;</Button>
        </ButtonRow>
        <ButtonRow>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button
            backgroundColor={config.lightGrey}>
            <Icon 
              name='clear' 
              color={config.blue} 
              size={config.keyPadFontSize}/>
          </Button>
        </ButtonRow>
        <ButtonRow>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button
            backgroundColor={config.lightGrey}>
            <Icon 
              name='add' 
              color={config.blue} 
              size={config.keyPadFontSize} />
          </Button>
        </ButtonRow>
        <ButtonRow>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button
            backgroundColor={config.lightGrey}>
            <Icon 
              name='remove' 
              color={config.blue} 
              size={config.keyPadFontSize} />
          </Button>
        </ButtonRow>
        <ButtonRow>
          <Button>&#9679;</Button>
          <Button>0</Button>
          <Button>
            +/-
          </Button>
          <Button backgroundColor={config.green} color='white' fontSize={config.keyPadFontSize*1.2}>
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
