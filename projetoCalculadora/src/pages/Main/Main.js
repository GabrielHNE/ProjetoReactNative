import React from 'react';
import {View,
        Text} from 'react-native';
import Button from '../../components/Button/Button'


// vou usar class
class Main extends React.Component {
    
    render(){
        return (
            <>
                <View style={{backgroundColor: '#000', flex:1}}>
                    <Text styles={{color: "#ffff"}}>0</Text>
                </View>
                <View style={{backgroundColor: '#000', flex:3, justifyContent:'flex-end', alignItem:'flex-end', paddingLeft: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <Button color='#f0f0f0' label='AC' labelColor='black'/>
                        <Button color='#f0f0f0' label='+/-' labelColor='black'/>
                        <Button color='#f0f0f0' label='%' labelColor='black'/>
                        <Button color='orange' label='÷' labelColor='white'/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Button color='gray'  label='7' labelColor='white'/>
                        <Button color='gray' label='8' labelColor='white'/>
                        <Button color='gray' label='9' labelColor='white'/>
                        <Button color='orange' label='x' labelColor='white'/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Button color='gray'  label='7' labelColor='white'/>
                        <Button color='gray' label='8' labelColor='white'/>
                        <Button color='gray' label='9' labelColor='white'/>
                        <Button color='orange' label='+' labelColor='white'/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Button color='gray'  label='7' labelColor='white'/>
                        <Button color='gray' label='8' labelColor='white'/>
                        <Button color='gray' label='9' labelColor='white'/>
                        <Button color='orange' label='-' labelColor='white'/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Button color='gray'  label='0' labelColor='white' tamanho={2}/>
                        <Button color='gray' label='8' labelColor='white'/>
                        <Button color='orange' label='=' labelColor='white' tamanho/>
                    </View>

                </View>
            
            </>
        );
    }
};

export default Main;