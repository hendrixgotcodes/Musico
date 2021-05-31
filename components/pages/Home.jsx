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
import Toast from 'react-native-simple-toast'


import Carousel from '../utils/Carousel.jsx'
import CardContainer from '../utils/CardContainer.jsx'
import Card from '../utils/Card.jsx'
import Navbar from '../../components/Navbar'
import MusicBar from '../MusicBar'
import playbackObject from '../../providers/AudioProvider'

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
        selectSongIndex,
        selectSongPlaylist,
} from '../../store/features/songSlice'



export default function Home({navigation, route}) {


    const dispatch = useDispatch()
    const isSongPlaying = useSelector(selectSongPlayingState)
    const isSongOnRepeat = useSelector(selectSongRepeatState)
    const isFavoriteSong = useSelector(selectSongFavoriteState)
    const songArtiste = useSelector(selectSongArtsiteState)
    const songTitle = useSelector(selectSongTitleState)
    const songImgSrc = useSelector(selectSongImgSrcState)
    const songSrc = useSelector(selectSongSrcState)
    const soundObj = useSelector(selectSoundObject)
    // const songIndex = useSelector(selectSongIndex)
    const songPlaylist = useSelector(selectSongPlaylist)

    const [currentAudio, setCurrentAudio] = useState({})
    const [songIndex, setSongIndex] = useState(4)

    useEffect(() => {

                
    }, [])

    const onPlaybackStatusUpdate = (playbackStatus)=>{

        if(playbackStatus.didJustFinish){
            
                playbackObject.stopAsync()
                .then((result)=>{
                    dispatch(songSliceActions.setSoundObject(result))
                    dispatch(songSliceActions.pauseSong())

                    if(isSongOnRepeat ===true){
                        playbackObject.playAsync()
                        .then((result)=>{
                            dispatch(songSliceActions.setSoundObject(result))
                            dispatch(songSliceActions.playSong())
                        })
                    }
                    else{
                        const playlist = songPlaylist == "trending" ? trending : freshMusic
                        const song = playlist[songIndex+1]

                        playbackObject.unloadAsync()
                        .then(()=>{
                            dispatch(songSliceActions.setSoundObject(result))

                            // handleOnCardPress(song.title, song.subTitle, song.imgSrc, song.src, 5, "trending")
                        })


                        

                    }
                })
            // if(isSongOnRepeat==false){
            // }
            // else if(isSongOnRepeat==true){
            //     console.log("yes");
            //     playbackObject.playAsync()
            //     .then((result)=>{
            //         dispatch(songSliceActions.setSoundObject(result))
            //         dispatch(songSliceActions.playSong())
            //     })
            // }
        }
        else{
            const positionMins = Math.floor(playbackStatus.positionMillis/60000)
            let positionSecs = Math.floor((playbackStatus.positionMillis % 60000)/1000).toFixed(0)
            positionSecs = positionSecs < 10 ? positionSecs + "0" : positionSecs 
            
            console.log((typeof positionSecs), (typeof positionMins), typeof positionMillis);

            const position={
                secs: positionSecs,
                mins: positionMins,
                mill: playbackStatus.positionMillis
            }

            dispatch(songSliceActions.setPosition(position))
        }

    }

    const handleOnCardPress = (title, subTitle, imgSrc, isFavorite, src, index, playlist)=>{

            // const list = playlist == "trending" ? trending : freshMusic
            // console.log(list[index]);
            

            if(soundObj === null ){

                playbackObject.loadAsync(
                    src, 
                    {shouldPlay: true}
                )
                .then((result)=>{

                    dispatch(songSliceActions.setSoundObject(result))

                    const durationMins = Math.floor(result.durationMillis/60000)
                    let durationSecs = Math.floor((result.durationMillis % 60000)/1000).toFixed(0)

                    durationSecs = durationSecs < 10 ? durationSecs + "0" : durationSecs 

                    const duration = {
                        secs: durationSecs,
                        mins: durationMins,
                        mill: result.durationMillis
                    }

                    dispatch(songSliceActions.setDuration(duration))


                    playbackObject.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate)
                    
                    dispatch(songSliceActions.playSong())
                    dispatch(songSliceActions.setIndex(index))
                    setSongIndex(index)
                    dispatch(songSliceActions.setArtiste(title))
                    dispatch(songSliceActions.setTitle(subTitle))
                    dispatch(songSliceActions.setImgSrc(imgSrc))
                    dispatch(songSliceActions.setFavorite(isFavorite))
                    dispatch(songSliceActions.setSongSrc(src))
                    dispatch(songSliceActions.setSongPlaylist(playlist))
                })
                .catch((err)=>{

                    console.log(err);

                    Toast.show("Sorry an error occurred while playing song.", Toast.LONG)
                })

            }else if(soundObj !== null)
            {

                if(soundObj.isLoaded && soundObj.isPlaying ===true && songSrc === src){
                    playbackObject.pauseAsync()
                    .then((result)=>{
                        dispatch(songSliceActions.setSoundObject(result))
                        dispatch(songSliceActions.pauseSong())
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

                                const durationMins = Math.floor(result.durationMillis/60000)
                                let durationSecs = Math.floor((result.durationMillis % 60000)/1000).toFixed(0)
                                
                                durationSecs = durationSecs < 10 ? durationSecs + "0" : durationSecs 
                                console.log(durationSecs);

                                const duration = {
                                    secs: durationSecs,
                                    mins: durationMins,
                                    mill: result.durationMillis
                                }

                                dispatch(songSliceActions.setDuration(duration))

                                dispatch(songSliceActions.setSoundObject(result))

                                dispatch(songSliceActions.playSong())
                                dispatch(songSliceActions.setArtiste(title))
                                dispatch(songSliceActions.setTitle(subTitle))
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
            subTitle: "J.COle",
            isFavorite: true,
            imgSrc: require("../../assets/img/album_covers/JColeKOD.jpg"),
            src: require("../../assets/music/freshmusic/JCole-KOD.mp3")
        },
        
        {
            title: "Tattoos",
            subTitle: "Young Thug",
            isFavorite: true,
            imgSrc: require("../../assets/img/album_covers/Slime_Season_3.jpg"),
            src: require("../../assets/music/freshmusic/Young-Thug-Tattoos.mp3")
        },
        {
            title: "Problem",
            subTitle: "Young Thug",
            isFavorite: true,
            imgSrc: require("../../assets/img/album_covers/Slime_Season_3.jpg"),
            src: require("../../assets/music/freshmusic/Young-Thug-Problem.mp3")
        },
        {
            title: "Fall",
            subTitle: "Davido",
            isFavorite: true,
            imgSrc: require("../../assets/img/album_covers/agoodtime.jpeg"),
            src: require("../../assets/music/freshmusic/Davido-Fall.mp3")
        },
        {
            title:"Ye",
            subTitle: "Burna Boy",
            isFavorite: true,
            imgSrc: require("../../assets/img/album_covers/burna.jpg"),
            src: require("../../assets/music/freshmusic/BurnaBoy-Ye.mp3")
        },
        {
            title: "Die Today",
            subTitle: "Lil Uzi Vert",
            isFavorite: false,
            imgSrc: require("../../assets/img/album_covers/liluzi.jpg"),
            src: require("../../assets/music/freshmusic/Die-Today.mp3")
        },
        // {
        //     title:"",
        //     subTitle: "",
        //     isFavorite: true,
        //     imgSrc: require("")
        // },
        {
            title:"Ojuelegba",
            subTitle: "Wizkid",
            isFavorite: false,
            imgSrc: require("../../assets/img/album_covers/wixkid.jpg"),
            // src: require("../../assets/music/Fresh Music/WIZKID-OJUELEGBA.mp3")
            src: require("../../assets/music/freshmusic/WIZKID-OJUELEGBA.mp3")
        },
        {
            title:"Pain",
            subTitle: "Ryan Jones",
            isFavorite: true,
            imgSrc: require("../../assets/img/album_covers/albumcover.jpg"),
            src: require("../../assets/music/freshmusic/RyanJones-Pain.mp3")
        }
    ]

    const freshMusic = [
        {
            title: "Mary",
            subTitle: "Sarkodie",
            isFavorite: false,
            imgSrc: require("../../assets/img/album_covers/Sarkodie.jpg"),
            src: require("../../assets/music/freshmusic/Sarkodie-Mary.mp3")
        },
        {
            title: "Eat",
            subTitle: "Stoneboy",
            isFavorite: false,
            imgSrc: require("../../assets/img/album_covers/stoneboy.jpg"),
            src: require("../../assets/music/freshmusic/Stoneboy-Eat.mp3")
        },
        {
            title: "Forever",
            subTitle: "Gyakie",
            isFavorite: false,
            imgSrc: require("../../assets/img/album_covers/gyakie.jpg"),
            src: require("../../assets/music/freshmusic/Gyakie-Forever.mp3")
        },
        {
            title: "Starboy",
            subTitle: "The Weekend",
            isFavorite: false,
            imgSrc: require("../../assets/img/album_covers/theWeekend.jpg"),
            src: require("../../assets/music/freshmusic/TheWeekend-Starboy.mp3")
        },
        {
            title: "Sauce",
            subTitle: "Lil Uzi ft Playboi Carti",
            isFavorite: false,
            imgSrc: require("../../assets/img/album_covers/liluziPlayboi.jpg"),
            src: require("../../assets/music/freshmusic/Lil-Uzi-Vert-Sauce-Real-Hard.mp3")
        },
        {
            title: "Ronda (Winners)",
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
                                            subTitle={song.subTitle}
                                            imgSrc={song.imgSrc}
                                            src={song.src}
                                            key={index}
                                            handleOnCardPress={()=>{
                                                handleOnCardPress(song.title, song.subTitle, song.imgSrc, song.isFavorite, song.src, index, "trending")
                                            }}
                                        />
                                    ))
                                }
                                
                                <Card 
                                    title="More" 
                                    subTitle="Tap to more"
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
                                            subTitle={song.subTitle}
                                            imgSrc={song.imgSrc}
                                            key={index}
                                            handleOnCardPress={()=>{
                                                handleOnCardPress(song.title, song.subTitle, song.imgSrc, song.isFavorite, song.src, index, "freshMusic")
                                            }}
                                        />
                                    ))
                                }

                                <Card 
                                    title="More" 
                                    subTitle="Tap to more"
                                    imgSrc= {require("../../assets/img/album_covers/Playlist.png")}  
                                    handleOnCardPress = {()=>{console.log("hi");}}
                                />

                                

                            </CardContainer>
                            <CardContainer title="Suggested Artistes">

                                <Card 
                                    isFavorite = {true}
                                    title="Shatta Wale" 
                                    subTitle=""
                                    imgSrc= {require("../../assets/img/album_covers/shatta.jpg")}  
                                />
                                <Card 
                                    isFavorite = {false}
                                    title="Jay Bahd" 
                                    subTitle=""
                                    imgSrc= {require("../../assets/img/album_covers/jaybad.jpg")}  
                                />
                                <Card 
                                    isFavorite = {true}
                                    title="O'Kenneth" 
                                    subTitle=""
                                    imgSrc= {require("../../assets/img/album_covers/oken.jpg")}  
                                />
                                <Card 
                                
                                    title="K.O.D" 
                                    subTitle="J. Cole"
                                    isFavorite = {false}
                                    imgSrc= {require("../../assets/img/album_covers/Emeryld.jpg")}  
                                />
                                <Card 
                                
                                    title="Wizkid" 
                                    subTitle=""
                                    isFavorite = {false}
                                    imgSrc= {require("../../assets/img/album_covers/wixkid.jpg")}  
                                />
                                <Card 
                                
                                    title="Travis Scott" 
                                    subTitle=""
                                    isFavorite = {true}
                                    imgSrc= {require("../../assets/img/album_covers/stargazing.jpg")}  
                                />

                                <Card 
                                
                                    title="More" 
                                    subTitle="Tap to more"
                                    imgSrc= {require("../../assets/img/album_covers/Playlist.png")}  
                                    handleOnCardPress = {()=>{console.log("hi");}}
                                />

                                

                            </CardContainer>
                        
                        </ScrollView>

                        <MusicBar 
                            imgSrc={songImgSrc}
                            title= {songArtiste}
                            subTitle= {songTitle}
                            isSongPlaying = {isSongPlaying}
                            onPressHandle={()=>{
                                navigation.navigate("MusicDetail")
                            }}
                            playOnPressHandle={()=>{
                                if(soundObj.isLoaded && soundObj.isPlaying){
                                    playbackObject.pauseAsync()
                                    .then((result)=>{
                                        dispatch(songSliceActions.setSoundObject(result))
                                        dispatch(songSliceActions.pauseSong())
                                    })
                                }else if(soundObj.isLoaded && soundObj.isPlaying === false){
                                    playbackObject.playAsync()
                                    .then((result)=>{
                                        dispatch(songSliceActions.setSoundObject(result))
                                        dispatch(songSliceActions.playSong())
                                    })
                                }
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
