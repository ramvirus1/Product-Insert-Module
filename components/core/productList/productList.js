/* 
  Product List Screen

  fetchProductList - Function to fetch the products from API endpoint
  navigationToAddProduct - Function to navigate to Details Entry Screen passing required parameters

  Flatlist is used to avoid performance issues

  ProductListItem - Custom Component to render the Products

  Author : Ramchand.B.R
*/

import { FlatList } from 'react-native';
import React, { useEffect, useState, useLayoutEffect} from 'react';

import { PRODUCT_LIST_URL } from '../../../constants';
import { API } from 'services/apiService';

import RefreshButton from 'common-components/refreshButton/refreshButton';
import BaseView from 'common-components/baseView/baseView';
import ProductListItem from 'common-components/productListItem/productListItem';
import Loader from 'common-components/loader/loader';

const ProductListScreen = ({ navigation }) => {
    const [productList,setProductList] = useState([]);
  

    const fetchProductList = async () => {
        const response = await API.get(PRODUCT_LIST_URL);
        setProductList(response);
    };

    useEffect(() => {
        fetchProductList();
    },[]);

    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => <RefreshButton action={() => fetchProductList()} />
        });
    }, [navigation]);

    const navigationToAddProduct = ({ name, definitionUrl}) => {
        navigation.navigate('Add Product', { 
            productName : name, 
            productUrl : definitionUrl
        });
    };

    return (
        <BaseView>
            { !productList.length && <Loader message={'Fetching Products...'}/>}
            { !!productList.length && 
                <FlatList
                    data={productList}
                    renderItem={({item}) => <ProductListItem title={item.name} action={() => navigationToAddProduct(item)}/> }
                    keyExtractor={item => item.name}
                />
            }
        </BaseView>
    )
}

export default ProductListScreen;


