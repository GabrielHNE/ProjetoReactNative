import React from 'react';
import {View, TouchableOpacity, Text, Dimensions} from 'react-native';
import Styles from './Styles';


class Button extends React.Component{

    render(){

        const stylesButton = [Styles.Button];

        

        if(this.props.tamanho === 2){
            
            stylesButton.push({width: (Dimensions.get('window').width / 5)*2, 
                alignItems: 'flex-start', 
                paddingLeft: (Dimensions.get('window').width /13)})
        }
        console.log(this.props.color);
        stylesButton.push({ backgroundColor: this.props.color});

        return(
            <TouchableOpacity activeOpacity={0.8}>
                <View style={stylesButton}>
                    <Text style={[Styles.Text, {color: this.props.labelColor ? this.props.labelColor : '#fff' }]}>{this.props.label}</Text>
                </View>
            </TouchableOpacity>
        )
    }



};

export default Button;