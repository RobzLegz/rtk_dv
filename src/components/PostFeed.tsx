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
                cols={30} 
                rows={10}
                className="w-full rounded-t-md p-2"
            ></textarea>

            <div className="w-full"></div>
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