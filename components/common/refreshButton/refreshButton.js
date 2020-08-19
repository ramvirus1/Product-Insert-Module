import { Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const RefreshButton = ({ action }) => {
    return (
        <TouchableOpacity onPress={action}>
            <Image 
                source={require('../../../assets/refresh.png')}
                style={styles.refreshBtn}
                
            />
        </TouchableOpacity>
        
    )
};

export default RefreshButton;

const styles = StyleSheet.create({
    refreshBtn : {
        width: 20, 
        height: 20, 
        margin: 10
    }    
});