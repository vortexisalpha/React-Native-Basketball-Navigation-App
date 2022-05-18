import React from 'react';
import {View,Text, ImageBackground, Image, Pressable} from 'react-native';
import styles from './styles';

const MyHoopPage = (props) => {

    const {content,onPress} = props;

    return (
        <View style={styles.myHoopContainer}>
            
            <Pressable
          style={[styles.button]}
          onPress={() => {
            onPress()
          }}
          >
            <Text style={[styles.text]}>{content}</Text>
          </Pressable>
      </View>
    
    )
};

export default MyHoopPage;