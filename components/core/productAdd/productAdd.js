/* 
  Product Add Screen

  fetchProductEntryDetails - Function to fetch the products entry detailsfrom API endpoint

  DetailFormBuilder - Custom Component to build the details entry.

  Parameters passed from Product List Screen 
    - productName : name of the Product
    - productUrl : endpoint to fetch product entry details
  
  Author : Ramchand.B.R
*/

import { Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

import BaseView from 'common-components/baseView/baseView';
import Loader from 'common-components/loader/loader';
import DetailFormBuilder from 'common-components/detailFormBuilder/detailFormBuilder';

import { API } from '../../../services/apiService';

const ProductAddScreen = ({ route }) => {
    const { productName, productUrl } = route.params;
    const [ prodEntryDetails, setProdEntryDetails ] = useState([]);

    useEffect(() => {
        const fetchProductEntryDetails = async () => {
            const response = await API.get(productUrl);
            setProdEntryDetails(response);
        };
        fetchProductEntryDetails();
    },[]);

    return (
            <BaseView>
                { !prodEntryDetails.length && <Loader message={'Fetching Products Details...'}/>}
                { !!prodEntryDetails.length && <Text style={styles.title}>{`${'Add'} ${productName}`}</Text>}
                { !!prodEntryDetails.length && <DetailFormBuilder prodEntryDetails={prodEntryDetails} /> }
            </BaseView>
    );
}

export default ProductAddScreen;

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center',
        margin: 10
    }
});
