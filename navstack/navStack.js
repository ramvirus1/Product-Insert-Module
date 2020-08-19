/* 
  Custom Navigation Stack for the Application

  Author : Ramchand.B.R
*/

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProductListScreen from 'core-components/productList/productList';
import ProductAddScreen from 'core-components/productAdd/productAdd';

const Stack = createStackNavigator();

const AppNavStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Product List" component={ProductListScreen} />
        <Stack.Screen name="Add Product" component={ProductAddScreen} />
      </Stack.Navigator>
  );
};

export default AppNavStack;