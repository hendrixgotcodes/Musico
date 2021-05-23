import React, {useState} from 'react'
import {View, Text, SafeAreaView, TextInput,StyleSheet, Pressable, StatusBar, Platform} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import {
    Avatar,
    Title,
    Caption,
    Drawer,
} from 'react-native-paper'


import variables from '../../utils/variables'
import { LinearGradient } from 'expo-linear-gradient'


export default function Settings() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleMenuOnPress = ()=>{

    }

    const handleCloseOnPress =()=>{

    }


    return (
        <SafeAreaView style={styles.safeAreaView}>

            <LinearGradient style={styles.linearGradient} colors={[variables.colors.primary ,variables.colors.primary_darker]}>

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
                                name="checkmark-outline" 
                                color={variables.colors.secondary} 
                                size={variables.fonts.size} 
                            />
                        </Pressable>


                    </View>

                    <View>
                        <Text style={styles.pageTitle}>Account</Text>
                    </View>

                    <View style={styles.avatarWrapper}>

                        <Avatar.Image
                            source={require("../../assets/img/album_covers/davido.jpg")}
                            size={70}
                        />
                        <Caption style={styles.caption}>
                            Update picture
                        </Caption>

                    </View>

                    <View style={styles.textInputWrapper}>

                            <TextInput 
                                placeholder="First name" 
                                color="red"
                                style={styles.textInput}
                                placeholderTextColor= "#7D7D7D"
                                value={email}
                                onChangeText={(text)=>{
                                    setEmail(text)
                                }}
                            />
                            <TextInput 
                                placeholder="Last name" 
                                color="red"
                                style={styles.textInput}
                                placeholderTextColor= "#7D7D7D"
                                value={email}
                                onChangeText={(text)=>{
                                    setEmail(text)
                                }}
                            />

                            <TextInput 
                                placeholder="Email" 
                                placeholderTextColor= "#7D7D7D"
                                style={styles.textInput}
                                secureTextEntry={true}
                                value={password}
                                onChangeText={(text)=>{
                                    setPassword(text)
                                }}
                            />

                        </View>



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
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
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
    avatarWrapper:{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center"
    },
    caption:{
        fontSize: 15,
        color: '#BABABB' 
    },
    textInputWrapper:{
        width: "100%",
        marginTop: 50,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
    },
    textInput:{
        width: "90%",
        borderWidth: 1,
        borderColor: "#BABABB",
        padding: 10,
        marginBottom: 20,
        borderRadius: 8,
        color:  "#BABABB"
    },

})
