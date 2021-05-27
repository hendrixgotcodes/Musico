import React, {useEffect} from 'react'
import {View, StatusBar as RNStatusBar, Platform, StyleSheet} from 'react-native'
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import {useSelector, useDispatch} from 'react-redux'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import fb,{fetchUserData} from '../services/firebase'
import Toast from 'react-native-simple-toast'


import variables from '../utils/variables';
import Home from './pages/Home';
import WelcomeScreen from './pages/WelcomScreen'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Search from './pages/Search';
import Settings from './pages/Settings';
import DrawerContent from './utils/DrawerContent'
import MusicDetail from './MusicDetail'
import {Audio} from 'expo-av'


import {selectUserLoginState, userSliceActions} from '../store/features/userSlice'
import {
    songSliceActions, 
    selectSongPlayingState, 
    selectSongRepeatState,
    selectSongFavoriteState,
    selectSongArtsiteState,
    selectSongTitleState,
    selectSongImgSrcState,
    selectSongSrcState
} from '../store/features/songSlice'

// import MusicBar from './components/MusicBar'
// import MusicDetail from './components/MusicDetail'
Audio.setAudioModeAsync({

    playsInSilentModeIOS : true, 
    allowsRecordingIOS: true, 
    staysActiveInBackground: true,
    interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
    shouldDuckAndroid: true,
    playThroughEarpieceAndroid: true

})

const playbackObject = new Audio.Sound()


export default function Navigation() {


    const loggedIn = useSelector(selectUserLoginState)
    const dispatch = useDispatch()

    useEffect(() => {
        fb.auth()
        .onAuthStateChanged((userAuth)=>{
            if(userAuth){
                fetchUserData(userAuth)
                .then((user)=>{
                    dispatch(userSliceActions.setUserProps(user))
                })
                .then(()=>{
                    
                    dispatch(userSliceActions.logIn())
                    Toast.show("Automatic login detected.", Toast.LONG)
                })
            }
        })
    }, [])
    
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
                            
                            <Drawer.Screen name="Home"  component={Home} initialParams={{playbackObject: playbackObject, user:"tuttu"}} />
                            <Drawer.Screen name="Search" component={Search} />
                            <Drawer.Screen name="Settings" component={Settings} />
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
                <AppRootStack.Screen name="MusicDetail" component={MusicDetail} initialParams={{playbackObject: playbackObject}} />

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