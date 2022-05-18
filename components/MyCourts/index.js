import React from 'react';
import {View,Text, ImageBackground, Image} from 'react-native';
import styles from './styles';
import CourtComponent from '../CourtComponent/index.js';
const MyCourts = (props) => {
const {sendToCourtFinsbury,sendToCourtArgyle,sendToCourtGreenside} = props
const courtFinsbury = ()=> {
    sendToCourtFinsbury()
}
    return (
        //make this into a scrollable list later
        <View style={styles.MyCourts}>
            <Text style={styles.MyCourtsText}>My Courts:</Text>
            <View style={styles.firstCourt}>
            <CourtComponent onPressCourt={() =>{courtFinsbury}} mi={5} text={'Finsbury Park Courts'} />
            </View>
            <View style={styles.secondCourt}>
            <CourtComponent onPressCourt={sendToCourtArgyle} mi={25} text={'Argyle Courts'}/>
            </View>
            <View style={styles.thirdCourt}>
            <CourtComponent onPressCourt={sendToCourtGreenside} mi={10} text={'Greenside Courts'}/>
            </View>
      </View>
    
    )
};

export default MyCourts;