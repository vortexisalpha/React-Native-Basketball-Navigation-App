import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    bottomContainer: {
        position: 'absolute',
        width: '100%',
        height: 100,
        
        backgroundColor: '#E6A94F',
    },
    buttonContainer: {
        top:10,
        height:10,
        width:'100%',
    },
   myHoopText:{
        zIndex:1,
        position: 'absolute',
        width: 76,
        height: 34,
        top: 20,

        fontFamily: 'Koulen_400Regular',
        
        fontWeight: '400',
        fontSize: 22,
        lineHeight: 36,

        color: '#000000',
            
},

circleIcon:{
    zIndex:2,

    position: 'absolute',
    display: 'flex',
    top:55,
    
}
});

export default styles;