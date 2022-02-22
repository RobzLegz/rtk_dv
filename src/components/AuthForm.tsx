import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const AuthForm: React.FC = () => {
    const router = useRouter();

    const [type] = useState(router.pathname);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const authorize = (e: any) => {
        e.preventDefault();
    }   

    return (
        <div className="flex items-center justify-center w-full p-0 h-full">
            <form className="w-11/12 max-w-[350px] bg-white flex flex-col items-center rounded-lg py-4 px-4">
                <h2 className="mb-4">{type === "/auth/login" ? "Login" : "Register"}</h2>

                {
                    type === "/auth/register" && (
                        <div className="flex flex-col w-full mb-4">
                            <label className="mb-1">Name</label>

                            <input 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="h-8"                        
                                type="text" 
                                placeholder="name"
                                name="name" 
                                id="name" 
                            />
                        </div>
                    )
                }

                <div className="flex flex-col w-full mb-4">
                    <label className="mb-1">E-mail</label>

                    <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-8"                        
                        type="email" 
                        placeholder="email"
                        name="email" 
                        id="email" 
                    />
                </div>

                <div className="flex flex-col w-full mb-4">
                    <label className="mb-1">Password</label>

                    <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-8"                        
                        type="password" 
                        placeholder="password"
                        name="password" 
                        id="password" 
                    />
                </div>

                <button 
                    onClick={(e) => authorize(e)}
                    className="outline-green-600 rounded-full bg-green-600 text-white hover:bg-green-700 mb-4 w-full h-12"
                    type="submit"
                >{type === "/auth/login" ? "Login" : "Register"}</button>

                <div className="flex flex-row w-full justify-between">
                    <div className="flex items-center">
                        <p>{type === "/auth/login" ? "Dont have an account?" : "Already have an account?"}</p>

                        <button>
                            <Link href={type === "/auth/login" ? "/auth/register" : "/auth/login"}>
                                <p className="text-green-600">{type === "/auth/login" ? "Register" : "Login"}</p>
                            </Link>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AuthForm;