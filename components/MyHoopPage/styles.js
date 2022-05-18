import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    myProfileText: {
        
    position: 'absolute',
    width: 76,
    height: 36,
    

    fontWeight: '600',
    fontSize: 15,
    lineHeight: 34,
    },
    myProfileButton:{
        position: 'absolute',
        width: 92,
        height: 26,
        left: 280,
        top: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

backgroundColor: '#E6A94F',
borderRadius: 5
    },
    myHoopContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#F3F3F3',
        display: 'flex',
    
    },
    bars: {
        position: 'absolute',
        width: 38,
        height: 31,
        left: 18,
        top: 18,
        
        
    },
bottomBarContainer: {
    zIndex:2,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
},
bottomBar: {
    zIndex:2,
    
}
    
});

export default styles;