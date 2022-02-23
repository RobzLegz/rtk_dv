import { useRouter } from 'next/router';
import React, { useState } from 'react'
import postData from '../data/postData';
import Post from './Post';

function PostFeed() {
    const router = useRouter();

    const [type] = useState(router.pathname);
    const [text, setText] = useState("");
    const [media, setMedia] = useState("");
    const [file, setFile] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const changeFile = (e: any) => {
        setError("");
        if(e.target.files && e.target.files[0]){
            const file = e.target.files[0];

            if(file.size > 1024 * 1024){
                return setError("File size too large!")
            }

            if(file.type !== "image/jpeg" && file.type !== "image/png"){
                return setError("Incorrect file format!")
            }

            setMedia(URL.createObjectURL(e.target.files[0]))
            setFile(e.target.files[0]);
        }
    }

    const createPost = () => {

    }

    return (
        <div className="w-[500px]">
            {
                type === "/" && (
                    <form className="bg-white w-full mb-4 rounded-md">
                        <textarea 
                            placeholder="Create a post"
                            name="post" 
                            id="post" 
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            cols={20} 
                            rows={6}
                            className="w-full rounded-t-md p-2"
                        ></textarea>

                        {
                            error && (
                                <div className="w-full p-2 bg-red-700 flex items-center justify-center">
                                    <p className="text-white">{error}</p>
                                </div>
                            )
                        }

                        <div className="w-full rounded-b-md flex items-end justify-end">
                            <input 
                                type="file" 
                                name="post_file" 
                                id="post_file" 
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => changeFile(e)}
                            />

                            <label 
                                htmlFor="post_file"
                                className="bg-rtkRed text-white h-10 w-20 md:w-36 cursor-pointer duration-200 flex items-center justify-center"
                            >
                                add file
                            </label>
                            <button
                                onClick={() => createPost}
                                type="submit"
                                className="bg-rtkBlue text-white h-10 w-20 md:w-36 cursor-pointer hover:bg-rtkBlue-darker duration-200 rounded-br-md"
                            >post</button>
                        </div>
                    </form>
                )
            }

            <div className="bg-white p-2 w-full rounded-md">
                {
                    postData.map((p, i) => {
                        return (
                            <Post 
                                key={i}
                                data={p}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PostFeed