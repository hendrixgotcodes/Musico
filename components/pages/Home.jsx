import React, {useEffect} from 'react'
import { Button, 
        SafeAreaView, 
        Text, 
        View, 
        StyleSheet, 
        ScrollView, 
        Platform, 
        StatusBar} 
from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import {useSelector, useDispatch} from 'react-redux'

import Carousel from '../utils/Carousel.jsx'
import CardContainer from '../utils/CardContainer.jsx'
import Card from '../utils/Card.jsx'
import Navbar from '../../components/Navbar'
import MusicBar from '../MusicBar'

import variables from '../../utils/variables'
import {songSliceAction, 
        selectSongPlayingState, 
        songSliceActions,
        selectSongRepeatState,
        selectSongFavoriteState,
        selectSongArtsiteState,
        selectSongTitleState,
        selectSongImgSrcState
} from '../../store/features/songSlice'
// import firebase from '../../services/firebase.js'



export default function Home({navigation}) {


    const dispatch = useDispatch()

    const isSongPlaying = useSelector(selectSongPlayingState)
    const isSongOnRepeat = useSelector(selectSongRepeatState)
    const isFavoriteSong = useSelector(selectSongFavoriteState)
    const songArtiste = useSelector(selectSongArtsiteState)
    const songTitle = useSelector(selectSongTitleState)
    const songImgSrc = useSelector(selectSongImgSrcState)

    useEffect(() => {

                
    }, [])

    
    

    return (

        <SafeAreaView
            // colors={["rgb(61,68,78)", "rgb(12,14,16)"]} 
            style={styles.safeAreaView}
            >
                <LinearGradient colors={[variables.colors.primary ,variables.colors.primary_darker]}>

                    <View style={styles.home}>

                        <Navbar />
                        
                        <View>
                            <Text style={styles.pageTitle}>Home</Text>
                        </View>

                        <Carousel imgSrc={require('../../assets/img/home/arnddaglobe.jpg')} btnText={"Search around the globe"} />

                        <ScrollView style={styles.center}>

                            <CardContainer title="Trending">

                                <Card 
                                    isFavorite = {true}
                                    title="K.O.D" 
                                    subTile="J. Cole"
                                    imgSrc= {require("../../assets/img/album_covers/JColeKOD.jpg")}  
                                />
                                <Card 
                                    isFavorite = {false}
                                    title="Two®" 
                                    subTile="Lil Uzi Vert"
                                    imgSrc= {require("../../assets/img/album_covers/liluzi.jpg")}  
                                />
                                <Card 
                                    isFavorite = {true}
                                    title="Fall" 
                                    subTile="Davido"
                                    imgSrc= {require("../../assets/img/album_covers/agoodtime.jpeg")}  
                                />
                                <Card 
                                    isFavorite = {true}
                                    title="Ye" 
                                    subTile="Burna Boy"
                                    imgSrc= {require("../../assets/img/album_covers/burna.jpg")}  
                                />
                                <Card 
                                    isFavorite = {false}
                                    title="Oluejegba" 
                                    subTile="Wizkid"
                                    imgSrc= {require("../../assets/img/album_covers/wixkid.jpg")}  
                                />
                                <Card 
                                    isFavorite = {true}
                                    title="Pain" 
                                    subTile="Ryan Jones"
                                    imgSrc= {require("../../assets/img/album_covers/albumcover.jpg")}  
                                />
                                <Card 
                                    title="More" 
                                    subTile="Tap to more"
                                    imgSrc= {require("../../assets/img/album_covers/Playlist.png")}  
                                    handleOnCardPress = {()=>{console.log("hi");}}
                                />

                                

                            </CardContainer>
                            <CardContainer title="Fresh Music">

                                <Card 
                                    isFavorite = {false}
                                    title="Mary" 
                                    subTile="Sarkodie"
                                    imgSrc= {require("../../assets/img/album_covers/Sarkodie.jpg")}  
                                />
                                <Card 
                                    isFavorite = {false}
                                    title="Eat" 
                                    subTile="Stoneboy"
                                    imgSrc= {require("../../assets/img/album_covers/stoneboy.jpg")}  
                                />
                                <Card 
                                    isFavorite = {false}
                                    title="K.O.D" 
                                    subTile="J. Cole"
                                    imgSrc= {require("../../assets/img/album_covers/Emeryld.jpg")}  
                                />
                                <Card 
                                    isFavorite = {false}
                                    title="Forever" 
                                    subTile="Gyakie"
                                    imgSrc= {require("../../assets/img/album_covers/gyakie.jpg")}  
                                />
                                <Card 
                                    isFavorite = {false}
                                    title="Starboy" 
                                    subTile="The Weekend"
                                    imgSrc= {require("../../assets/img/album_covers/theWeekend.jpg")}  
                                />

                                <Card 
                                    title="More" 
                                    subTile="Tap to more"
                                    imgSrc= {require("../../assets/img/album_covers/Playlist.png")}  
                                    handleOnCardPress = {()=>{console.log("hi");}}
                                />

                                

                            </CardContainer>
                            <CardContainer title="Suggested Artistes">

                                <Card 
                                    isFavorite = {true}
                                    title="Shatta Wale" 
                                    subTile=""
                                    imgSrc= {require("../../assets/img/album_covers/shatta.jpg")}  
                                />
                                <Card 
                                    isFavorite = {false}
                                    title="Jay Bahd" 
                                    subTile=""
                                    imgSrc= {require("../../assets/img/album_covers/jaybad.jpg")}  
                                />
                                <Card 
                                    isFavorite = {true}
                                    title="O'Kenneth" 
                                    subTile=""
                                    imgSrc= {require("../../assets/img/album_covers/oken.jpg")}  
                                />
                                <Card 
                                
                                    title="K.O.D" 
                                    subTile="J. Cole"
                                    isFavorite = {false}
                                    imgSrc= {require("../../assets/img/album_covers/Emeryld.jpg")}  
                                />
                                <Card 
                                
                                    title="Wizkid" 
                                    subTile=""
                                    isFavorite = {false}
                                    imgSrc= {require("../../assets/img/album_covers/wixkid.jpg")}  
                                />
                                <Card 
                                
                                    title="Travis Scott" 
                                    subTile=""
                                    isFavorite = {true}
                                    imgSrc= {require("../../assets/img/album_covers/stargazing.jpg")}  
                                />

                                <Card 
                                
                                    title="More" 
                                    subTile="Tap to more"
                                    imgSrc= {require("../../assets/img/album_covers/Playlist.png")}  
                                    handleOnCardPress = {()=>{console.log("hi");}}
                                />

                                

                            </CardContainer>
                        
                        </ScrollView>

                        <MusicBar 
                            imgSrc={songImgSrc}
                            title= {songArtiste}
                            subTile= {songTitle}
                            isSongPlaying = {isSongPlaying}
                            onPressHandle={()=>{
                                navigation.navigate("MusicDetail")
                            }}
                            playOnPressHandle={()=>{
                                isSongPlaying === true ? (
                                    dispatch(songSliceActions.pauseSong())
                                ) : (
                                    dispatch(songSliceActions.playSong())
                                )
                            }}
                        />

                    </View>
                </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaView:{
        backgroundColor: variables.colors.primary,
        width: "100%",
        height: "100%",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    home:{
        width: "100%",
        height: "100%",
    },
    pageTitle:{
        paddingVertical: 20,
        textAlign: "center",
        fontSize: variables.fonts.size,
        color: variables.colors.secondary,
        paddingHorizontal: variables.padding.horizontal

    },
    center: {
        paddingHorizontal: variables.padding.horizontal
    }

})
