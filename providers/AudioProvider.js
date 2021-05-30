import {Audio} from 'expo-av'

Audio.setAudioModeAsync({

    playsInSilentModeIOS : true, 
    allowsRecordingIOS: true, 
    staysActiveInBackground: true,
    interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
    shouldDuckAndroid: true,
    playThroughEarpieceAndroid: true

})

export default playbackObject = new Audio.Sound()