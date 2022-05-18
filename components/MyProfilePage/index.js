import React from 'react';
import {View,Text, ImageBackground, Image} from 'react-native';
import styles from './styles';
import StyledButtonCopy from '../StyledButtonCopy/index.js';
import HoopCard from '../HoopCard/index.js'
import MyCourts from '../MyCourts/index.js'
import BottomBar from '../bottomBar/index.js'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

const MyProfilePage = (props) => {

  const {onPressCourts,onPressChats,onPressMyHoop} = props
 
  const sendToCourts = ()=> {
    
    onPressCourts()
}
const sendToChats = ()=> {
    
  onPressChats()
}


    return (
        <View style={styles.myHoopContainer}>
        <FontAwesomeIcon style={[styles.bars, {left:40},{top:40},{padding:0}]} size={30} icon={faBars}/>
        <StyledButtonCopy content={'My Profile'} style={styles.myProfileButton}></StyledButtonCopy>
        <HoopCard/>
        <MyCourts/>
        <BottomBar page='MyHoop' 
        navigateToCourts={() =>{
          sendToCourts()
      }} 
      navigateToChats={() =>{
        sendToChats()
    }} 
        onPressChats={() => onPressChats}/>
        
      </View>
    
    )
};

export default MyProfilePage;