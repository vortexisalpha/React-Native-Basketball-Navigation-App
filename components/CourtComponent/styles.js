import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({

courtComponentContainer: {
    position: 'absolute',
    
    width: 325,
    height: 53,
    left: 39,
    top: 493,
    
    backgroundColor: '#D8D8D8',
    shadowOffset: {width:4, height:4},
    shadowOpacity: 0.25,
    shadowColor: 'black',
    shadowRadius: 3,
    borderRadius: 3,
    display: 'flex',
},

courtMainText: {
    position: 'absolute',
    width: 168,
    height: 36,
    fontFamily:'Koulen_400Regular',
    left: 50,
    top: 11,
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 36,

color: '#000000'
},

layeredButton: {
    backgroundColor: '#68a0cf',
   overflow: 'hidden'
},
courtDistance: {

    position: 'absolute',
    width: 89,
    height: 14,
    fontWeight: '800',
    fontSize: 13,
    lineHeight: 16,
    top: 1,
    left: 50,

    color: '#000000'
},
bookmarkIcon: {

    position: 'absolute',
    width: 53,
    
    left:17
    
},
arrowIcon: {

    position: 'absolute',
    width: 53,
    top:15,
    left:288
    
}
});

export default styles;