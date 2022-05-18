
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import MyHoopPage from '../components/MyHoopPage/index.js'



  const MyHoop = props =>{
return (

    <View style={styles.container}>
      
     <MyHoopPage 
      onPressCourts = {() => {
        props.navigation.navigate('Courts');
        

      }}
      onPressChats = {() => {
        props.navigation.navigate('Chats');
        

      }}
      onPressProfile = {() => {
        props.navigation.navigate('MyProfile');
       

      }}
      onPressMyHoop= {() => {
        props.navigation.navigate('MyHoop');
       

      }}

  />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default MyHoop;
