/* 
  Form Builder Screen for Details Entry of a product

  ActionInput - Component used to render Input field (Text & Number)
  ActionCheckBox - Component used to render Checkbox
  ActionButton - Button to Trigger Validation

  props passed
    - prodEntryDetails : List of Array of objects containing properties of each input element

  Author : Ramchand.B.R
*/


import React, { useState } from 'react';
import { StyleSheet  } from 'react-native';
import ActionInput from 'common-components/actionInputs/actionInputs';
import ActionButton from 'common-components/actionButton/actionButton';
import ActionCheckBox from 'common-components/actionCheckbox/actionCheckbox';


const DetailFormBuilder = ( { prodEntryDetails }) => {
    const [ validate , setValidate ] = useState(false);

    const validateDetails = () => {
        setValidate(true);
    };

    return (
        <>
            { prodEntryDetails.map(element => {
                if(element.type === 'int' || element.type === 'text'){
                    return <ActionInput
                                key={element.name} 
                                triggerValidation={validate} 
                                {...element} 
                            />
                }else if(element.type === 'bool'){
                    return <ActionCheckBox 
                            key={element.name} 
                            triggerValidation= {validate}
                            { ...element } />
                }
            })}
            <ActionButton key={'button'} color={'#7a42f4'} buttonStyle={styles.submitBtn} title={'Submit'} action={() => validateDetails()}/>
        </>

    )
};

export default DetailFormBuilder;

const styles = StyleSheet.create({
    submitBtn:{
        margin:40,
        backgroundColor:"#428AF8",
        borderRadius:5,
        padding:10,
        alignItems:"center"
    }
})