
import React from 'react';
import {View,Text, ImageBackground,TextInput,Pressable, Image} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton/index.js';
import BottomBarCopy from '../bottomBarCopy/index.js';


const CourtsPage = (props) => {
    
  const {onPressCourts,onPressChats, onPressMyHoop,onPressProfile} = props
 
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
        <View style={styles.courtContainer}>
            <View style={styles.searchBox} >

            <View style={styles.chatsTextContainer}>
            <Text style={styles.chatsText}>Court Map</Text>
            </View>

            <View style={styles.inputBoxContainer}>
            <TextInput
            style={styles.inputBox}
            placeholder = {'Search...'}
            placeholderTextColor = {'black'}
            placeholderStyle = {styles.placeholderStyle}
            />
            </View>
            </View>

            <Image style ={styles.image} source={require('../../assets/images/img-4.png')}/>
            <View
        style={styles.bottomBarContainer}>
            <BottomBarCopy 
        style={styles.bottomBar}
        page='Courts' 
        navigateToCourts={() =>{
          sendToCourts()
      }} 
      navigateToMyHoop={() =>{
        sendToMyHoop()
    }}
    navigateToChats={() =>{
        sendToChats()
    }} 
        />
        </View>
        </View>
    )
};

export default CourtsPage;