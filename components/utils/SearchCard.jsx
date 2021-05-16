import React from 'react'
import {View, StyleSheet, Text, Image,Pressable} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

import variables from '../../utils/variables'

export default function SearchCard({imgSrc, artiste, title, plays, favorites}) {
    return (
        <Pressable style={styles.container}>

            <Image source={imgSrc} style={styles.img} />
            <View style={styles.songDetailsWrapper}>

                <View style={styles.songWrapper}>
                    <Text style={{fontWeight:"bold", color: "#fff"}}>{artiste}</Text>
                    <Text style={{fontSize: 12, color: "#fff"}}>{title}</Text>
                </View>
                <View style={styles.statsWrapper}>
                    <View style={styles.icWrapper}>
                        <Ionicons name="play" color={variables.colors.secondary} /> 
                        <Text style={{fontSize: 10, color: "#fff"}} >{plays}</Text>
                    </View>
                    <View style={[styles.icWrapper, {marginLeft: 5}]}>
                        <Ionicons name="heart" color={variables.colors.secondary} /> 
                        <Text style={{fontSize: 10, color: "#fff"}}>{favorites}</Text>
                    </View>
                </View>

            </View>

            <View style={styles.rule} />
            
        </Pressable>
    )
}

const styles = StyleSheet.create({

    container: {
        width: "100%",
        height: 60,
        display: "flex",
        flexDirection: "row",
        margin: 10,
        position: "relative"
    },
    img: {
        width: "15%",
        height: "100%",
        marginRight: 5,
    },
    songDetailsWrapper: {
        display: "flex",
        flexDirection: "column"
    },
    statsWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 8
    },
    icWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    rule: {
        backgroundColor: "#3E464F",
        width: "100%",
        position: "absolute",
        height: 2,
        bottom: -8
    }

})