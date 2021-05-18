import React from 'react'
import {View, StyleSheet, Pressable, SafeAreaView,Platform, StatusBar, TextInput} from 'react-native'
import {
    Title,
    Caption,
    Paragraph,
    Text
} from 'react-native-paper'
import {Ionicons} from '@expo/vector-icons'
import {LinearGradient} from 'expo-linear-gradient'
import {useSelector, useDispatch} from 'react-redux'

import variables from '../../utils/variables'
import {selectUserLoginState, userSliceActions} from '../../store/features/userSlice'


export default function SignIn({navigation}) {

    const dispatch = useDispatch()

    const handleReturnKeyOnPress= ()=>{

        navigation.navigate("Welcome")

    }

    const handleSignInOnPress = ()=>{

        dispatch(userSliceActions.logIn())

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

                <View style={styles.container}>

                    <View>
                        <View style={styles.header}>
                            <Pressable onPress={handleReturnKeyOnPress}>
                                <Ionicons 
                                    name="return-up-back" 
                                    size={variables.fonts.size}
                                    color={variables.colors.secondary}
                                />
                            </Pressable>
                        </View>

                        <View style={styles.greetings}>
                            <Text style={[styles.title]}>
                                Welcome back,
                                {"\n"}You've been missed.
                            </Text>
                            <Text style={{fontWeight: "normal", fontSize: 20, color: "#BABABB", marginTop: 10}}>
                                Sign in to continue listening.
                            </Text>
                        </View>

                        <View style={styles.textInputWrapper}>

                            <TextInput 
                                placeholder="Email" 
                                color="red"
                                style={styles.textInput} 
                            />

                            <TextInput 
                                placeholder="Password" 
                                placeholderColor="#BABABB"
                                style={styles.textInput}
                                secureTextEntry={true}
                            />

                        </View>

                    </View>
                    
                    <View style={styles.footer}>

                        <View style={styles.footerTextWrapper}>
                            <Text style={{color: "#fff"}}>
                                Don't have an account?
                            </Text>
                            <Pressable onPress={handleSignUpOnPress}>
                                <Text style={{color: "#fff", textDecorationLine: "underline",fontWeight: "bold", marginLeft: 3}} >
                                    Sign up 
                                </Text>
                            </Pressable>
                        </View>
                        <Pressable onPress={handleSignInOnPress} style={styles.btnWrapper}>
                            <View style={styles.btn}>
                                <Text style={styles.btnText}>
                                    Signin
                                </Text>
                            </View>
                        </Pressable>
                    </View>

                    
                </View>

            </LinearGradient>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({

    safeAreaView:{
        backgroundColor: variables.colors.primary,
        width: "100%",
        height: "100%",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    linearGradient:{
        width: "100%",
        height: "100%",
    },
    container: {
        width: "100%",
        height: "100%",
        marginHorizontal: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    header: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: variables.padding.horizontal
    },
    title:{
        // color: variables.colors.secondary,
        color: "#fff",
        fontSize: 28,
        fontWeight: "bold",
        margin: 0
        
    },
    greetings:{
        marginTop: 25
    },
    textInputWrapper:{
        width: "100%",
        marginTop: 50
    },
    textInput:{
        width: "90%",
        borderWidth: 1,
        borderColor: "#BABABB",
        padding: 10,
        marginBottom: 20,
        borderRadius: 8,
        color:  "#BABABB",
    },
    footer:{
        marginBottom: variables.padding.horizontal,
        width: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    footerTextWrapper:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    btnWrapper:{
        width: "70%",
        marginVertical: 20,
        height: "20%"
    },
    btn:{
        width: "100%",
        backgroundColor: variables.colors.secondary,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        borderRadius: 8,
    },
    btnText:{
        fontSize: 16,
        color: "#fff"
    }

})