
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from '../components/CarItem/index.js'


const NavigateToDetails = props => {
  props.navigation.navigate('Register');
}


  const Login = props =>{
return (

    <View style={styles.container}>
      
      <CarItem 
      name={'D2P'} 
      image ={require('../assets/images/img-3.png')}
      onPressRegister = { () => NavigateToDetails(props)}
      onPressMyHoop = {() => props.navigation.navigate('MyHoop')}
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
export default Login;
