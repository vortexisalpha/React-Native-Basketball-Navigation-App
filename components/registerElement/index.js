import React from 'react';
import {View,Text, ImageBackground, Image} from 'react-native';
import styles from './styles';
import InputBox from '../InputBox/index.js';
const RegisterElement = (props) => {
const {title} = props

    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            <InputBox style={styles.inputBoxOne} />
      </View>
    
    )
};

export default RegisterElement;