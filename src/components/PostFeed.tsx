import React from 'react'
import postData from '../data/postData';
import Post from './Post';

function PostFeed() {
  return (
    <div className="w-[500px]">
        <div className="bg-white w-full mb-4">

        </div>

        <div className="bg-white p-2 w-full">
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