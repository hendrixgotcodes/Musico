import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'
import variables from '../utils/variables'

import {Ionicons} from '@expo/vector-icons'

export default function MusicBar({imgSrc}) {
    return (
        <View 
            style={styles.container}
        >
            
            <View style={styles.loader} />

            <View style={styles.itemDetails}>

                <Image 
                    source={require('../assets/img/album_covers/jcole.jpg')} 
                    style={styles.img}
                />
                <View>
                    <Text style={styles.title} >J. Cole</Text>
                    <Text style={styles.subTile}>She's mine</Text>
                </View>

            </View>

            <Ionicons 
                name="play-circle-outline" 
                size={variables.fonts.size} 
                color="white"  
            />

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        position: "absolute",
        bottom: 45,
        left: 0,
        width: "100%",
        height: "8%",
        backgroundColor: variables.colors.primary,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    loader: {
        width: "32%",
        height: "5%",
        backgroundColor: variables.colors.secondary,
        position: "absolute",
        top: 0,
        left: 0
    },
    itemDetails:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    img:{
        width: 40,
        height: "100%",
        borderRadius: 4,
        backgroundColor: "red"
    },
    title:{
        fontSize: 13,
        color: "white"
    },
    subTile:{
        fontWeight: "bold",
        color: "white"
    }

})