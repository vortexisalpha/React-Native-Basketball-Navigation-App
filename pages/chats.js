
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import ChatsPage from '../components/ChatsPage/index.js'
import StyledButtonCopy from '../components/StyledButtonCopy/index.js'


const NavigateToDetails = props => {
  props.navigation.navigate('Login');
}


  const Chats = props =>{
return (

    <View style={styles.container}>
      <ChatsPage 
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
export default Chats;
