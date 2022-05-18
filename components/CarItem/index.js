import React from 'react';
import {View,Text, ImageBackground, Image} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton/index.js';
import InputBox from '../InputBox/index.js';
const CarItem = (props) => {

  const {name, image,onPressRegister,onPressMyHoop} = props

    const Login = ()=> {
      console.warn('login pressed')
        

    }
    const SendToRegisterPage = ()=> {
      console.warn('register pressed')
      onPressRegister()
  }
    

    return (
        <View style={styles.carContainer}>
        <Image 
          source={image}
          style={styles.image}
        />
         <View style={styles.titles}>

           <Text style={styles.title}>{name}</Text>
         </View>
         <View style={styles.loginContainer}>

            <Text style={styles.loginText}>Login:</Text>

         </View>

         <View style={styles.inputBoxContainerOne}>
         <InputBox content='Username' style={styles.inputBoxOne}/>
         </View>
         <View style={styles.inputBoxContainerTwo}>
         <InputBox content='Password' style={styles.inputBoxTwo}/>

         </View>
         
        <View style={styles.buttonsContainer}>
        
        <StyledButton style={[styles.buttonOne, {padding:20}]} type='primary' content='Login' onPress={() =>{
            onPressMyHoop()
        }}/>

        <Text style={styles.accountText}>Dont have an account?</Text>

        
        <StyledButton style={styles.buttonTwo} type='secondary' content='Register' onPress={() =>{
            SendToRegisterPage()
        }}/>
        </View>
      </View>
    
    )
};

export default CarItem;