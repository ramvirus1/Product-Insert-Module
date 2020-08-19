/* 
  BootStrapping of the Application 
  Application is wrapped in ErrorBoundary to catch JS Errors,with a FallBack component provided
  NavigationContainer is wrapped in the next level to contain the Navigation Stacks of the Application
  SafeAreaView to contain the application view within Safe Boundary limits within a device
  AppNavStack - Custom Navigation stack for the application which contains different views

  Author : Ramchand.B.R
*/

import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppNavStack from './navstack/navStack';
import ErrorBoundary from 'react-native-error-boundary'

import ErrorScreen from 'common-components/errorScreen/errorScreen';

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorScreen}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}> 
          <AppNavStack />
        </SafeAreaView>
      </NavigationContainer>
    </ErrorBoundary>
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
