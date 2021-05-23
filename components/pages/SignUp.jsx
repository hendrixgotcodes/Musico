import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Pressable, SafeAreaView,Platform, StatusBar, TextInput, Image} from 'react-native'
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
import fb, {GoogleProvider, handleUserProfile} from '../../services/firebase'
import Modal from '../utils/Modal'



export default function SignIn({navigation}) {

    useEffect(() => {
        
        // fb.auth().onAuthStateChanged((userAuth)=>{

        //     if(userAuth){
        //         handleUserProfile(userAuth, {
        //             albums: null,
        //             avatar: null,
        //             favorites: null,
        //             first_name: firstName,
        //             last_name: lastName,
        //             followers: null,
        //             following: null
        //         })
        //         .then((snapshot)=>{
        //             // console.log(snapshot);
        //         })
        //         .catch(()=>{
        //             Toast.show("An error occured while signing up. Please try later!")
        //          })
        //     }

        // })

    },[])

    const dispatch = useDispatch()

    const [modalShown, setModalShown] = useState(false)
    const [modalText, setModalText] = useState("")
    
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleReturnKeyOnPress= ()=>{

        navigation.goBack()

    }
    
    const handleSignInOnPress = ()=>{

        navigation.navigate("SignIn")

    }

    const handleSignUpOnPress = ()=>{

        if(password !== confirmPassword)
        {
            Toast.show("The two passwords do not match.")
            return
        }

        setModalShown(true)
        setModalText(`Signing you up!`)


        const provider = new GoogleProvider()
        fb.auth().createUserWithEmailAndPassword(email, password)
            .then((result)=>{

                handleUserProfile(result.user, {
                    albums: null,
                    avatar: null,
                    favorites: null,
                    first_name: firstName,
                    last_name: lastName,
                    followers: null,
                    following: null
                })
                .then((snapshot)=>{
                    setModalShown(false)
                    setModalText(``)

                    setEmail("")
                    setFirstName("")
                    setLastName("")
                    setPassword("")

                    dispatch(userSliceActions.logIn())
                })
                .catch(()=>{

                    setModalShown(false)
                    setModalText(``)

                    const user = firebase.auth().currentUser

                    user.delete()
                        .then(()=>{

                            Toast.show("An error occured while signing up. Please try later!")

                        })

                 })

                



            })
            .catch((err)=>{
                setModalShown(false)
                setModalText(``)
                Toast.show(err.message, Toast.LONG)
            })

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
                                Hi there,
                                {"\n"}Proceed with sign up.
                            </Text>
                            <Text style={{fontWeight: "normal", fontSize: 20, color: "#BABABB", marginTop: 5}}>
                                Sign up to begin listening.
                            </Text>
                        </View>

                        <View style={styles.textInputWrapper}>

                            <TextInput 
                                placeholder="First name" 
                                placeholderTextColor="#7D7D7D"
                                style={styles.textInput}
                                value={firstName}
                                onChangeText={(text)=>{
                                    setFirstName(text)
                                }}
                            />
                            <TextInput 
                                placeholder="Last name" 
                                style={styles.textInput}
                                placeholderTextColor="#7D7D7D"
                                value={lastName}
                                onChangeText={(text)=>{
                                    setLastName(text)
                                    console.log(lastName);
                                }}
                            />
                            <TextInput 
                                placeholder="Email" 
                                color="red"
                                style={styles.textInput} 
                                value={email}
                                placeholderTextColor="#7D7D7D"
                                onChangeText={(text)=>{
                                    setEmail(text)
                                }}
                            />

                            <TextInput 
                                placeholder="Password" 
                                placeholderTextColor="#7D7D7D"
                                style={styles.textInput}
                                secureTextEntry={true}
                                value={password}
                                onChangeText={(text)=>{
                                    setPassword(text)
                                }}
                            />

                            <TextInput 
                                placeholder="Confirm password" 
                                placeholderTextColor="#7D7D7D"
                                style={[styles.textInput, {marginBottom: 0}]}
                                secureTextEntry={true}
                                value={confirmPassword}
                                onChangeText={(text)=>{
                                    setConfirmPassword(text)
                                }}
                            />

                        </View>

                    </View>
                    
                    <View style={styles.footer}>

                        <View style={styles.footerTextWrapper}>
                            <Text style={{color: "#fff"}}>
                                Already have an account?
                            </Text>
                            <Pressable onPress={handleSignInOnPress}>
                                <Text style={{color: "#fff", textDecorationLine: "underline",fontWeight: "bold", marginLeft: 3}} >
                                    Sign in 
                                </Text>
                            </Pressable>
                        </View>
                        <Pressable onPress={handleSignUpOnPress} style={styles.btnWrapper}>
                            <View style={styles.btn}>
                                <Text style={styles.btnText}>
                                    Sign up
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
        color: "#fff",
        fontSize: 28,
        fontWeight: "bold",
        
    },
    greetings:{
        marginTop: 20
    },
    textInputWrapper:{
        width: "100%",
        marginTop: 50
    },
    textInput:{
        width: "90%",
        borderWidth: 1,
        borderColor: "#BABABB",
        padding: 8,
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
        marginVertical: 10,
        height: "22%"
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