import React from 'react'
import { View, Text,Modal as RNModal, StyleSheet, ActivityIndicator } from 'react-native'

import variables from '../../utils/variables'


export default function Modal({children, shown=false, text}) {
    return (
        <View style={shown === true ? styles.container : [styles.container, {top: "-100%"}]}>
            
            <View
                style={styles.modal}
            >
                <ActivityIndicator size="small" color={variables.colors.secondary} />
                <Text style={{textAlign: "center", color:variables.colors.primary}}>{text}</Text>
            </View>
            <View style={styles.shade} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 2
    },
    shade: {
        width: "100%",
        height: "100%",
        opacity: 0.6,
        // backgroundColor: variables.colors.primary,
        backgroundColor: "#000",
        position: "absolute",
        top: 0,
        left: 0
    },
    modal:{
        // width: 70,
        // height: 70,
        padding: 15,
        backgroundColor: "#fff",
        alignSelf: "center",
        zIndex: 2,
        borderRadius: 3
    }
})
