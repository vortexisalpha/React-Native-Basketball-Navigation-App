
import React from 'react';
import {View,Text, ImageBackground, Image} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton/index.js';


const HoopCard = (props) => {
    
  //const {name, image,onPressRegister} = props

    

    return (
        <View style={styles.hoopCard}>
            <Text style={styles.d2pText}>D2P</Text>
            
            <Image source={require('../../assets/images/img-3.png')} style={styles.image}/>
            <Text style={styles.subText} >Never Miss a Bounce, Basketball Networking Made Easy!</Text>
        </View>
    )
};

export default HoopCard;