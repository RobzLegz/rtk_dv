import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { PostInterface } from '../interfaces/postInterface';
import { UserInterface } from '../interfaces/userInterface';
import getUserById from '../logic/getUserById';
import { selectUser, UserInfo } from '../redux/slices/userSlice';

interface Props{
    data: PostInterface;
}

const Post: React.FC<Props> = ({data}) => {
    const userInfo: UserInfo = useSelector(selectUser);

    const router = useRouter();

    const [postUser, setPostUser] = useState<UserInterface | null>(null);

    useEffect(() => {
        if(!postUser && userInfo.users && userInfo.info){
            setPostUser(getUserById(userInfo.users, userInfo.info._id));
        }
    }, [userInfo.users, postUser, userInfo.info]);

    if(!postUser || !userInfo.info || !data){
        return null;
    }

    return (
        <div className="w-full p-2 flex flex-col border-b-2 border-slate-100">
            <div 
                className="flex items-center cursor-pointer mb-2"
                onClick={() => router.push(`/u/${postUser.username}`)}
            >
                <img 
                    src={postUser.avatar} 
                    alt={`${postUser.username}'s RTK avatar`} 
                    className="w-10 h-10 object-cover mr-2"
                />

                <div className="flex flex-col items-start">
                    <h4>{postUser.username}</h4>
                    <p>{postUser.name}</p>
                </div>
            </div>

            <p>{data.text}</p>

            {
                data.media && (
                    <img 
                        src={data.media} 
                        alt={data.text} 
                        className="w-full mt-2"
                    />
                )
            }

            <div className="flex mt-4 items-center">
                <img 
                    src="/svg/heart.svg" 
                    alt="white heart with black outline"
                    className="w-7 h-7 mr-1 cursor-pointer"
                />

                <p>{data.likes.length}</p>
            </div>
        </div>
    )
}

export default Post