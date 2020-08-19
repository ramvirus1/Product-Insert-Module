/* 
  Wrapper View for the screens in the app
  
  Author : Ramchand.B.R
*/


import { View, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React from 'react';

const BaseView = ({ children }) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>{children}</View>
        </TouchableWithoutFeedback>
        
    )
};

export default BaseView; 

const styles = StyleSheet.create({
    container : {
        position: 'absolute', 
        top: 0, 
        bottom: 0, 
        left: 0, 
        right: 0,
        backgroundColor:'white'
    }
});