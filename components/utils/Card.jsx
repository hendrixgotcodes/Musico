import React, {useEffect, useState} from 'react'
import {View, StyleSheet, Image, Text, Pressable} from 'react-native'
import {useDispatch} from 'react-redux'


import variables from '../../utils/variables'
import {songSliceActions} from '../../store/features/songSlice'


export default function Card({title, subTitle, imgSrc, audioSrc, handleOnCardPress="", isFavorite, src=""}) {

    const dispatch = useDispatch()
    




    useEffect(() => {

    //    Audio.setAudioModeAsync({
    //         allowRecordingIOS: true,
    //         interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
    //         playInSilentModeIOS: true,
    //         interruptionModeIOS: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
    //         shouldDuckAndroid: true,
    //         staysActiveInBackground:true
    //     })

       
        
    }, [])

    if(handleOnCardPress === ""){
        
    }


    return (
        <Pressable style={styles.container} onPress={handleOnCardPress}>

            <Image source={imgSrc} style={styles.img} />

            <View style={styles.infoBox} >
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
            
        </Pressable>
    )
}

const styles = StyleSheet.create({

    container: {

        padding: 3,
        borderRadius: 5,
        borderBottomLeftRadius:0,
        borderBottomRightRadius: 0,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
        width: 70,
        height: 100,
        marginRight: 10,
        // shadowColor: "#fff",
        // shadowOffset: {
        //     width: 3,
        //     height: 2
        // },
        // shadowRadius: 5,
        // elevation: 5
    },
    img:{
        // alignSelf: "center",
        width: "90%",
        height: "65%",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        margin: "auto"
    },
    infoBox: {
        width: "100%",
        height: "35%",
        paddingVertical: 5
        // backgroundColor: "black"
    },
    title: {

        color: "white",
        fontSize: 11,
        fontWeight: "bold"

    },
    subTitle: {
        fontSize: 8,
        color: "white",
    }

})