import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

hoopCard: {
    
    
    //boxSizing: 'border-box',
    flex: 1,
    position: 'absolute',
    width: 286,
    height: 304,
    left: 52,
    top: 91,
    borderWidth: 0.25,
    backgroundColor: '#F3F3F3',
    
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    shadowOffset: {width:4, height:10},
    shadowOpacity: 0.35,
    shadowColor: 'black',
    shadowRadius: 3,

},

d2pText: {

    zIndex: 10,
    position: 'absolute',
    
    height: 109,
    
    
    fontWeight: '900',
    fontSize: 96,
    lineHeight: 116,
    
    color: '#2D2D2D'
    
},
image: {
    zIndex: 0,
    position: 'absolute',
    width: 173,
    height: 266,
    display: 'flex',
    alignItems: 'center'
},

subText: {
    zIndex: 100,
    fontFamily:'Koulen_400Regular',
    position: 'absolute',
    
    
    top: 150,

    fontStyle: 'normal',
    fontSize: 28,
    lineHeight: 37,
    /* or 109% */

    color: '#000000'
}


 });
export default styles;