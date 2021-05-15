import React from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'
import variables from '../../utils/variables'

export default function Card({title, subTile, imgSrc}) {
    return (
        <View style={styles.container}>

            <Image source={imgSrc} style={styles.img} />

            <View style={styles.infoBox} >
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTile}>{subTile}</Text>
            </View>
            
        </View>
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
    subTile: {
        fontSize: 8,
        color: "white",
    }

})