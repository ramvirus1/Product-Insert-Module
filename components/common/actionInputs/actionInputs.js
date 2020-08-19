/* 
  Common Input Component used in Application.
  
  Props passed 
   - caption : Name of the field
   - defaultValue : Default value of the field
   - type : Determines type of input (number / text)
   - mandatory : If the field is mandatory or not
   - validationMessage - Validation Message for a mandatory field
   - triggerValidation - Value passed (true/false) , to check if user has clicked submit button so that
                        component can trigger validation.

  
  Author : Ramchand.B.R
*/

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const ActionInput = props => {
    const { caption, defaultValue, type, mandatory, validationMessage, triggerValidation } = props;
    const [ value, onChangeText ] = useState(null);
    const [ valueAdded , setValueAddedFlag ] =  useState(mandatory ? !mandatory : null);

    const checkAndSetMandatoryFields = text => {
        mandatory && text.length && setValueAddedFlag(true);
        onChangeText(text);
    };

    return (
        <View>
            <Text style={styles.textCaption}>{caption}</Text>
            <TextInput
                onChangeText={text => checkAndSetMandatoryFields(text)}
                value={value}
                selectionColor={'#428AF8'}
                style={styles.textInput}
                placeholder={defaultValue}
                keyboardType={type === 'int' ? 'numeric' : 'default'}
            />
            { mandatory && triggerValidation && !valueAdded && <Text style={styles.validationMsg}>{validationMessage}</Text>}
        </View>
        
    )
};

const styles = StyleSheet.create({
    textCaption:{
        marginTop: 10,
        marginLeft: 15,
    },
    textInput:{
        margin: 15,
        padding:6,
        borderColor: '#428AF8',
        borderRadius:5,
        borderWidth: 1
    },
    validationMsg:{
        alignSelf:'flex-end',
        marginRight: 15,
        color:'red'
    }
});

export default ActionInput;