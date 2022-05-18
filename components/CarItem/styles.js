import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    carContainer: {
      width:'100%',
      height: '100%',
      backgroundColor: '#F3F3F3'
      
    },
    titles: {
      alignItems: 'center',
    },
    title: {
      position: 'absolute',
      width: 199,
      height: 109,
      left: 95,
      top: 77,

      fontStyle: 'normal',
      fontWeight: '900',
      fontSize: 96,
      lineHeight: 116,
      color: '#000000',
      opacity: 0.63
    },
    
   
    image:{
      position: 'absolute',
      width: 173,
      height: 266,
      left: 108,
      top: 195
    },

   
    buttonsContainer: {
      display: 'flex',
      position: 'absolute',
      bottom: 50,
      width: '100%',
      alignItems: 'center',
      
  },
  buttonOne: {
   
    padding:20
    
},

    inputBoxContainerOne: {  
      

      position: 'absolute', 
      top: 500,
      width: '100%',
      height: 200

    },

    inputBoxContainerTwo: {  
      
      position: 'absolute', 
      top: 600,
      width: '100%',
      height: 200

    },

    inputBoxOne: {
      position: 'absolute',
      top: 20
    },

    inputBoxTwo: {
      position: 'absolute',
      bottom: 0
    },

    loginContainer:
    {
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    },

    loginText: {
      position: 'absolute',
      top: 465,

      fontWeight: '800',
      fontSize: 24,
      lineHeight: 29,
      
      color: '#000000'
      
    },

    accountText:
    {
      fontWeight: '700',
      fontSize: 20,
      lineHeight: 24,
      opacity: 0.75,
      padding:20
    },

    LoginText: {
      position: 'absolute',
      top: 465,

      fontWeight: '800',
      fontSize: 24,
      lineHeight: 29,
      
      color: '#000000'
      
    }
});


export default styles;