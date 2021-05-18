import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({

    name: "user",
    initialState: {

        loggedIn: false,
        userProps: {
            
        }

    },
    reducers: {

        logIn: (state)=>{
            state.loggedIn = true
        },
        logOut: (state)=>{
            state.loggedIn = false
        },
        setUserProps: (state, action)=>{
            state.userProps = action.payload
        }

    }

})

export const userSliceActions = userSlice.actions;
export const selectUserLoginState = (state)=> state.user.loggedIn
export const selectUserPropsState = (state)=> state.user.userProps
export default userSlice.reducer