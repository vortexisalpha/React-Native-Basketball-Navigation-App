import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    courtContainer:{
        display: 'flex',
        width: '100%',
        height:'100%',
        backgroundColor: '#F3F3F3'
        
        
    },
bottomBarContainer:{
    width: '100%',
    bottom:-796
},

newChatText: {

    position: 'absolute',

    left:11,
    top:3,
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 18,

    color: '#000000'

},
inputBoxContainer:{
    position: 'absolute',
width: 354,
height: 30,
left: 30,
top: 114,

backgroundColor: '#C4C4C480',
borderRadius: 4,
},
inputBox:{
    color: 'black',
    left:20,
    top:5

},
chatsTextContainer:{
    zIndex:2,
    position: 'absolute',
    width: 150,
    height: 45,
    left: 156,
    top: 62,
},
chatsText: {
    

fontFamily: 'Koulen_400Regular',
fontWeight: '400',
fontSize: 25,
lineHeight: 45,

color: '#000000',
},
image:{
    position: 'absolute',
    width: 365,
    height: 526,
    left: 23,
    top: 186,
    
    borderRadius: 30,
}



});

export default styles;