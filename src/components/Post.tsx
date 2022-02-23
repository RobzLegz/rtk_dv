import { useRouter } from 'next/router';
import React from 'react'

interface Post{
    text: string;
    media: string;
    avatar: string;
    username: string;
    name: string;
    likes: number;
}

interface Props{
    data: Post;
}

const Post: React.FC<Props> = ({data}) => {
    const router = useRouter();

    return (
        <div className="w-full p-2 flex flex-col border-b-2 border-slate-100">
            <div 
                className="flex items-center cursor-pointer mb-2"
                onClick={() => router.push(`/u/${data.username}`)}
            >
                <img 
                    src={data.avatar} 
                    alt={`${data.username}'s RTK avatar`} 
                    className="w-10 h-10 object-cover mr-2"
                />

                <div className="flex flex-col items-start">
                    <h4>{data.username}</h4>
                    <p>{data.name}</p>
                </div>
            </div>

            <p>{data.text}</p>

            {
                data.media && (
                    <img 
                        src={data.media} 
                        alt={data.text} 
                        className="w-full"
                    />
                )
            }

            <div className="flex mt-4 items-center">
                <img 
                    src="/svg/heart.svg" 
                    alt="white heart with black outline"
                    className="w-7 h-7 mr-1"
                />

                <p>{data.likes}</p>
            </div>
        </div>
    )
}

export default Post