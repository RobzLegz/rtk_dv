import React from 'react'
import LeftSidebar from './LeftSidebar';
import PostFeed from './PostFeed';
import RightSidebar from './RightSidebar';

function HomeContainer() {
  return (
    <div className="w-full flex items-start justify-between h-full pt-20">
        <LeftSidebar />

        <PostFeed />

        <RightSidebar />
    </div>
  )
}

export default HomeContainer