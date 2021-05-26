import React, {useEffect, useState} from 'react'
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
import {Audio} from 'expo-av'
import Toast from 'react-native-simple-toast'

import variables from '../../utils/variables'
import {songSliceAction, 
        selectSongPlayingState, 
        songSliceActions,
        selectSongRepeatState,
        selectSongFavoriteState,
        selectSongArtsiteState,
        selectSongTitleState,
        selectSongImgSrcState,
        selectSongSrcState,
        selectSoundObject,
} from '../../store/features/songSlice'
// import firebase from '../../services/firebase.js'

Audio.setAudioModeAsync({

    playsInSilentModeIOS : true, 
    allowsRecordingIOS: true, 
    staysActiveInBackground: true,
    interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
    shouldDuckAndroid: true,
    playThroughEarpieceAndroid: true

})
const playbackObject = new Audio.Sound()


export default function Home({navigation}) {


    const dispatch = useDispatch()

    const isSongPlaying = useSelector(selectSongPlayingState)
    const isSongOnRepeat = useSelector(selectSongRepeatState)
    const isFavoriteSong = useSelector(selectSongFavoriteState)
    const songArtiste = useSelector(selectSongArtsiteState)
    const songTitle = useSelector(selectSongTitleState)
    const songImgSrc = useSelector(selectSongImgSrcState)
    const songSrc = useSelector(selectSongSrcState)
    const soundObj = useSelector(selectSoundObject)

    // const [soundObj, setSoundObj] = useState(null)
    const [currentAudio, setCurrentAudio] = useState({})

    useEffect(() => {

                
    }, [])

    const onPlaybackStatusUpdate = (playbackStatus)=>{

        const durationMins = Math.floor(playbackStatus.durationMillis/60000)
        const durationSecs = Math.floor((playbackStatus.durationMillis % 60000)/1000).toFixed(0)
        const duration = {
            secs: durationSecs,
            mins: durationMins,
            mill: playbackStatus.durationMillis
        }

        const positionMins = Math.floor(playbackStatus.positionMillis/60000)
        const positionSecs = Math.floor((playbackStatus.positionMillis % 60000)/1000).toFixed(0)

        const position={
            secs: positionSecs,
            mins: positionMins,
            mill: playbackStatus.positionMillis
        }

         dispatch(songSliceActions.setPosition(position))
         dispatch(songSliceActions.setDuration(duration))

    }

    const handleOnCardPress = (title, subTile, imgSrc, isFavorite, src)=>{


            

            if(soundObj === null ){

                playbackObject.loadAsync(
                    src, 
                    {shouldPlay: true}
                )
                .then((result)=>{

                    playbackObject.setStatusAsync({isLooping: isSongOnRepeat === true ? true : false})
                    .then((result)=>{
                        dispatch(songSliceActions.setSoundObject(result))
                        playbackObject.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate)
                    })
                    
                    dispatch(songSliceActions.playSong())
                    dispatch(songSliceActions.setArtiste(title))
                    dispatch(songSliceActions.setTitle(subTile))
                    dispatch(songSliceActions.setImgSrc(imgSrc))
                    dispatch(songSliceActions.setFavorite(isFavorite))
                    dispatch(songSliceActions.setSongSrc(src))
                })
                .catch((err)=>{

                    Toast.show("Sorry an error occurred while playing song.", Toast.LONG)
                })

            }else if(soundObj !== null)
            {

                if(soundObj.isLoaded && soundObj.isPlaying ===true && songSrc === src){
                    playbackObject.pauseAsync()
                    .then((result)=>{
                        dispatch(songSliceActions.setSoundObject(result))
                        dispatch(songSliceActions.pauseSong())
                        console.log(result);
                        // dispatch(songSliceActions.setSongSrc(src))
                    })
                    .catch((err)=>{
                        Toast.show("Sorry. Failed to play song.")
                        console.log(err);
                    })

                }else if(soundObj.isLoaded && soundObj.isPlaying === false && songSrc === src){

                    playbackObject.playAsync()
                    .then((result)=>{
                        dispatch(songSliceActions.setSoundObject(result))
                        dispatch(songSliceActions.playSong())
                        // dispatch(songSliceActions.setSongSrc(src))
                    })
                    .catch((err)=>{
                        console.log(err);
                    })

                }else if(soundObj.isLoaded && songSrc !== src){

                    playbackObject.stopAsync()
                    .then(()=>{
                        playbackObject.unloadAsync()
                        .then((result)=>{

                            playbackObject.loadAsync(src, {shouldPlay: true}).
                            then((result)=>{

                                playbackObject.setStatusAsync({isLooping: isSongOnRepeat === true ? true : false})
                                .then((result)=>{
                                    dispatch(songSliceActions.setSoundObject(result))
                                })

                                dispatch(songSliceActions.playSong())
                                dispatch(songSliceActions.setArtiste(title))
                                dispatch(songSliceActions.setTitle(subTile))
                                dispatch(songSliceActions.setImgSrc(imgSrc))
                                dispatch(songSliceActions.setFavorite(isFavorite))
                                dispatch(songSliceActions.setSongSrc(src))
                            })
                        })
                    })
                    .catch((err)=>{
                        Toast.show("Sorry an error occurred")
                    })
                }
                
            }

        

        // isSongPlaying === true ? (
        //     dispatch(songSliceActions.pauseSong())
        // ) : (

            

        // )


            

            // Audio.Sound.createAsync(
            //     {ur: src},
            //     {shouldPlay: true}
            // )
            // .then((resolved)=>{
            //     const {sound:playbackObject} = resolved
            // })
            // .catach((err)=>{
            //     console.log(err);
            // })
           
            // dispatch(songSliceActions.set)
        }

    const trending = [
        {
            title: "K.O.D",
            subTile: "J.COle",
            isFavorite: true,
            imgSrc: require("../../assets/img/album_covers/JColeKOD.jpg"),
            src: require("../../assets/music/freshmusic/JCole-KOD.mp3")
        },
        
        {
            title: "Tattoos",
            subTile: "Young Thug",
            isFavorite: true,
            imgSrc: require("../../assets/img/album_covers/Slime_Season_3.jpg"),
            src: require("../../assets/music/freshmusic/Young-Thug-Tattoos.mp3")
        },
        {
            title: "Fall",
            subTile: "Davido",
            isFavorite: true,
            imgSrc: require("../../assets/img/album_covers/agoodtime.jpeg"),
            src: require("../../assets/music/freshmusic/Davido-Fall.mp3")
        },
        {
            title:"Ye",
            subTile: "Burna Boy",
            isFavorite: true,
            imgSrc: require("../../assets/img/album_covers/burna.jpg"),
            src: require("../../assets/music/freshmusic/BurnaBoy-Ye.mp3")
        },
        // {
        //     title:"",
        //     subTile: "",
        //     isFavorite: true,
        //     imgSrc: require("")
        // },
        {
            title:"Ojuelegba",
            subTile: "Wizkid",
            isFavorite: false,
            imgSrc: require("../../assets/img/album_covers/wixkid.jpg"),
            // src: require("../../assets/music/Fresh Music/WIZKID-OJUELEGBA.mp3")
            src: require("../../assets/music/freshmusic/WIZKID-OJUELEGBA.mp3")
        },
        {
            title:"Pain",
            subTile: "Ryan Jones",
            isFavorite: true,
            imgSrc: require("../../assets/img/album_covers/albumcover.jpg"),
            src: require("../../assets/music/freshmusic/RyanJones-Pain.mp3")
        }
    ]

    const freshMusic = [
        {
            title: "Mary",
            subTile: "Sarkodie",
            isFavorite: false,
            imgSrc: require("../../assets/img/album_covers/Sarkodie.jpg"),
            src: require("../../assets/music/freshmusic/Sarkodie-Mary.mp3")
        },
        {
            title: "Eat",
            subTile: "Stoneboy",
            isFavorite: false,
            imgSrc: require("../../assets/img/album_covers/stoneboy.jpg"),
            src: require("../../assets/music/freshmusic/Stoneboy-Eat.mp3")
        },
        {
            title: "Forever",
            subTile: "Gyakie",
            isFavorite: false,
            imgSrc: require("../../assets/img/album_covers/gyakie.jpg"),
            src: require("../../assets/music/freshmusic/Gyakie-Forever.mp3")
        },
        {
            title: "Starboy",
            subTile: "The Weekend",
            isFavorite: false,
            imgSrc: require("../../assets/img/album_covers/theWeekend.jpg"),
            src: require("../../assets/music/freshmusic/TheWeekend-Starboy.mp3")
        },
        {
            title: "Two",
            subTitle: "Lil Uzi Vert",
            isFavorite: false,
            imgSrc: require("../../assets/img/album_covers/liluzi.jpg"),
            src: require("../../assets/music/freshmusic/LilUziVert-Ronda(Winners).mp3")
        },
        
    ]
    
    

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
                                
                                {
                                    trending.map((song, index)=>(
                                    <Card
                                            isFavorite={song.isFavorite}
                                            title={song.title}
                                            subTile={song.subTile}
                                            imgSrc={song.imgSrc}
                                            src={song.src}
                                            key={index}
                                            handleOnCardPress={()=>{
                                                handleOnCardPress(song.title, song.subTile, song.imgSrc, song.isFavorite, song.src)
                                            }}
                                        />
                                    ))
                                }
                                
                                <Card 
                                    title="More" 
                                    subTile="Tap to more"
                                    imgSrc= {require("../../assets/img/album_covers/Playlist.png")}  
                                    handleOnCardPress = {()=>{console.log("hi");}}
                                />

                                

                            </CardContainer>
                            <CardContainer title="Fresh Music">
                                
                                {
                                    freshMusic.map((song, index)=>(
                                        <Card
                                            isFavorite={song.isFavorite}
                                            title={song.title}
                                            subTile={song.subTile}
                                            imgSrc={song.imgSrc}
                                            key={index}
                                            handleOnCardPress={()=>{
                                                handleOnCardPress(song.title, song.subTile, song.imgSrc, song.isFavorite, song.src)
                                            }}
                                        />
                                    ))
                                }

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
