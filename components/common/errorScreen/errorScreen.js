/* 
  Error screen which will be shown when application crashes

  Author : Ramchand.B.R
*/

import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ErrorScreen = () => {
    return (
        <View style={styles.errorTextCotainer}>
            <Text>Error has occured</Text>
        </View>
    )
};

export default ErrorScreen;

const styles = StyleSheet.create({
    errorTextCotainer:{
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center" 
    }
});