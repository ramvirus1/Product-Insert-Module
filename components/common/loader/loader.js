/* 
  Loader Component which is used as an activity indicator throughout the application

  props passed 
    - message : Message to be shown along with Loader
  Author : Ramchand.B.R
*/


import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import BaseView from 'common-components/baseView/baseView';

const Loader = ({ message }) => {
    return (
        <BaseView>
            <ActivityIndicator style={styles.loader} size="large" color="#428AF8" />
            <Text style={styles.message}>{message}</Text>
        </BaseView>
    )
};

const styles = StyleSheet.create({
    message:{
        color:'black',
        textAlign:'center',
        justifyContent:'center'
    },
    loader:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }
});

export default Loader