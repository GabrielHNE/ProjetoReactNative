import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    resultScreen:{
        flex: 2,
        backgroundColor: '#6e6e6e',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',

    },
    
    keyboardScreen:{
        backgroundColor: '#6e6e6e',
        flex: 5,      
    },

    buttonText:{
        color: '#000',
        fontSize: 30,
    },

    textValue_resultScreen:{
        color: '#fff',
        fontSize: 50,
    },
    
    rows_container:{
        flexDirection: 'row',
        flex: 1,
    }
});