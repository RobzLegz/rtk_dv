import React from 'react'

function LeftSidebar() {
    return (
        <div className="bg-white p-2 rounded-r-md">
            <h3 className="mb-2">Topics</h3>

            <div className="flex items-center justify-center w-60 cursor-pointer">
                <div className="flex-1 h-[1px] bg-slate-500"></div>

                <p>RTK kojas</p>

                <div className="flex-1 h-[1px] bg-slate-500"></div>
            </div>
        </div>
    )
}

export default LeftSidebar