// import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

import {Provider} from 'react-redux'


import store from './store/store'
import Navigator from './components/Navigation'


export default function App() {

 

  return (
  
          <Provider store={store}>
              <Navigator />
          </Provider>


  )
}




