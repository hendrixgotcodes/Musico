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
        songSrc: ""

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
            state.songSrc = "../assets/music/freshmusic/" + action.payload
        },
        setFavorite: (state, action)=>{
            state.favorite = action.payload
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
export default songSlice.reducer