import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import Styles from '../assets/styles.js';

export default function Buttons ({title, color, Width, Height, value, method}){

    return(
        <TouchableOpacity
        // onPress = {() => method()}
        
        style={{
            alignItems: 'center',
            justifyContent: 'center',

            width: Width,
            height: Height,
            
            backgroundColor: color,
            
            borderWidth: 1,
            borderColor: 'gray',
        }}>
            <Text style={Styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};