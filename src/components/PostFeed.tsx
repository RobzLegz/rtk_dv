import React from 'react'
import postData from '../data/postData';
import Post from './Post';

function PostFeed() {
    return (
        <div className="w-[500px]">
            <form className="bg-white w-full mb-4 rounded-md">
                <textarea 
                    placeholder="Create a post"
                    name="post" 
                    id="post" 
                    cols={20} 
                    rows={6}
                    className="w-full rounded-t-md p-2"
                ></textarea>

                <div className="w-full rounded-b-md flex items-end justify-end">
                    <input 
                        type="file" 
                        name="post_file" 
                        id="post_file" 
                        className="hidden"
                        accept="image/*"
                    />

                    <label 
                        htmlFor="post_file"
                        className="bg-rtkRed text-white h-10 w-20 md:w-36 cursor-pointer duration-200 flex items-center justify-center"
                    >
                        add file
                    </label>
                    <button
                        type="submit"
                        className="bg-rtkBlue text-white h-10 w-20 md:w-36 cursor-pointer hover:bg-rtkBlue-darker duration-200 rounded-br-md"
                    >post</button>
                </div>
            </form>

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