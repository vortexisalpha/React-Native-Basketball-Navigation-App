import React from 'react';
import {View,Text, Pressable,TextInput} from 'react-native';
import styles from './styles'
import StyledButtonForBar from '../StyledButtonForBar/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faCircle} from '@fortawesome/free-solid-svg-icons'

const BottomBar = (props) => {

  const {page, navigateToCourts, navigateToChats, navigateToMyHoop} = props;
  
  var opacityMyHoop = 0.5
  var opacityCourts = 0.5
  var opacityChats = 0.5
  var circleLeft = 0

  
  
  



  if(page=='MyHoop'){
  var opacityMyHoop = 1
  var circleLeft =85
  }
  else if(page=='Courts'){
  var opacityCourts = 1
  var circleLeft = 205

  }
  else if(page=='Chats'){
    var opacityChats = 1
    var circleLeft = 323

  }
    
  return (
        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
          <View style={[styles.myHoopText, {left: 46}, {opacity:opacityMyHoop}]}>
            <StyledButtonForBar onPress={() =>{
            navigateToMyHoop()}} content={'My Hoop'} style={[styles.myHoopText, {left: 46}, {opacity:opacityMyHoop}]}>My Hoop</StyledButtonForBar>
            </View>

            <View style={[styles.myHoopText, {left: 170}, {opacity:opacityCourts}]}>
            <StyledButtonForBar onPress={() =>{
            navigateToCourts()}} content={'Courts'} >Courts</StyledButtonForBar>
            </View>

            <View style={[styles.myHoopText, {right: 46}, {opacity:opacityChats}]}>
            <StyledButtonForBar onPress={() =>{
            navigateToChats()}} content={'Chats'} >Chats</StyledButtonForBar>
           </View>
            <FontAwesomeIcon size={5} icon={faCircle} style={[styles.circleIcon, {left: circleLeft}]} />
            
        </View>
        </View>

        
    );
};

export default BottomBar;