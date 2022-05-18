import React from 'react';
import {View,Text, ImageBackground, Image} from 'react-native';
import styles from './styles';
import StyledButtonCopy from '../StyledButtonCopy/index.js';
import RegisterElement from '../registerElement/index.js';

const MyProfilePage = (props) => {

    return (
        <View style={styles.myHoopContainer}>
        <RegisterElement title={'First Name'}/>
      </View>
    
    )
};

export default MyProfilePage;