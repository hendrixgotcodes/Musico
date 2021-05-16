import React from 'react'
import {View, TextInput, StyleSheet, Text, ScrollView, SafeAreaView, StatusBar, Platform, Pressable} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import variables from '../../utils/variables'
import SearchCard from '../utils/SearchCard'
import { LinearGradient } from 'expo-linear-gradient'

export default function Search({navigation}) {

    const handleCloseOnPress = ()=>{

        navigation.navigate("Home")

    }

    const handleMenuOnPress = ()=>{

        navigation.toggleDrawer()

    }

    return (

        <SafeAreaView
            // colors={["rgb(61,68,78)", "rgb(12,14,16)"]} 
            style={styles.safeAreaView}
            >
                <LinearGradient colors={[variables.colors.primary ,variables.colors.primary_darker]}>

                    <View style={styles.container}>

                        <View style={styles.navBar}>

                            <Pressable onPress={handleMenuOnPress}>
                                <Ionicons 
                                    name="menu-outline" 
                                    color={variables.colors.secondary} 
                                    size={variables.fonts.size}
                                />
                            </Pressable>

                            <Pressable onPress={handleCloseOnPress}>
                                <Ionicons 
                                    name="close-outline" 
                                    color={variables.colors.secondary} 
                                    size={variables.fonts.size} 
                                />
                            </Pressable>


                        </View>

                        <View>
                            <Text style={styles.pageTitle}>Search</Text>
                        </View>

                        <View style={styles.textboxWrapper}>
                            <TextInput 
                                placeholder={"Artistes, songs or album"}
                                style={styles.textbox}
                                placeholderTextColor={variables.colors.primary}
                            />
                        </View>

                        <Text style={{fontSize: 16, fontWeight: "bold", marginVertical: 6, marginHorizontal: 10, color: variables.colors.secondary}}>Recommended</Text>

                        <ScrollView 
                            styles={styles.list}
                            scrollEventThrottle={16}
                            showsVerticalScrollIndicator={false}
                            >

                            <SearchCard
                                imgSrc={require('../../assets/img/album_covers/burna.jpg')}
                                artiste="Burna Boy"
                                title="Anybody"
                                plays={10}
                                favorites={120}
                            />
                            <SearchCard
                                imgSrc={require('../../assets/img/album_covers/liluzi.jpg')}
                                artiste="Lil Uzi Vert"
                                title="Feelings Mutual"
                                plays={10}
                                favorites={120}
                            />
                            <SearchCard
                                imgSrc={require('../../assets/img/album_covers/oken.jpg')}
                                artiste="O'Kenneth"
                                title="Ya Parke"
                                plays={10}
                                favorites={120}
                            />
                            <SearchCard
                                imgSrc={require('../../assets/img/album_covers/stargazing.jpg')}
                                artiste="Travis Scott"
                                title="Stargazing"
                                plays={10}
                                favorites={120}
                            />
                            <SearchCard
                                imgSrc={require('../../assets/img/album_covers/liluzi.jpg')}
                                artiste="Lil Uzi Vert"
                                title="Feelings Mutual"
                                plays={10}
                                favorites={120}
                            />
                            <SearchCard
                                imgSrc={require('../../assets/img/album_covers/oken.jpg')}
                                artiste="O'Kenneth"
                                title="Ya Parke"
                                plays={10}
                                favorites={120}
                            />
                            <SearchCard
                                imgSrc={require('../../assets/img/album_covers/stargazing.jpg')}
                                artiste="Travis Scott"
                                title="Stargazing"
                                plays={10}
                                favorites={120}
                            />
                            <SearchCard
                                imgSrc={require('../../assets/img/album_covers/liluzi.jpg')}
                                artiste="Lil Uzi Vert"
                                title="Feelings Mutual"
                                plays={10}
                                favorites={120}
                            />
                            <SearchCard
                                imgSrc={require('../../assets/img/album_covers/oken.jpg')}
                                artiste="O'Kenneth"
                                title="Ya Parke"
                                plays={10}
                                favorites={120}
                            />
                            <SearchCard
                                imgSrc={require('../../assets/img/album_covers/stargazing.jpg')}
                                artiste="Travis Scott"
                                title="Stargazing"
                                plays={10}
                                favorites={120}
                            />

                        </ScrollView>
                        
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
    container:{
        width: "100%",
        height: "100%"
    },
    navBar: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
        padding: variables.padding.horizontal
    },
    pageTitle:{
        paddingVertical: 20,
        textAlign: "center",
        fontSize: variables.fonts.size,
        color: variables.colors.secondary,
        paddingHorizontal: variables.padding.horizontal

    },
    textboxWrapper:{

        width: "100%",
        borderWidth: 10,
        borderColor: "#3E464F"

    },
    textbox:{

        backgroundColor: "#fff",
        color: variables.colors.primary,
        borderRadius: 3,
        fontWeight: "bold",
        paddingVertical: 2,
        paddingHorizontal: 6

    },
    list:{
        width: "100%"
    }

})