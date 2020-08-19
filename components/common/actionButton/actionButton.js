/* 
  Common Button Component used in Application.
  
  Props passed 
   - buttonStyle : Style for Button
   - title : Title of Button
   - action : Action that takes place on user interaction
                        
  Author : Ramchand.B.R
*/

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ActionButton = ({ buttonStyle, title, action }) => {
    return (
        <TouchableOpacity onPress={action} style={buttonStyle}>
            <Text style={{color:"white"}}>{title}</Text>
        </TouchableOpacity>
    )
};

export default ActionButton;
