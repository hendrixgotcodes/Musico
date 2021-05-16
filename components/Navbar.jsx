import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'


import variables from '../utils/variables'

export default function Navbar() {

    const navigation = useNavigation()

    const handleSearchOnPress = ()=>{

       navigation.navigate("Search")

    }
    const handleMenuOnPress =()=>{
        navigation.toggleDrawer()
    }

    return (
        <View style={styles.navBar}>

            <Pressable onPress={handleMenuOnPress}>
                <Ionicons name="menu-outline" color={variables.colors.secondary} size={variables.fonts.size}/>
            </Pressable>

            <Pressable onPress={handleSearchOnPress}>
                <Ionicons name="search-outline" color={variables.colors.secondary} size={variables.fonts.size} />
            </Pressable>


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