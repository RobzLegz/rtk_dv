import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { selectUser, UserInfo } from "../redux/slices/userSlice";
import { checkForLogin } from "../requests/userRequests";

function Navigation() {
    const userInfo: UserInfo = useSelector(selectUser);

    const dispatch = useDispatch();
    const router = useRouter();
  
    useEffect(() => {
        if(!userInfo.loggedIn || !userInfo.token){
            const token = window.localStorage.getItem("refreshtoken");
    
            if(token){
                checkForLogin(dispatch, router);
            }else{
                router.push("/auth/login");
            }
        }
    }, [userInfo.loggedIn, dispatch, userInfo.token, router]);

    const [type] = useState(router.pathname);

    if(type === "/auth/login" || type === "/auth/register"){
        return (
            <nav className="w-full h-14 flex items-center justify-between px-5 fixed top-0 left-0">
                <h1>RTK dzīve</h1>
            </nav>
        )
    }
    
    return (
        <nav className="w-full h-14 flex items-center justify-between px-5 fixed top-0 left-0 bg-rtkBlue text-white">
            <Link href="/">
                <h1 className="mr-4 text-white cursor-pointer">RTK dzīve</h1>
            </Link>

            <input 
                className="flex-1 h-8"
                type="text" 
                name="" 
                id="" 
            />

            <div className="flex ml-4">
                <Link href="/">
                    <p className="cursor-pointer mr-2">Home</p>
                </Link>

                <Link href="/friends">
                    <p className="cursor-pointer">Friends</p>
                </Link>
            </div>


        </nav>
    )
}

export default Navigation