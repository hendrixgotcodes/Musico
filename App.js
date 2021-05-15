import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground, StatusBar as RNStatusBar, Platform } from 'react-native';
import Home from './components/pages/Home';
import Navbar from './components/Navbar'

import {LinearGradient} from 'expo-linear-gradient'
import variables from './utils/variables';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import MusicBar from './components/MusicBar'
import MusicDetail from './components/MusicDetail'

export default function App() {


  return (
    
    <SafeAreaView
      // colors={["rgb(61,68,78)", "rgb(12,14,16)"]} 
      style={styles.container}
      >
        <LinearGradient colors={[variables.colors.primary ,variables.colors.primary_darker]}>

          {/* <Navbar />
          <Home />
          <StatusBar  style="auto" />
          <MusicBar /> */}

          <MusicDetail />

        </LinearGradient>


        {/* <ItemDetail /> */}

        
    </SafeAreaView>


  )
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: variables.colors.primary,
    width: "100%",
    height: "100%",
    paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0
  },
  LinearG:{
      width: "100%",
      height: "100%",
      display: "flex",
      /*?flexDirection: "row"*/
      alignItems: 'center',
      justifyContent: 'space-between',
      position: "relative"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%"
  },
  statusBarStyle: {
    backgroundColor: '#000'
  }
});


