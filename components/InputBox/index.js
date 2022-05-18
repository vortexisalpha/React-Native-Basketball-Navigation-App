import React from 'react';
import {View,Text, Pressable,TextInput} from 'react-native';
import styles from './styles'

const InputBox = (props) => {

  const {content} = props;
    //really cool states
  //const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
  //const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';
    
  return (
        <View style={styles.container}>
          <TextInput
            style={styles.inputBox}
            placeholder = {content}
            placeholderTextColor = {'#3C3C3C'}
          />
            
        </View>
    );
};

export default InputBox;