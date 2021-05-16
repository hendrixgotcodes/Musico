import React, { useState } from 'react'
import { View, StyleSheet, Pressable, Image, Text, Share } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Slider from '@react-native-community/slider'

import { Ionicons } from '@expo/vector-icons'
import variables from '../utils/variables'


export default function ItemDetail() {

    const [play, setPlayedState] = useState(false)
    const [favorite, setFavorite] = useState(false)
    const [repeat, setRepeat] = useState(false)

    const playPauseSong = () => {

        // const newSong = song;
        // newSong.playing = newSong.playing === true ? false : true
        // setSong(newSong)
        if (play === true) {
            setPlayedState(false)
        } else {
            setPlayedState(true)
        }

    }
    const repeatSong = () => {

        // const newSong = song;
        // newSong.playing = newSong.playing === true ? false : true
        // setSong(newSong)
        if (repeat === true) {
            setRepeat(false)
        } else {
            setRepeat(true)
        }

    }
    const favoriteSong = () => {

        // const newSong = song;
        // newSong.playing = newSong.playing === true ? false : true
        // setSong(newSong)
        if (favorite === true) {
            setFavorite(false)
        } else {
            setFavorite(true)
        }

    }


    const shareSong = async () => {

        try {

            const result = await Share.share({
                title: "Link to song",
                message: "this is a link",
            })

            if (result.action === Share.sharedAction) {

                if (result.activityType) {
                    console.log(result.activityType);
                }
                else {
                    console.log(result);
                }

            } else if (result.action === Share.dismissedAction) {
                console.log("dimissed");
            }

        } catch (error) {

            console.log(error);

        }

    }


    return (


        <View style={styles.container}>

            <View style={styles.header}>

                <Pressable>
                    <Ionicons
                        name="chevron-down-outline"
                        color="#fff"
                        size={variables.fonts.size}
                    />
                </Pressable>

            </View>

            <Image
                source={require("../assets/img/album_covers/albumcover.jpg")}
                style={styles.img}
            />

            <View style={styles.info}>

                <Text style={styles.title}>Ryan Jones</Text>
                <Text style={styles.subTile} >PAIN</Text>


            </View>

            <View style={styles.social}>

                <Pressable
                    style={[styles.socialItem]}
                    onPress={favoriteSong}
                >
                    <Ionicons
                        name="heart"
                        color={favorite === false ? "#fff" : variables.colors.secondary}
                        size={20}
                    />
                    <Text style={{ color: "#fff", fontSize: 14 }}>Favorite</Text>
                </Pressable>

                <Pressable
                    style={styles.socialItem}
                    onPress={repeatSong}
                >
                    <Ionicons
                        name="repeat"
                        color={repeat === false ? "#fff" : variables.colors.secondary}
                        size={20}
                    />
                    <Text style={{ color: "#fff", fontSize: 14 }}>Repeat</Text>
                </Pressable>

                <Pressable
                    style={styles.socialItem}
                    onPress={shareSong}
                >
                    <Ionicons
                        name="share-social"
                        color="#fff"
                        size={20}
                    />
                    <Text style={{ color: "#fff", fontSize: 14 }}>Share</Text>
                </Pressable>


            </View>

            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor={variables.colors.secondary}
                maximumTrackTintColor={variables.colors.secondary}
                thumbTintColor={"#fff"}
            />

            <View style={styles.valuesWrapper}>
                <Text style={styles.minimumValueCounter} >1:0</Text>
                <Text style={styles.maximumValueCounter} >2:30</Text>
            </View>

            <View style={styles.controlBox}>

                <Ionicons
                    name="play-skip-back"
                    size={20}
                    style={styles.controlBoxItem}
                />

                <Pressable onPress={setPlayedState}>
                    <Ionicons
                        name={play === false ? "play-circle-outline" : "pause-circle-outline"}
                        size={64}
                        style={styles.controlBoxItem}
                    />
                </Pressable>

                <Ionicons
                    name="play-skip-forward"
                    size={20}
                    style={styles.controlBoxItem}
                />

            </View>


        </View>



    )
}

const styles = StyleSheet.create({

    container: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    img: {

        width: "100%",
        height: "50%",
        borderRadius: 5,
        marginTop: 20

    },
    info: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        marginVertical: "5%"
    },
    title: {
        fontSize: 17,
        textAlign: "center",
        color: "white"
    },
    subTile: {
        fontSize: 27,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    },
    social: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: "1%",
        width: "100%",
        paddingHorizontal: "5%"
    },
    socialItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    slider: {
        width: "100%",
        // height: "10%",
        borderRadius: 3
    },
    valuesWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 17
    },
    minimumValueCounter: {
        fontSize: 12,
        color: "white"
    },
    maximumValueCounter: {
        fontSize: 12,
        color: "white"
    },
    controlBox: {
        width: "100%",
        paddingHorizontal: 100,
        marginVertical: "1%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    controlBoxItem: {
        color: "#fff",

    }

})
