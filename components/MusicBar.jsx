import React from 'react'
import {View, StyleSheet, Text, Image, Pressable} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {useSelector, useDispatch} from 'react-redux'
import { selectPosition,
    selectDuration
} from '../store/features/songSlice' 

import variables from '../utils/variables'



export default function MusicBar({imgSrc,title, subTile, isSongPlaying, onPressHandle, playOnPressHandle}) {

    const songPosition = useSelector(selectPosition)
    const songDuration = useSelector(selectDuration)

    return (
        <Pressable 
            style={[styles.container, {bottom: isSongPlaying === true ? 0 : "-100%"}]}
            onPress={onPressHandle}
        >
            
            <View style={[styles.loader, {width: `${songPosition.mill/songDuration.mill}%`}]} />

            <View style={styles.itemDetails}>

                <Image 
                    source={imgSrc === "" ? require('../assets/avatars/illus_stereo.png') : imgSrc} 
                    style={styles.img}
                />
                <View>
                    <Text style={styles.title} >{title}</Text>
                    <Text style={styles.subTile}>{subTile}</Text>
                </View>

            </View>

            <Pressable onPress={playOnPressHandle}>
                <Ionicons 
                    name= {isSongPlaying === true ? "pause-circle-outline" : "play-circle-outline" }
                    size={variables.fonts.size} 
                    color="white"  
                />
            </Pressable>

        </Pressable>
    )
}

const styles = StyleSheet.create({

    container: {
        position: "absolute",
        bottom: 0,
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
        alignItems: "center",
        height: "100%"
    },
    img:{
        width: 40,
        height: "100%",
        borderRadius: 4,
        marginRight: 10,
        resizeMode: "contain"
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