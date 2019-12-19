
import {StyleSheet, Dimensions} from 'react-native';


const Styles = StyleSheet.create({
    Button:{
        height: Dimensions.get('window').width / 5,
        width:  Dimensions.get('window').width / 5,
        margin: Dimensions.get('window').width / 70,
        borderRadius: Dimensions.get('window').width / 2.5,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center'
    },

    Text:{
        fontSize: Dimensions.get('screen').fontScale*30,
        textAlign: 'center',
    }

});

export default Styles;