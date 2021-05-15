import React from 'react'
import { Button, SafeAreaView, Text, View, StyleSheet, ScrollView} from 'react-native'
import variables from '../../utils/variables'

import Carousel from '../utils/Carousel.jsx'
import CardContainer from '../utils/CardContainer.jsx'
import Card from '../utils/Card.jsx'

export default function Home() {

    return (
        <View style={styles.home}>
            
            <View>
                <Text style={styles.pageTitle}>Home</Text>
            </View>

            <Carousel imgSrc={require('../../assets/img/home/arnddaglobe.jpg')} btnText={"Search around the globe"} />

            <ScrollView style={styles.center}>

                <CardContainer title="Trending">

                    <Card 
                       
                        title="K.O.D" 
                        subTile="J. Cole"
                        imgSrc= {require("../../assets/img/album_covers/JColeKOD.jpg")}  
                    />
                    <Card 
                       
                        title="Two®" 
                        subTile="Lil Uzi Vert"
                        imgSrc= {require("../../assets/img/album_covers/liluzi.jpg")}  
                    />
                    <Card 
                       
                        title="Fall" 
                        subTile="Davido"
                        imgSrc= {require("../../assets/img/album_covers/agoodtime.jpeg")}  
                    />
                    <Card 
                       
                        title="Ye" 
                        subTile="Burna Boy"
                        imgSrc= {require("../../assets/img/album_covers/burna.jpg")}  
                    />
                    <Card 
                       
                        title="Oluejegba" 
                        subTile="Wizkid"
                        imgSrc= {require("../../assets/img/album_covers/wixkid.jpg")}  
                    />
                    <Card 
                       
                        title="Pain" 
                        subTile="Ryan Jones"
                        imgSrc= {require("../../assets/img/album_covers/albumcover.jpg")}  
                    />
                    <Card 
                       
                        title="More" 
                        subTile="Tap to more"
                        imgSrc= {require("../../assets/img/album_covers/Playlist.png")}  
                    />

                    

                </CardContainer>
                <CardContainer title="Fresh Music">

                    <Card 
                       
                        title="Mary" 
                        subTile="Sarkodie"
                        imgSrc= {require("../../assets/img/album_covers/Sarkodie.jpg")}  
                    />
                    <Card 
                       
                        title="Eat" 
                        subTile="Stoneboy"
                        imgSrc= {require("../../assets/img/album_covers/stoneboy.jpg")}  
                    />
                    <Card 
                       
                        title="K.O.D" 
                        subTile="J. Cole"
                        imgSrc= {require("../../assets/img/album_covers/Emeryld.jpg")}  
                    />
                    <Card 
                       
                        title="Forever" 
                        subTile="Gyakie"
                        imgSrc= {require("../../assets/img/album_covers/gyakie.jpg")}  
                    />
                    <Card 
                       
                        title="Starboy" 
                        subTile="The Weekend"
                        imgSrc= {require("../../assets/img/album_covers/theWeekend.jpg")}  
                    />

                     <Card 
                       
                        title="More" 
                        subTile="Tap to more"
                        imgSrc= {require("../../assets/img/album_covers/Playlist.png")}  
                    />

                    

                </CardContainer>
                <CardContainer title="Suggested Artistes">

                    <Card 
                       
                        title="Shatta Wale" 
                        subTile=""
                        imgSrc= {require("../../assets/img/album_covers/shatta.jpg")}  
                    />
                    <Card 
                       
                        title="Jay Bahd" 
                        subTile=""
                        imgSrc= {require("../../assets/img/album_covers/jaybad.jpg")}  
                    />
                    <Card 
                       
                        title="O'Kenneth" 
                        subTile=""
                        imgSrc= {require("../../assets/img/album_covers/oken.jpg")}  
                    />
                    <Card 
                       
                        title="K.O.D" 
                        subTile="J. Cole"
                        imgSrc= {require("../../assets/img/album_covers/Emeryld.jpg")}  
                    />
                    <Card 
                       
                        title="Wizkid" 
                        subTile=""
                        imgSrc= {require("../../assets/img/album_covers/wixkid.jpg")}  
                    />
                    <Card 
                       
                        title="Travis Scott" 
                        subTile=""
                        imgSrc= {require("../../assets/img/album_covers/stargazing.jpg")}  
                    />

                     <Card 
                       
                        title="More" 
                        subTile="Tap to more"
                        imgSrc= {require("../../assets/img/album_covers/Playlist.png")}  
                    />

                    

                </CardContainer>
               
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({

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
