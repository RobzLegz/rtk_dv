import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser, UserInfo } from '../redux/slices/userSlice';

function EditProfilePopup() {
    const userInfo: UserInfo = useSelector(selectUser);

    const [name, setName] = useState(userInfo.info?.name);
    const [email, setEmail] = useState(userInfo.info?.email);
    const [username, setUsername] = useState(userInfo.info?.username);
    const [uploadFile, setUploadFile] = useState<any>(null);
    const [avatar, setAvatar] = useState(userInfo.info?.avatar);
    const [course, setCourse] = useState(userInfo.info?.course);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    if(!userInfo.info){
        return null;
    }

    return (
        <div className="absolute top-0 left-0 z-40 w-full h-full bg-tpBg flex items-center justify-center">
            <form className="bg-white flex py-5 px-40 flex-col items-center justify-center">
                <h2 className="mb-10">Edit profile</h2>

                <div className="flex">
                    <input 
                        type="file" 
                        name="avatar" 
                        id="avatar" 
                        className="hidden"
                        accept="image/*"
                    />

                    <label htmlFor="avatar">
                        <img 
                            src={avatar} 
                            alt={`${username}'s RTK profile avatar`}
                            className="w-[70px] sm:w-[90px] h-[110px] sm:h-[130px] object-cover mr-10 hover:opacity-75 duration-75"
                        />
                    </label>

                    <div className="">
                        <div className="flex flex-col w-full mb-4">
                            <label htmlFor="username" className="mb-1">Username</label>

                            <input 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="h-11"                        
                                type="text" 
                                placeholder="username"
                                name="username" 
                                id="username" 
                            />
                        </div>

                        <div className="flex flex-col w-full mb-4">
                            <label htmlFor="name" className="mb-1">name</label>

                            <input 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="h-11"                        
                                type="text" 
                                placeholder="name"
                                name="name" 
                                id="name" 
                            />
                        </div>

                        <div className="flex flex-col w-full mb-4">
                            <label htmlFor="email" className="mb-1">Email</label>

                            <input 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-11"                        
                                type="text" 
                                placeholder="email"
                                name="email" 
                                id="email" 
                            />
                        </div>

                        <div className="flex flex-col w-full mb-4">
                            <label htmlFor="course" className="mb-1">Course</label>

                            <input 
                                value={course}
                                onChange={(e) => setCourse(e.target.value)}
                                className="h-11"                        
                                type="text" 
                                placeholder="course"
                                name="course" 
                                id="course" 
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-rtkBlue text-white h-10 w-20 md:w-36 cursor-pointer hover:bg-rtkBlue-darker duration-200 rounded-br-md"
                        >Update</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditProfilePopup