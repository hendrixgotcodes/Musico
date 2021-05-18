import React from 'react'
import { View, StyleSheet,Pressable } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import {useNavigation} from '@react-navigation/native'
// import Icon from 'react-native-vector-icons/Ionicons'
import {Ionicons} from '@expo/vector-icons'
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Text,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper'
import {useSelector, useDispatch} from 'react-redux'


import variables from '../../utils/variables'
import {selectUserLoginState, userSliceActions} from '../../store/features/userSlice'



export default function DrawerContent(props) {

    const dispatch = useDispatch()

    const navigation = props.navigation
    // console.log(props);

    const handleOnHomeBtnPressed = ()=>{

        navigation.navigate("Home")

    }

    const handleOnSearchBtnPressed = ()=>{

        navigation.navigate("Search")

    }

    const handleLogOutOnPressed = ()=>{
        dispatch(userSliceActions.logOut())
    }
    

    return (
        <View style={styles.container}>

            <DrawerContentScrollView {...props}>

                <View style={[styles.userInfoSection]}>
                    <Avatar.Image
                        source={require("../../assets/img/album_covers/davido.jpg")}
                        size={50}
                     />

                    <View style={styles.userBio}>
                        <Title style={styles.title}>Samuel Asare</Title>
                        <Caption style={styles.caption}>asare11samuel@gmail.com</Caption>
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
