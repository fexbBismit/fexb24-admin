import { Router, useRouter } from "next/router";
import React, { useState } from "react"
import Alert from "../components/Alert";
import slideInAlert from "../util/slideInAlert";
import axios from "axios";

export default function Login() {
    const router = useRouter()
    const [showPwd, setShowPwd] = useState(false);
    function togglePwd(e) {
        e.preventDefault();
        var show = !showPwd;
        setShowPwd(show);
    }

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [errorCode, setErrorCode] = useState()
    const [message, setMessage] = useState(['',''])
    const [showAlert, setShowAlert] = useState()

    const handleLogin = async () => {
        setLoading(true)
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        
        const data = JSON.stringify({
            'username': username,
            'password': password
        })

        try {
            var response = await axios.post('https://api.staging.fexbfebui.site/admin/login', data, config)
            localStorage.setItem('token', response.data['jwt'])
            setSuccess(true)
            setMessage(['Login successful!', 'Welcome, admin!'])
            setShowAlert(true)
            slideInAlert()
            localStorage.setItem('username', username)
            setTimeout(redirectToHome, 2000)
        }
        catch (err) {
            console.log(err)
            if (err.response?.status === 401) {
                if (err.response.data['reason']['message'].includes("password")) {
                setErrorCode(2)
                }
            } else {
                if (err.response.data?.reason?.message.includes("not exist")) {
                    setErrorCode(1)
                } else {
                    setMessage(['Login failed.', 'Error occured. Please try again.'])
                    setShowAlert(true)
                    slideInAlert()
                }
            }
            setLoading(false)
        }
    }
    function redirectToHome() {
        router.push('/')
    }

    return (
        <div id="login">
            <Alert message={message} success={success} showAlert={showAlert} setShowAlert={setShowAlert} />
            <div className="bg-[url('../public/assets/bg-login.png')] h-screen items-center flex justify-center p-2">
                <div className="bg-white rounded-3xl max-w-md max-h-fit p-10 text-center shadow-2xl">
                    <div className="flex justify-center pb-6">
                        <img src={'assets/logo.png'} alt="" objectFit="cover" className="h-12"/>
                    </div>
                    <div className="title">ADMIN LOGIN PANEL</div>
                    <h3>Welcome Back!</h3>
                    <div className="pt-9 pb-12">
                        <form className="space-y-4">
                            <input id="username" type="text" placeholder="Enter your username *" className={errorCode === 1 && "error"} />
                            <input id="password" type={showPwd?"text":"password"} placeholder="Enter your password *" className={"relative" + (errorCode === 2 && ' error')} />
                            <span className="pt-1.5 absolute">
                                <button className="btn-pwd -ml-12" onClick={(e) => togglePwd(e)}>
                                    <img src={showPwd? "/assets/show-pwd.svg":"/assets/hide-pwd.svg"} className="h-3.5" alt=""/>
                                </button>
                            </span>
                        </form>
                        {errorCode && <div className="text-error text-xs text-left pt-2 pl-12 absolute flex items-end"><p className="pr-1">Incorrect username or password.</p><img src='/assets/question-circle.svg' alt="" className="question" /></div>}
                    </div>
                    <div className="p-1.5">
                        <button type="submit" disabled={loading} className="btn-lavender text-sm rounded-2xl py-2 px-16 font-bold disabled:bg-lavender-light" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  