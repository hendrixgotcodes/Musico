import React, {useEffect} from 'react'
import {View, StatusBar as RNStatusBar, Platform, StyleSheet} from 'react-native'
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import {useSelector, useDispatch} from 'react-redux'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'

import variables from '../utils/variables';
import Home from './pages/Home';
import WelcomeScreen from './pages/WelcomScreen'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Search from './pages/Search';
import {selectUserLoginState} from '../store/features/userSlice'
import DrawerContent from './utils/DrawerContent'
import MusicDetail from './MusicDetail'
import fb,{handleUserProfile} from '../services/firebase'

import {
    songSliceActions, 
    selectSongPlayingState, 
    selectSongRepeatState,
    selectSongFavoriteState,
    selectSongArtsiteState,
    selectSongTitleState,
    selectSongImgSrcState
} from '../store/features/songSlice'

// import MusicBar from './components/MusicBar'
// import MusicDetail from './components/MusicDetail'

export default function Navigation() {

    useEffect(() => {
        fb.auth()
        .onAuthStateChanged((user)=>{
            if(user){
                handleUserProfile(user)
            }
        })
    }, [])

    const loggedIn = useSelector(selectUserLoginState)
    
    const LoggedOutStack = createStackNavigator()
    const AppRootStack = createStackNavigator()
    const Stack = createStackNavigator()
    const Drawer = createDrawerNavigator()

    const appTheme = {

        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: variables.colors.secondary,
          card: variables.colors.primary,
          // text: "#babbbc"
          text: "#fff"
        }
  
    }

    const AppMainStackScreen = ()=>{

        return(

            <>
                {
                    loggedIn === true ? (

                        <Drawer.Navigator

                            screenOptions={
                                {
                                headerShown: false
                                }
                            }

                            drawerContent={(props)=>(<DrawerContent {...props} />)}

                        >
                            
                            <Drawer.Screen name="Home" component={Home} />
                            <Drawer.Screen name="Search" component={Search} />
                        </Drawer.Navigator>

                    ) :(

                        <Stack.Navigator
                             screenOptions={
                                {
                                headerShown: false
                                }
                            }
                        >
                            <Stack.Screen name="Welcome" component={WelcomeScreen} />
                            <Stack.Screen name="SignUp" component={SignUp} />
                            <Stack.Screen name="SignIn" component={SignIn} />
                        </Stack.Navigator>

                    )
                }
            </>

        )

    }
    
    return (

        <NavigationContainer theme={appTheme}>

           <AppRootStack.Navigator
                screenOptions={
                    {
                    headerShown: false
                    }
                }
                mode="modal"
           >

                <AppRootStack.Screen name="Main" component={AppMainStackScreen} />
                <AppRootStack.Screen name="MusicDetail" component={MusicDetail} />

           </AppRootStack.Navigator>
            
            
        </NavigationContainer>
            
    )
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: variables.colors.primary,
    width: "100%",
    height: "100%",
    paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0
  },
  LinearG:{
      width: "100%",
      height: "100%",
      display: "flex",
      /*?flexDirection: "row"*/
      alignItems: 'center',
      justifyContent: 'space-between',
      position: "relative"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%"
  },
  statusBarStyle: {
    backgroundColor: '#000'
  }
});