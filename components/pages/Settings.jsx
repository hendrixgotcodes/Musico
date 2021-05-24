import React, {useState} from 'react'
import {View, Text, SafeAreaView, TextInput,StyleSheet, Pressable, StatusBar, Platform} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import {
    Avatar,
    Title,
    Caption,
    Drawer,
} from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'
import {useSelector, useDispatch} from 'react-redux'
import * as DocumentPicker from 'expo-document-picker'
import Toast from 'react-native-simple-toast'
import fb, {setUserData, fetchUserData} from '../../services/firebase'


import variables from '../../utils/variables'
import Modal from '../utils/Modal'
import {selectUserLoginState, selectUserPropsState,userSliceActions} from '../../store/features/userSlice'



export default function Settings() {

    const dispatch = useDispatch()
    const userProps = useSelector(selectUserPropsState)

    const [modalShown, setModalShown] = useState(false)
    const [modalText, setModalText] = useState(false)

    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [avatar, setAvatar] = useState("")

    const [fileName, setFileName] = useState("")
    const [fileURI, setFileURI] = useState("")


    const handleMenuOnPress = ()=>{

    }


    const handleCloseOnPress =()=>{


        setModalText("uploading please wait..")
        setModalShown(true)

        const imgRef = fb.storage().ref().child(`profile_photos/${fileName}`)
        const uploadTask = imgRef.put(fileURI,{
            contentType: 'image/jpeg'
        })
        .then((result)=>{
            
            
            const newRef = fb.storage().ref(`profile_photos/${fileName}`)
            newRef.getDownloadURL()
            .then((url)=>{

                if(firstName ==="" && lastName ==="" && email === ""){

                    fetchUserData(userProps)
                    .then((user)=>{

                    user.avatar = url
                    console.log(user.avatar);

                    setUserData(user)
                    .then(()=>{
                        Toast.show("Profile picture updated successfully.")
                        setModalShown(false)
                    })
                    .catch((err)=>{
                        setModalShown(false)
                        Toast.show("Sorry. An error occurred.")
                    })

                    })

                }
                
            })
            
        })


    }

    const handleUpdatePicOnClick = ()=>{

        DocumentPicker.getDocumentAsync({
            type: "image/*",
            copyToCacheDirectory: false
        })
        .then((result)=>{
            if(result.type!=="cancel"){

               setFileName(result.name)
               setFileURI(result.uri)

            }else{
                Toast.show("Canceled")
            }
        })

    }


    return (
        <SafeAreaView style={styles.safeAreaView}>

            <Modal shown={modalShown} text={modalText} />

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
                            source={userProps?.avatar}
                            size={70}
                            backgroundColor={variables.colors.secondary}
                        />
                        <Pressable onPress={handleUpdatePicOnClick}>
                            <Caption style={styles.caption}>
                                Update picture
                            </Caption>
                        </Pressable>

                    </View>

                    <View style={styles.textInputWrapper}>

                            <TextInput 
                                placeholder="First name" 
                                color="red"
                                style={styles.textInput}
                                placeholderTextColor= "#7D7D7D"
                                value={firstName}
                                onChangeText={(text)=>{
                                    setFirstName(text)
                                }}
                            />
                            <TextInput 
                                placeholder="Last name" 
                                color="red"
                                style={styles.textInput}
                                placeholderTextColor= "#7D7D7D"
                                value={lastName}
                                onChangeText={(text)=>{
                                    setLastName(text)
                                }}
                            />

                            <TextInput 
                                placeholder="Email" 
                                placeholderTextColor= "#7D7D7D"
                                style={styles.textInput}
                                value={email}
                                onChangeText={(text)=>{
                                    setEmail(text)
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
