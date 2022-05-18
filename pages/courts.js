
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CourtsPage from '../components/CourtsPage/index.js'
import bottomBar from '../components/bottomBar/index.js'
const NavigateToDetails = props => {
  props.navigation.navigate('Login');
}


  const Courts = props =>{
return (

  <View style={styles.container}>
  <CourtsPage 
  onPressCourts = {() => {
    props.navigation.navigate('Courts');
    

  }}
  onPressChats = {() => {
    props.navigation.navigate('Chats');
    

  }}
  onPressMyHoop = {() => {
    props.navigation.navigate('MyHoop');
    

  }}/>
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
export default Courts;
