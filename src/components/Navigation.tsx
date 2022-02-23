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
  
    const [type] = useState(router.pathname);

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

    if(type === "/auth/login" || type === "/auth/register"){
        return (
            <nav className="w-full h-14 flex items-center justify-between px-5 fixed top-0 left-0">
                <h1>RTK dzīve</h1>
            </nav>
        )
    }

    if(!userInfo.info || !userInfo.loggedIn){
        return null;
    }
    
    return (
        <nav className="w-full h-14 flex items-center justify-between px-5 fixed top-0 left-0 bg-rtkBlue">
            <Link href="/">
                <h1 className="md:mr-4 text-white cursor-pointer text-xl md:text-4xl">RTK dzīve</h1>
            </Link>

            <input 
                className="flex-1 h-8 hidden md:block"
                type="text" 
                name="" 
                id="" 
                placeholder="Search"
            />

            <div className="flex items-center md:ml-4">
                <div className="flex items-center">
                    <Link href="/">
                        <p className="cursor-pointer mr-2 text-white hidden sm:block">Home</p>
                    </Link>

                    <Link href="/friends">
                        <p className="cursor-pointer text-white">Friends</p>
                    </Link>
                </div>

                <Link href={`/u/${userInfo.info.username}`}>
                    <img 
                        src={userInfo.info.avatar} 
                        alt={`${userInfo.info.username}'s RTK avatar`} 
                        className="w-10 h-10 rounded-full object-cover border-[1px] border-white ml-4 cursor-pointer"
                    />
                </Link>
            </div>
        </nav>
    )
}

export default Navigation