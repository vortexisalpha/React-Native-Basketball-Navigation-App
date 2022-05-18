import React, { useState} from "react";
import Login from './pages/login.js';
import Register from './pages/register.js'
import MyHoop from './pages/MyHoop.js'
import Courts from './pages/courts.js'
import Chats from './pages/chats.js'
import MyProfile from './pages/myProfile'



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';


import { 
    Koulen_400Regular
  } from '@expo-google-fonts/koulen'

  import  {useFonts} from 'expo-font';



const Stack = createNativeStackNavigator();
export default function App() {

  
    let [fontsLoaded, error] = useFonts ({
      Koulen_400Regular
      
  });
  if (!fontsLoaded){
      return <AppLoading/>
  }

  
  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Login'>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
        <Stack.Screen name="MyHoop" component={MyHoop} options={{headerShown: false}}/>
        <Stack.Screen name="Courts" component={Courts} options={{headerShown: false}}/>
        <Stack.Screen name="Chats" component={Chats} options={{headerShown: false}}/>
        <Stack.Screen name="MyProfile" component={MyProfile} options={{headerShown: false}}/>



        
      </Stack.Navigator>
    </NavigationContainer>
    );
};