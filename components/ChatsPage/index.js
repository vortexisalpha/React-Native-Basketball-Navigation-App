import React from 'react';
import {View,Text, Button, ImageBackground, Image, Pressable, TextInput,useEffect} from 'react-native';
import styles from './styles';
import Chat from '../chat/index.js'
import BottomBar from '../bottomBar/index.js'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import MyProfileButton from '../MyProfileButton/index.js'

const ChatsPage = (props) => {

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
        <View style={styles.container}>
        <View style={styles.searchBox} >

            <View style={styles.chatsTextContainer}>
        <Text style={styles.chatsText}>Chats</Text>
        </View>


        <View style={styles.newChatButton}>
                <Pressable>
                    <Text style={styles.newChatText}>New Chat</Text>
                </Pressable>
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
        <View style={{padding:10}}>
       <Chat type={'court'} text={'Finsbury Park Court'}/>
       </View>
       <View style={{padding:10}}>
       <Chat type={'court'} text={'Argyle Court'}/>
       </View>
       <View style={{padding:10}}>
       <Chat type={'court'} text={'Greenside Court'} />
       </View>
       <View style={{padding:10}}>
       <Chat type={'person'} text={'UltimateBaller'} />
       </View>
       

       
        <View
        style={styles.bottomBarContainer}>
        <BottomBar 
        style={styles.bottomBar}
        page='Chats' 
        navigateToCourts={() =>{
          sendToCourts()
      }} 
      navigateToMyHoop={() =>{
        sendToMyHoop()
    }} 
        />
        </View>
        
      </View>
    
    )
};

export default ChatsPage;