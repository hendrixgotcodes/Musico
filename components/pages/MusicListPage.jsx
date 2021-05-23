import React from 'react'
import {View, StyleSheet, Text, Pressable, SafeAreaView, Platform, StatusBar} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'

import variables from '../../utils/variables'
import Navbar from '../../components/Navbar'



export default function MusicListView() {
    return (
        <SafeAreaView style={styles.safeAreaView}>

            <LinearGradient 
                colors={[variables.colors.primary ,variables.colors.primary_darker]}
                style={styles.container}
            >

                <Navbar />

            </LinearGradient>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    safeAreaView:{
        backgroundColor: variables.colors.primary,
        width: "100%",
        height: "100%",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    container:{
        width: "100%",
        height: "100%",
    }

})