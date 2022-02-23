import { useRouter } from "next/router";
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { UserInterface } from "../interfaces/userInterface";
import getUserByUsername from "../logic/getUserByUsername";
import { selectUser, UserInfo } from "../redux/slices/userSlice";
import PostFeed from "./PostFeed";

function ProfileContainer() {
    const userInfo: UserInfo = useSelector(selectUser);
    const router = useRouter();

    const [username, setUsername] = useState<string | string[] | undefined>("");
    const [foundUser, setFoundUser] = useState<UserInterface | null>(null);

    useEffect(() => {
        if(!username){
            setUsername(router.query.username);
        }
    }, [username, router, router.query, router.query.username]);

    useEffect(() => {
        if(username && userInfo.users){
            setFoundUser(getUserByUsername(userInfo.users, username));
        }
    }, [username, userInfo.users]);

    if(!foundUser){
        return null;
    }

    return (
        <div className="w-full h-full pt-20 flex items-center justify-start flex-col">
            <div className="w-[800px] flex bg-rtkBlue p-2 items-start justify-start mb-8 relative">
                <img 
                    src={foundUser.avatar} 
                    alt={`${foundUser.username}'s RTK profile avatar`}
                    className="w-[90px] h-[130px] object-cover mr-2"
                />

                <div className="">
                    <div className="my-4">
                        <h2 className="text-white">{foundUser.username}</h2>
                        <h4 className="text-white">{foundUser.name}</h4>
                    </div>

                    <div className="my-4">
                        {
                            foundUser.course && (
                                <h4 className="text-white">Course: {foundUser.course}</h4>
                            )
                        }

                        <h4 className="text-white">Role: {foundUser.role}</h4>
                    </div>
                </div>

                <img 
                    src="/svg/edit.svg" 
                    alt="edit" 
                    className="absolute top-4 right-4 w-6 h-6" 
                />
            </div>

            <PostFeed />
        </div>
    )
}

export default ProfileContainer