import React from "react";

const LoadingScreen = () => {
    return (
        <div className="bg-[url('../public/assets/bg-login.png')] h-screen items-center flex justify-center p-2">
            <div className="relative">
                <p className="text-center text-white font-bold text-3xl">Loading...</p>
                <br />
                <div class="loader"></div>
                <img src='/assets/loading.svg' alt="" className="absolute load-img" />
            </div>
        </div>
    )
}

export default LoadingScreen;