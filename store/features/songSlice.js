import {
    createSlice
} from '@reduxjs/toolkit'

const songSlice = createSlice({

    name: "song",
    initialState: {
        playing: false,
        repeat: false,
        favorite: false,
        artiste: "unknown",
        title: "unknown",
        imgSrc: "",
        songSrc: "",
        soundObject: null,
        duration: {
           secs: 0,
           mins: 0,
           mill: 1
        },
        postion: {
            secs: 0,
            mins: 0,
            mill: 1
        }

    },
    reducers: {

        playSong: (state) => {

            state.playing = true

        },
        pauseSong: (state) => {

            state.playing = false

        },
        toggleFavorite: (state) => {
            state.favorite = state.favorite === true ? false : true
        },
        toggleRepeat: (state) => {
            state.repeat = state.repeat === true ? false : true
        },
        setArtiste: (state, action) => {
            state.artiste = action.payload
        },
        setTitle: (state, action) => {
            state.title = action.payload
        },
        setImgSrc: (state, action) => {
            state.imgSrc = action.payload
        },
        setSongSrc: (state, action) => {
            state.songSrc = action.payload
        },
        setFavorite: (state, action)=>{
            state.favorite = action.payload
        },
        setSoundObject: (state, action)=>{
            state.soundObject = action.payload
        },
        setDuration: (state,action)=>{
            state.duration = action.payload
            state.duration = action.payload
        },
        setPosition: (state, action)=>{
            // state.postion.secs = action.payload.secs
            // state.postion.mins = action.payload.mins
            state.postion = action.payload
            state.postion = action.payload
        }

    }

})

export const songSliceActions = songSlice.actions
export const selectSongPlayingState = (state) => state.song.playing
export const selectSongRepeatState = (state) => state.song.repeat
export const selectSongFavoriteState = (state) => state.song.favorite
export const selectSongArtsiteState = (state) => state.song.artiste
export const selectSongTitleState = (state) => state.song.title
export const selectSongImgSrcState = (state) => state.song.imgSrc
export const selectSongSrcState = (state) => state.song.songSrc
export const selectSoundObject = (state)=> state.song.soundObject
export const selectPosition = (state)=>state.song.postion
export const selectDuration = (state)=>state.song.duration
export default songSlice.reducer