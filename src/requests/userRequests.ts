import valid from "../utils/valid";
import { login, logout, setActiveProfile, setToken, setUserInfo, setUsers } from "../redux/slices/userSlice";
import { clearNotification, setNotification } from "../redux/slices/notificationSlice";
import axios from "axios";

const registerUser = (e: any, username: string, email: string, password: string, cfPassword: string, agreedToPrivacyPolicy: boolean, dispatch: any, router: any, clicked: boolean, setClicked: any) => {
    e.preventDefault();

    if(clicked){
        return
    }

    setClicked(true);

    dispatch(setNotification({type: "loading", message: "loading"}));

    // const errMsg = valid(username, email, password, cfPassword);
    // if(errMsg){
    //     return dispatch(setNotification({type: "error", message: errMsg}));
    // }
    
    if(!agreedToPrivacyPolicy){
        return dispatch(setNotification({type: "error", message: "To register You must accept our privacy policy!"}));
    }
    
    const userData = {
        username: username,
        email: email,
        password: password,
        cf_password: cfPassword,
    };

    axios.post("/api/auth/register", userData)
        .then((res: any) => {
            dispatch(setNotification({type: "success", message: "Register success. Log in now"}));
            router.push("/auth/login");
        }).catch((err: any) => {
            const message: string = err.response.data.err;
            dispatch(setNotification({type: "error", message: message}));
        });
}

const loginUser = (e: any, username: string, password: string, dispatch: any, router: any, clicked: boolean, setClicked: any) => {
    e.preventDefault();

    if(clicked){
        return;
    }

    setClicked(true);

    dispatch(setNotification({type: "loading", message: "loading"}));

    if(!username || !password){
        return dispatch(setNotification({type: "error", message: "Please fill out all fields!"}));
    }

    if(username.length < 6){
        return dispatch(setNotification({type: "error", message: "Username too short!"}));
    }

    if(password.length < 6){
        return dispatch(setNotification({type: "error", message: "Password should be at least 6 characters!"}));
    }

    const userData = {
        username: username,
        password: password,
    };

    axios.post("/api/auth/login", userData)
        .then((res: any) => {
            window.localStorage.setItem("firstLogin", "true");
            window.localStorage.setItem("refreshtoken", res.data.refresh_token)
            dispatch(clearNotification());
            checkForLogin(dispatch, router);
        }).catch((err: any) => {
            const message: string = err.response.data.err;
            dispatch(setNotification({type: "error", message: message}));
        });
}

const checkForLogin = (dispatch: any, router: any) => {
    dispatch(setNotification({type: "loading", message: "loading"}));

    const first_login = window.localStorage.getItem("firstLogin");
    const rf_token = window.localStorage.getItem("refreshtoken");

    if(!rf_token || !first_login){
        router.push("/auth/login");
        dispatch(clearNotification());
        return;
    }

    const headers = {
        headers: {
            Authorization: rf_token
        }
    }
    
    axios.get("/api/auth/accessToken", headers)
        .then((res: any) => {
            dispatch(setToken(res.data.access_token));
            dispatch(setUserInfo(res.data.user));
            dispatch(login());
            dispatch(clearNotification());
        }).catch((err) => {
            const message: string = err.response.data.err;
            dispatch(setNotification({type: "error", message: message}));
            window.localStorage.removeItem("firstLogin");
            window.localStorage.removeItem("refreshtoken");
            router.push("/auth/login");
        });
}

const logoutuser = (dispatch: any) => {
    window.localStorage.removeItem("firstLogin");
    window.localStorage.removeItem("refreshtoken");
    dispatch(logout());
    dispatch(setNotification({type: "success", message: "Logged out!"}))
}

const getAllUsers = (dispatch: any) => {
    axios.get("/api/user")
        .then((res) => {
            dispatch(setUsers(res.data));
        }).catch((err) => {
            const message: string = err.response.data.err;
            dispatch(setNotification({type: "error", message: message}));
        });
}

const getUserInfoByUsername = (username: string | string[] | undefined, dispatch: any) => {
    dispatch(setNotification({type: "loading", message: "Loading"}));

    if(typeof(username) !== "string"){
        return dispatch(setNotification({type: "error", message: "Something went wrong"}));
    }

    axios.get(`/api/user/profile/${username}`)
        .then((res) => {
            dispatch(setActiveProfile(res.data));
            dispatch(clearNotification());
        }).catch((err) => {
            const message: string = err.response.data.err;
            dispatch(setNotification({type: "error", message: message}));
        });
}

const updateInfo = (name: string, username: string, email: string, token: string, dispatch: any) => {
    dispatch(setNotification({type: "loading", message: "Loading"}));
    
    const data = {
        name: name,
        username: username,
        email: email,
    }

    const headers = {
        headers: {
            Authorization: token
        }
    }

    axios.put(`/api/user/`, data, headers)
        .then((res) => {
            dispatch(setNotification({type: "success", message: "Update success"}));
        }).catch((err) => {
            const message: string = err.response.data.err;
            dispatch(setNotification({type: "error", message: message}));
        });
}

export {
    registerUser, 
    loginUser, 
    checkForLogin, 
    logoutuser, 
    updateInfo,
    getUserInfoByUsername
};