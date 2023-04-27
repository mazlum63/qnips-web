import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userName: 'user',
        password: '123',
        status: false
    },
    reducers: {
        login(state, action) {
            if (action.payload.name === state.userName && action.payload.password === state.password) {
                /* state = {
                    ...state,
                    userName: 'user',
                    password: '123',
                    status: true
                } */

                state.status = true;
            }
            else { alert("username or password wrong!") }
        }
    },
    logout(state) {
        /*  state = {
             ...state,
             userName: 'user',
             password: '123',
             status: false
         } */

        state.status = false;
    }
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;