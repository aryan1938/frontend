import { Link } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as qs from 'qs';
import Apiservices from "../Services/Apiservices";


export default function Login() {

    const [isDarkMode, setDarkMode] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [load, setLoad] = useState(false)
    const nav = useNavigate()

    const changeEmail = (event) => {
        setEmail(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
    }


    function handleform(e) {
        e.preventDefault()
        setLoad(true)

        let data = {
            Email: email,
            Password: password,
        }

        Apiservices.login(data).then(res => {
            localStorage.setItem('token',res.data.token)
            localStorage.setItem("UserType",res.data.data.UserType)
            if (res.data.success && res.data.data.UserType == 1) {
                toast.success(res.data.message)
                setTimeout(() => {
                    setLoad(false)
                    nav("/admin/alluser")
                }, 1500)
            } else if(res.data.success && res.data.data.UserType == 2){
                toast.success(res.data.message)
                setTimeout(() => {
                    setLoad(false)
                    nav("/posts")
                }, 1500)
            }else {
                toast.error(res.data.message)
                setLoad(false)
                nav('/')
            }
        }).catch(err => {
            console.log(err.message)
        })

    }


    const over = {
        display: "block",
        margin: "0 auto",
    }



    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 lg:border-solid border-white border-solid dark:bg-slate-800 pt-40">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                    <img className=" mx-auto h-12 w-12 rounded-full" src="https://i.pinimg.com/736x/f7/61/de/f761ded19a3cce8d4b75287000ca7ac8.jpg" alt="Your Company" />
                    <h2 className="dark:text-white mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div className="mt-10 pb-32 sm:mx-auto sm:w-full sm:max-w-sm">
                    <BeatLoader loading={load} color="red" size={100} cssOverride={over} />
                    <form className="space-y-6" onSubmit={handleform} >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={email} onChange={changeEmail} />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Password</label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500 ">Forgot password?</a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={password} onChange={changePassword} />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?
                        <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register</Link>
                    </p>
                </div>
            </div>

        </>
    )
}