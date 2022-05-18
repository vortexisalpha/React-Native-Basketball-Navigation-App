import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
   chatContainer: {
       padding:20,
       width: '90%',
       height: 60,
       left: 20,
       backgroundColor: 'white',

       borderRadius: 4,
       shadowOffset: {width:4, height:5},
        shadowOpacity: 0.35,
        shadowColor: 'black',
        shadowRadius: 3,
   },
   chatText:{
       top:-17,
       left: 30
   }
});


export default styles;