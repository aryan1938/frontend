import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Apiservices from "../Services/Apiservices";

export default function Register() {

    const [userName, setUserName] = useState()
    const [profilePic, setProfilePic] = useState()
    const [profilePicName, setProfilePicName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const changeUserName = (e) => {
        setUserName(e.target.value)
    }

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    const Image = (e)=>{
        setProfilePic(e.target.files[0])
        setProfilePicName(e.target.value)
    }

    function handleform(e) {
        e.preventDefault()

        let data = new FormData()
        data.append('Username', userName)
        data.append('Email',email)
        data.append('Password', password)
        data.append('ProfilePicture', profilePic)

        Apiservices.register(data).then(res=>{
            console.log(res.data.data);
        }).catch(err=>{
            console.log(err.message);
        })
    }


    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 lg:border-solid border-white border-solid dark:bg-slate-800  pt-40">
                {/* <button onClick={click} className="ml-auto text-cyan-600 dark:bg-slate-800  py-1 rounded-full ">
                    {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                </button> */}
                <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                    {/* <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}
                    <h2 className="dark:text-white mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up to your account</h2>
                </div>

                <div className="mt-10 pb-32 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleform}>
                        <div>
                            <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Username</label>
                            <div className="mt-2">
                                <input id="email" name="text" type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={userName}  onChange={changeUserName} />
                            </div>
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload profil picture</label>
                            <div className="mt-2">
                                <input class="block w-full text-sm text-gray-900 border  rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" value={profilePicName} onChange={Image}/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={email} onChange={changeEmail} />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Password</label>
                                {/* <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500 ">Forgot password?</a>
                                </div> */}
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={password} onChange={changePassword} />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                        </div>
                    </form>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already an user ? &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</Link>
                    </p>
                </div>
            </div>

        </>
    )
}