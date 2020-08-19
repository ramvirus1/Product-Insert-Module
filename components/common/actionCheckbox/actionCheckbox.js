/* 
  Common Checkbox Component used in Application.
  
  Props passed 
   - caption : Name of the field
   - defaultValue : Default value of the field
                        
  Author : Ramchand.B.R
*/

import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import {CheckBox} from "native-base"

const ActionCheckBox = ({ caption, defaultValue }) => {
    const [isSelected, setSelection] = useState(defaultValue === 'False' ? false : true);
  
    return (
        <View style={styles.checkboxContainer}>
          <CheckBox
            color="#428AF8"
            checked={isSelected}
            onPress={() => setSelection(!isSelected)}
          />
          <Text style={styles.label}>{caption}</Text>
        </View>
    );
  };
  
  const styles = StyleSheet.create({
    checkboxContainer: {
      flexDirection: "row",
      marginTop: 15,
      marginLeft: 8,
    },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      color:'#000000',
      fontWeight:'normal',
      marginLeft: 20,
    },
  });

export default ActionCheckBox;  