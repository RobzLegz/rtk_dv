import { useRouter } from "next/router";
import React, { useState } from "react"

function Navigation() {
    const router = useRouter();

    const [type] = useState(router.pathname);

    if(type === "/auth/login" || type === "/auth/register"){
        return (
            <nav className="w-full h-14 flex items-center justify-between px-5 fixed top-0 left-0">
                <h1>RTK dzīve</h1>
            </nav>
        )
    }
    
    return (
        <nav className="w-full h-14 flex items-center justify-between px-5 fixed top-0 left-0">
            <h1>RTK dzīve</h1>
        </nav>
    )
}

export default Navigation