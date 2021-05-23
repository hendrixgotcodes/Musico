import React, {useState} from 'react'
import { View, StyleSheet,Pressable, Alert } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer'
// import {useNavigation} from '@react-navigation/native'
// import Icon from 'react-native-vector-icons/Ionicons'
import {Ionicons} from '@expo/vector-icons'
import {
    Avatar,
    Title,
    Caption,
    Text,
    Drawer,
} from 'react-native-paper'
import {useSelector, useDispatch} from 'react-redux'
import Toast from 'react-native-simple-toast'


import variables from '../../utils/variables'
import {selectUserLoginState, selectUserPropsState,userSliceActions} from '../../store/features/userSlice'
import fb, {GoogleProvider} from '../../services/firebase'
import Modal from '../utils/Modal'




export default function DrawerContent(props) {

    const dispatch = useDispatch()
    const userProps = useSelector(selectUserPropsState)

    const [appStatus, setAppStatus] = useState({
        modalShown: false,
        modalText: "Signing out. Please wait!"
    })

    const [modalShown, setModalShown] = useState(false)
    const [modalText, setModalText] = useState("")

    const navigation = props.navigation
    // console.log(props);

    const handleOnHomeBtnPressed = ()=>{

        navigation.navigate("Home")

    }

    const handleOnSearchBtnPressed = ()=>{

        navigation.navigate("Search")

    }

    const handleAccounSettingsOnPressed =()=>{
        navigation.navigate("Settings")
    }

    const handleLogOutOnPressed = ()=>{

        setModalShown(true)
        setModalText("Signing you out...")

        fb.auth()
            .signOut()
            .then(()=>{
                setModalShown(true)
            })
            .then(()=>{
                dispatch(userSliceActions.logOut())
            })


    }
    

    return (



        <View style={styles.container}>

            <DrawerContentScrollView {...props}>

                <View style={[styles.userInfoSection]}>
                    <Avatar.Image
                        source={userProps?.avatar}
                        size={50}
                        backgroundColor={variables.colors.secondary}
                     />

                    <View style={styles.userBio}>
                        <Title style={styles.title}>{`${userProps?.first_name} ${userProps?.last_name}`}</Title>
                        <Caption style={styles.caption}>{userProps?.email}</Caption>
                    </View>
                </View>

                <Drawer.Section>
                    <Pressable onPress={handleOnHomeBtnPressed}>
                        <View style={[styles.userInfoSection, {marginTop: 30}]}>
                            <Ionicons 
                                name="home-outline"
                                color="#fff"
                                size={16}
                            /> 
                            <Text style={{fontSize: 16, color: "#fff", marginLeft: 5}}>Home</Text>
                        </View>
                    </Pressable>
                </Drawer.Section>
                <Drawer.Section>
                    <Pressable onPress={handleOnSearchBtnPressed}>

                        <View style={styles.logOutSection}>
                            <Ionicons 
                                name="search-outline"
                                color="#fff"
                                size={16}
                            /> 
                            <Text style={{fontSize: 16, color: "#fff", marginLeft: 5}}>Search</Text>
                        </View>

                    </Pressable>
                </Drawer.Section>
                <Drawer.Section>
                    <Pressable>

                        <View style={styles.logOutSection}>
                            <Ionicons 
                                name="person-outline"
                                color="#fff"
                                size={16}
                            /> 
                            <Text style={{fontSize: 16, color: "#fff", marginLeft: 5}}>Account Settings</Text>
                        </View>
                    
                    </Pressable>
                </Drawer.Section>

            </DrawerContentScrollView>

            <Drawer.Section>
               <Pressable onPress={handleAccounSettingsOnPressed}>

                    <View style={styles.logOutSection}>
                        <Ionicons 
                            name="person-outline"
                            color="#fff"
                            size={16}
                        /> 
                        <Text style={{fontSize: 16, color: "#fff",  marginLeft: 5}}>Account Settings</Text>
                    </View>

               </Pressable>
               <Pressable onPress={handleLogOutOnPressed}>

                    <View style={styles.logOutSection}>
                        <Ionicons 
                            name="log-out-outline"
                            color="#fff"
                            size={16}
                        /> 
                        <Text style={{fontSize: 16, color: "#fff",  marginLeft: 5}}>Sign out</Text>
                    </View>

               </Pressable>
            </Drawer.Section>

        </View>

        
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 7
    },
    userInfoSection: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    userBio:{
        marginLeft: 10,
        display: "flex",
        flexDirection: "column"
    },
    title:{
        color: "#fff",
        fontSize: 18
    },
    caption:{
        color: "#fff"
    },
    logOutSection: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        borderTopColor: variables.colors.primary_lighter,
        borderTopWidth: 1,
        padding: 5
    }

})
