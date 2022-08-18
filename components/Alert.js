import React, { useEffect } from "react";

const Alert = ({ message }) => {
    
    function fadeOutEffect() {
        var fadeTarget = document.getElementById("alert");
        var fadeEffect = setInterval(function () {
            if (!fadeTarget.style.opacity) {
                fadeTarget.style.opacity = 1;
            }
            if (fadeTarget.style.opacity > 0) {
                fadeTarget.style.opacity -= 0.05;
            } else {
                clearInterval(fadeEffect);
            }
        }, 50);
    }

    useEffect(() => {
        setTimeout(fadeOutEffect, 7000)
    }, []);

    return (
        <div className="absolute -mt-24 position-sticky text-white w-screen px-2 flex justify-center" id="alert">
            <div className="bg-success px-4 py-3 rounded z-10 w-full sm:w-2/4 md:w-4/12 relative">
                <div className="flex items-start space-x-3">
                    <img src='/assets/alert-success.svg' alt="" className="h-3.5" />
                    <div className="text-xs space-y-0.5">
                        <p className="font-bold">{message[0]}</p>
                        <p>{message[1]}</p>
                    </div>
                </div>
                <span className="absolute text-xl top-0 bottom-0 right-0 px-3 py-0.5"><p className="cursor-pointer" onClick={fadeOutEffect}>&times;</p></span>
            </div>
        </div>
    )
}

export default Alert;