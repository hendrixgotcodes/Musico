import React from 'react'
import {View, StyleSheet, Image, SafeAreaView, Platform, StatusBar, Pressable} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {Ionicons} from '@expo/vector-icons'
import {
    Title,
    Caption,
    Paragraph,
    Text
} from 'react-native-paper'

import variables from '../../utils/variables'



export default function SignIn({navigation}) {

    const handleSignInOnPress = ()=>{

        navigation.navigate("SignIn")

    }

    const handleSignUpOnPress = ()=>{

        navigation.navigate("SignUp")

    }

    return (
        <SafeAreaView style={styles.safeAreaView}>

            <LinearGradient
                colors={[variables.colors.primary ,variables.colors.primary_darker]}
                style={styles.linearGradient}
            >

                <View style={styles.imgWrapper}>

                    <Image 
                        source={require("../../assets/img/illustrations/1x/Illustration.png")} 
                        style={styles.img}
                    />

                    <Title style={styles.title}>
                       <Title style={styles.titleEmph}>Musico!</Title> Listen to your favorite music for free!
                    </Title>

                    <Paragraph style={styles.paragraph}>
                        Get any music of your choice. Whether Gospel, HipHop, RnB, Afrobeats. Whatever!
                    </Paragraph>

                </View>

                <View style={styles.btnWrapper}>

                    <Pressable style={styles.pressable} onPress={handleSignUpOnPress}>
                        <View style={[styles.btn, styles.btnSecondary]}>
                            <Text style={[styles.btnText, styles.btnSecondaryText]}>Sign Up</Text>
                        </View>
                    </Pressable>

                    <Pressable style={styles.pressable} onPress={handleSignInOnPress} >
                        <View style={[styles.btn, styles.btnPrimary]}>
                            <Text style={[styles.btnText, styles.btnPrimaryText]}>Sign In</Text>
                        </View>
                    </Pressable>

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
    linearGradient:{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    imgWrapper:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    img: {
        width: "45%",
        height: 165
    },
    title: {
        width: "80%",
        textAlign: "center",
        marginTop: 30,
        fontSize: 26,
        color: "#fff"
    },
    titleEmph:{
        fontSize: 26,
        color: variables.colors.secondary
    },
    paragraph: {
        color: variables.colors.primary_lighter,
        width: "85%",
        textAlign: "center",
        color: "#BABABB"
    },
    btnWrapper: {
        width: "65%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    pressable:{
        width: "45%",
        height: "23%"
    },
    btn: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    btnPrimary: {
        backgroundColor: "white"
    },
    btnPrimaryText: {
        color: variables.colors.secondary,
        fontWeight: "bold"
    },
    btnSecondary:{
        backgroundColor: variables.colors.secondary
    },
    btnSecondaryText:{
        color: "#fff",
        fontWeight: "bold"
    }
})