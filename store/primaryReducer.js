import {combineReducers} from '@reduxjs/toolkit'
import userSlice from './features/userSlice'
import songSlice from './features/songSlice'

const primaryReducer = combineReducers({
    user: userSlice,
    song: songSlice
})

export default primaryReducer