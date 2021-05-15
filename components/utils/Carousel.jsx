import React from 'react'
import {ImageBackground, View, StyleSheet, Text, TouchableHighlight} from 'react-native'
import variables from '../../utils/variables'

export default function Carousel({imgSrc, btnText}) {
    return (
        <View style={styles.container}>

            <ImageBackground source={imgSrc} style={styles.img}>

                <View style={styles.dimmer} />

                <TouchableHighlight style={styles.btn} >
                    <Text style={styles.btnText}>{btnText}</Text>
                </TouchableHighlight>

            </ImageBackground>
            
            
        </View>
    )
}

const styles = StyleSheet.create({

    container: {

        borderColor: variables.colors.primary_lighter,
        width: "100%",
        height: "20%",
        borderTopWidth: 5,
        borderBottomWidth: 10,
        position: "relative"

    },
    dimmer:{
        width: "100%",
        height: "100%",
        backgroundColor: variables.colors.primary,
        opacity: 0.6,
        position: "absolute",
        top: 0,
        left: 0
    },
    img: {

        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex"

    },
    btn:{

        paddingHorizontal: 7,
        paddingVertical: 5,
        backgroundColor: variables.colors.secondary,
        // width: "10%",
        alignSelf: "center",
        color: "#fff",
        borderRadius: 3

    },
    btnText: {
        color: "#fff",
        fontSize: 15,
    }

})
