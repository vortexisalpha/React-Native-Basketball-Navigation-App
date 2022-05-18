import React from 'react';
import {View,Text, Pressable,TextInput} from 'react-native';
import styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faBasketball} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faCircleChevronRight} from '@fortawesome/free-solid-svg-icons'



const Chat = (props) => {

  const {text, type} = props;

  if (type =='court'){
    var sideIcon = faBasketball
  }
  else if (type == 'person'){
    var sideIcon = faUser
  }

  return (
        <View style={styles.chatContainer}>
            
        <FontAwesomeIcon icon={sideIcon}/>
          <Text style={styles.chatText} >{text}</Text>
          <Pressable
          >
          <FontAwesomeIcon size={25} style={[{top:-33},{left:300},{color: '#E6A94F'}]} icon={faCircleChevronRight} />
          </Pressable>
        </View>
    );
};

export default Chat;