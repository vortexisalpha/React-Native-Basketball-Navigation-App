
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from '../components/CarItem/index.js'
import RegisterPage from '../components/registerPage/index.js'

const NavigateToDetails = props => {
  props.navigation.navigate('Login');
}


  const Register = props =>{
return (

    <View style={styles.container}>
      
      <RegisterPage/>
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
export default Register;
