import React from 'react';
import {View,Text, Button, ImageBackground, Image, Pressable,useEffect} from 'react-native';
import styles from './styles';
import StyledButtonCopy from '../StyledButtonCopy/index.js';
import StyledButton from '../StyledButton/index.js';

import HoopCard from '../HoopCard/index.js'
import MyCourts from '../MyCourts/index.js'
import BottomBar from '../bottomBar/index.js'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import MyProfileButton from '../MyProfileButton/index.js'

const MyHoopPage = (props) => {

  const {onPressCourts,onPressChats, onPressMyHoop,onPressProfile,onPressFinsbury} = props
 
  const sendToCourts = ()=> {
    
    onPressCourts()
}
const sendToChats = ()=> {
    
  onPressChats()
}
const sendToMyHoop = ()=> {
    
  onPressMyHoop()
}




    return (
        <View style={styles.myHoopContainer}>

        <FontAwesomeIcon style={[styles.bars, {left:40},{top:40}]} size={30} icon={faBars}/>
        
        <StyledButtonCopy
        
        content={'My Profile'}
        style={[{left:100},{top:40}]}
        onPressProfile={() =>{
          sendToChats()
      }} 
        />
      

        
        <HoopCard
        
        />
        <MyCourts sendToFinsbury={() => {sendToCourts()}}/>
        
        
        <BottomBar style={styles.bottomBar}  page='MyHoop' 
        navigateToCourts={() =>{
          sendToCourts()
      }} 
      navigateToChats={() =>{
        sendToChats()
    }} 
    navigateToMyHoop={() =>{
      sendToMyHoop()
  }} 
        />
      </View>
    
    )
};

export default MyHoopPage;