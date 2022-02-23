import React, { useState } from "react"
import { testFriends } from "../data/friendData";
import Friend from "./Friend";

function RightSidebar() {
    const [renderAmount, setRenderAmount] = useState(10);

    const renderMore = () => {
        if(testFriends.length < renderAmount + 10){
            setRenderAmount(testFriends.length);
        }else{
            setRenderAmount(renderAmount + 10);
        }
    }

    return (
        <div className="w-64 p-2 bg-white flex items-start flex-col">
            <h3 className="mb-20">Friends</h3>

            {
                testFriends.slice(0, renderAmount).map((f, i) => {
                    return (
                        <Friend 
                            key={i}
                            data={f}
                        />
                    )
                })
            }

            {
                testFriends.length > renderAmount && (
                    <div className="w-full items-center justify-center flex mt-4">
                        <p 
                            className="text-rtkBlue cursor-pointer"
                            onClick={() => renderMore()}    
                        >load more</p>
                    </div>
                )
            }
        </div>
    )
}

export default RightSidebar