import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ActionButton from '../actionButton/actionButton';

const ProductListItem = ({ title, action }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <ActionButton buttonStyle={styles.actionBtn} title={'Add'} action={action}/>
        </View>
    )
};

export default ProductListItem; 

const styles = StyleSheet.create({
    item: {
        flex:1,
        flexDirection:'row',
        alignItems: 'stretch',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderColor: '#428AF8',
        borderRadius:5,
        borderWidth: 1
      },
      title: {
        flex: 2,
        fontSize: 15,
        alignSelf:'flex-start',
        alignItems:"center"
      },
      actionBtn:{
        alignSelf:'flex-end',
        backgroundColor:"#428AF8",
        borderRadius:5,
        padding:10,
        alignItems:"center"
    }
});