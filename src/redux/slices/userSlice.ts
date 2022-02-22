import { createSlice } from "@reduxjs/toolkit";
import { UserInterface } from "../../interfaces/userInterface";

interface State{
    loggedIn: boolean,
    token: string,
    loading: boolean,
    info: UserInterface | null,
    users: UserInterface[] | null;
    activeProfile: UserInterface | null;
}

const initialState: State = {
    loggedIn: false,
    token: "",
    info: null,
    loading: true,
    users: null,
    activeProfile: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state) => {
            state.loggedIn = true;
        },
        setUserInfo: (state, action) => {
            state.info = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state.info = null;
            state.token = "";
            state.loggedIn = false;
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setActiveProfile: (state, action) => {
            state.activeProfile = action.payload;
        },
    },
});

export const {
    login,
    setUserInfo,
    setToken,
    logout,
    setUsers,
    setActiveProfile
} = userSlice.actions;

export const selectUser = (state: any) => state.user;

export default userSlice.reducer;