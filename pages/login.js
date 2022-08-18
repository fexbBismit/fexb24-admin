import React, { useState } from "react"

export default function Login() {
    const [showPwd, setShowPwd] = useState(false);
    function togglePwd(e) {
        e.preventDefault();
        var show = !showPwd;
        setShowPwd(show);
    }

    const [loading, setLoading] = useState(false)
    const [errorCode, setErrorCode] = useState()

    return (
        <div id="login">
            <div className="bg-[url('../public/assets/bg-login.png')] h-screen items-center flex justify-center p-2">
                <div className="bg-white rounded-3xl max-w-md max-h-fit p-10 text-center shadow-2xl">
                    <div className="flex justify-center pb-6">
                        <img src={'assets/logo.png'} alt="" objectFit="cover" className="h-12"/>
                    </div>
                    <div className="title">ADMIN LOGIN PANEL</div>
                    <h3>Welcome Back!</h3>
                    <div className="pt-9 pb-12">
                        <form className="space-y-4">
                            <input type="text" placeholder="Enter your email *" className={errorCode === 1 && "error"} />
                            <input type={showPwd?"text":"password"} placeholder="Enter your password *" className={"relative" + (errorCode === 2 && ' error')} />
                            <span className="pt-1.5 absolute">
                                <button className="btn-pwd -ml-12" onClick={(e) => togglePwd(e)}>
                                    <img src={showPwd? "/assets/show-pwd.svg":"/assets/hide-pwd.svg"} className="h-3.5" alt=""/>
                                </button>
                            </span>
                        </form>
                        {errorCode && <div className="text-error text-xs text-left pt-2 pl-12 absolute flex items-end"><p className="pr-1">Incorrect email or password.</p><img src='/assets/question-circle.svg' alt="" className="question" /></div>}
                    </div>
                    <div className="p-1.5">
                        <button type="submit" disabled={loading} className="btn-lavender text-sm rounded-2xl py-2 px-16 font-bold disabled:bg-lavender-light">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  