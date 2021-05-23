import React,{useState, useEffect} from 'react'
import {View, StyleSheet, Pressable, SafeAreaView,Platform, Image,StatusBar, TextInput} from 'react-native'
import {
    Title,
    Caption,
    Paragraph,
    Text
} from 'react-native-paper'
import {Ionicons} from '@expo/vector-icons'
import {LinearGradient} from 'expo-linear-gradient'
import {useSelector, useDispatch} from 'react-redux'
import Toast from 'react-native-simple-toast'


import {selectUserLoginState, userSliceActions} from '../../store/features/userSlice'
import variables from '../../utils/variables'
import Modal from '../utils/Modal'
// import fb from '../../services/firebase'
import fb, {GoogleProvider, handleUserProfile} from '../../services/firebase'



export default function SignIn({navigation}) {

    // useEffect(() => {
        
    //     fb.auth()
    //         .onAuthStateChanged((user)=>{

    //             if(user){
    //                 handleUserProfile(user)
    //                 .then(()=>{
    //                     dispatch(userSliceActions.logIn())
    //                 })
    //                 .catch((err)=>{
    //                     console.log(err);
    //                 })
    //             }

    //         })

    //     return () => {
    //         // cleanup
    //     }
    // }, [])

    const dispatch = useDispatch()
    const [modalShown, setModalShown] = useState(false)
    const [modalText, setModalText] = useState("")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleReturnKeyOnPress= ()=>{

        navigation.goBack()

    }

    const handleSignInOnPress = ()=>{

        // dispatch(userSliceActions.logIn())

        setModalShown(true)
        setModalText(`Signing you in!`)


        fb.auth().signInWithEmailAndPassword(email, password)
            .then((result)=>{

                setModalShown(false)
                setModalText(``)
                dispatch(userSliceActions.logIn())
            })
            .catch((err)=>{
                setModalShown(false)
                setModalText(``)
                Toast.show(err.message, Toast.LONG)
            })

    }

    const handleSignUpOnPress = ()=>{

        navigation.navigate("SignUp")

    }



    return (
        <SafeAreaView style={styles.safeAreaView}>

            <Modal shown={modalShown} text={modalText} />

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
                                placeholderTextColor= "#7D7D7D"
                                value={email}
                                onChangeText={(text)=>{
                                    setEmail(text)
                                }}
                            />

                            <TextInput 
                                placeholder="Password" 
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
                        {/* <Pressable style={styles.btnGoogle} onPress={handleGoogleBtnOnPress} >
                                <Image source={require("../../assets/icons/google.png")} style={styles.googleBtnImg} />
                                <Text style={[styles.btnText, {color: "#000"}]}>Sign in with google</Text>
                        </Pressable> */}
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
        color:  "#BABABB"
    },
    footer:{
        marginBottom: 50,
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
        height: 50
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
    },
    btnGoogle: {
        width: "70%",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        height: 50
    },
    googleBtnImg:{
        width: 30,
        height: 30,
        marginRight: 5
    }

})