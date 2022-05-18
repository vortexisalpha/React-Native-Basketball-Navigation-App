
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import MyProfilePage from '../components/MyProfilePage/index.js'

  const MyProfile = props =>{
return (

    <View style={styles.container}>
      
     <MyProfilePage/>
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
export default MyProfile;
