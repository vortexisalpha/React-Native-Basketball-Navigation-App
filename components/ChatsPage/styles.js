import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
   container:{
        display: 'flex',
        width: '100%',
        height:'100%',
        backgroundColor: '#F3F3F3'
        
    },
bottomBarContainer:{
    width: '100%',
    bottom:-426
},
searchBox: { 
    display: 'flex',
    alignItems: 'center',
    top:0,
    width: '100%',
    height: 150

},
chatOne: {
    top:0
},
newChatButton:{
    position: 'absolute',
width: 92,
height: 26,
left: 279,
top: 44,

backgroundColor: '#E6A94F',
borderRadius: 5,
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
    width: 55,
    height: 45,
    left: 166,
    top: 72,
},
chatsText: {
    

fontFamily: 'Koulen_400Regular',
fontWeight: '400',
fontSize: 25,
lineHeight: 45,

color: '#000000',
}


});

export default styles;