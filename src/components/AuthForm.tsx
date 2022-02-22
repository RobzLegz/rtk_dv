import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const AuthForm: React.FC = () => {
    const router = useRouter();

    const [type] = useState(router.pathname);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [studentId, setStudentId] = useState("");

    const authorize = (e: any) => {
        e.preventDefault();
    }   

    return (
        <div className="flex items-center justify-center w-full p-0 h-full">
            <form className="w-11/12 max-w-[350px] bg-white flex flex-col items-start rounded-lg py-4 px-4">
                <h2 className="mb-4">{type === "/auth/login" ? "Login" : "Register"}</h2>

                {
                    type === "/auth/register" && (
                        <div className="flex flex-col w-full mb-4">
                            <label className="mb-1">Name</label>

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
                    )
                }

                {
                    type === "/auth/register" && (
                        <div className="flex flex-col w-full mb-4">
                            <label className="mb-1">Email</label>

                            <input 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-11"                        
                                type="email" 
                                placeholder="email"
                                name="email" 
                                id="email" 
                            />
                        </div>
                    )
                }

                <div className="flex flex-col w-full mb-4">
                    <label className="mb-1">Username</label>

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

                {
                    type === "/auth/register" && (
                        <div className="flex flex-col w-full mb-4">
                            <label className="mb-1">Student id</label>

                            <input 
                                value={studentId}
                                onChange={(e) => setStudentId(e.target.value)}
                                className="h-11"                        
                                type="text" 
                                placeholder="student id"
                                name="student_id" 
                                id="student_id" 
                            />
                        </div>
                    )
                }

                <div className="flex flex-col w-full">
                    <label className="mb-1">Password</label>

                    <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-11"                        
                        type="password" 
                        placeholder="password"
                        name="password" 
                        id="password" 
                    />
                </div>

                <button 
                    onClick={(e) => authorize(e)}
                    className="outline-rtkBlue rounded-full bg-rtkBlue text-white my-10 w-full h-12 hover:bg-rtkBlue-darker duration-200"
                    type="submit"
                >{type === "/auth/login" ? "Login" : "Register"}</button>

                <div className="flex flex-row w-full justify-between">
                    <div className="flex items-center">
                        <p>{type === "/auth/login" ? "Dont have an account?" : "Already have an account?"}</p>

                        <Link href={type === "/auth/login" ? "/auth/register" : "/auth/login"}>
                            <strong className="text-rtkBlue cursor-pointer ml-1">{type === "/auth/login" ? "Register" : "Login"}</strong>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AuthForm;