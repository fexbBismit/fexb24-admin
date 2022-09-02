import React, { useEffect } from "react";

const Alert = ({ message, success, showAlert, setShowAlert }) => {


    function handleClose() {
        fadeOutEffect()
        setTimeout(resetAlert, 2000)
        setShowAlert(false)
    }
    
    function fadeOutEffect() {
        var fadeTarget = document.getElementById("alert");
        var fadeEffect = setInterval(function () {
            if (!fadeTarget.style.opacity) {
                fadeTarget.style.opacity = 1;
            }
            if (fadeTarget.style.opacity > 0) {
                fadeTarget.style.opacity -= 0.05;
            } else {
                if (fadeTarget.style.opacity === 0) {
                    resetAlert()
                }
                clearInterval(fadeEffect);
            }
        }, 50);
    }

    function resetAlert() {
        var alert = document.getElementById("alert");
        alert.style.marginTop = '-6rem'
        alert.style.opacity = 1
    }

    useEffect(() => {
        if (showAlert) {
            setTimeout(fadeOutEffect, 7000)
            setTimeout(resetAlert, 9000)
        } else {
            setShowAlert()
        }
    }, [showAlert]);

    return (
        <div className="absolute -mt-24 position-sticky text-white w-screen px-2 flex justify-center" id="alert">
            <div className={(success? "bg-success":"bg-modal-red") + " px-4 py-3 rounded z-10 w-full sm:w-2/4 md:w-4/12 relative"}>
                <div className="flex items-start space-x-3">
                    <img src={'/assets/'+ (success? 'alert-success':'alert-error') + '.svg'} alt="" className="h-3.5" />
                    <div className="text-xs space-y-0.5">
                        <p className="font-bold">{message[0]}</p>
                        <p>{message[1]}</p>
                    </div>
                </div>
                <span className="absolute text-xl top-0 bottom-0 right-0 px-3 py-0.5"><p className="cursor-pointer" onClick={handleClose}>&times;</p></span>
            </div>
        </div>
    )
}

export default Alert;