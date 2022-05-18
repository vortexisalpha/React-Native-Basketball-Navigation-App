import React from 'react';
import {View,Text, ImageBackground, Image, Button,Pressable} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faBookmark, faCircleChevronRight} from '@fortawesome/free-solid-svg-icons'
import styles from './styles';
const CourtComponent = (props) => {
  const {onPressCourt} = props
    const mainText = props.text
    const miles = props.mi
    const navigate = ()=>{
      onPressCourt()
    }

    return (
        
        <View style={styles.courtComponentContainer}>
            <Text style={styles.courtMainText }>{mainText}</Text>
            <Text style={styles.courtDistance}>{miles} mi</Text>
            <FontAwesomeIcon  color={'#1E3251'} size={25} style={styles.bookmarkIcon} icon={faBookmark} />
            <Pressable
          
          onPress={() => {
            navigate()
            console.warn('a')
          }}
        
          >
            <FontAwesomeIcon color={'#E6A94F'} size={20} style={styles.arrowIcon} icon={faCircleChevronRight} />
            </Pressable>
            
        </View>
        
       
    
    )
};

export default CourtComponent;