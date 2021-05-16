// import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground, StatusBar as RNStatusBar, Platform } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'


import Home from './components/pages/Home';
import Search from './components/pages/Search';
import variables from './utils/variables';
import MusicBar from './components/MusicBar'
import MusicDetail from './components/MusicDetail'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

export default function App() {

  const appTheme = {

      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        primary: variables.colors.secondary,
        card: variables.colors.primary,
        text: "#babbbc"
      }

  }

  return (
  
          <NavigationContainer theme={appTheme}>

            <Drawer.Navigator

                screenOptions={
                {
                  headerShown: false
                }
              }

            >
              <Drawer.Screen name="Home" component={Home} />
              <Drawer.Screen name="Search" component={Search} />
            </Drawer.Navigator>
          
          </NavigationContainer>


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


