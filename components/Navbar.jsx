import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import variables from '../utils/variables'

export default function Navbar() {

    console.log(Platform.OS, "ok");


    return (
        <View style={styles.navBar}>

            <Ionicons name="menu-outline" color={variables.colors.secondary} size={variables.fonts.size}/>

            <Ionicons name="search-outline" color={variables.colors.secondary} size={variables.fonts.size} />


        </View>
    )
}

const styles = StyleSheet.create({
    navBar: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
        padding: variables.padding.horizontal
    }
})