import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import BuyerInfo from "../../components/BuyerInfo";
import Tickets from "../../components/Tickets";
import formatDate from "../../util/formatDate";
import Navbar from "../../components/Navbar";
import LoadingScreen from "../../components/LoadingScreen";
import Alert from "../../components/Alert";
import slideInAlert from "../../util/slideInAlert";
import axios from 'axios'

export default function Detail() {
    const router = useRouter();

    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState({})

    const [success, setSuccess] = useState(false)
    const [message, setMessage] = useState(['',''])
    const [showAlert, setShowAlert] = useState()


    function styleStatusBtn(stat) {
        if (stat === 'Paid') {
            return 'border-paid-out text-paid bg-paid-in';
        } else if (stat === 'Cancelled') {
            return 'border-cancel text-cancel bg-cancel-in';
        } else {
            return 'border-wait-out text-wait bg-wait-in';
        }
    }

    function redirectToLogin() {
        router.push('/login')
    }
    
    const fetchOrderDetail = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-jwt': localStorage.getItem('token')
            }
        };
        try {
            var fetchedOrder = await axios.get('https://fexb-dev.herokuapp.com/api/order/' + router.query.id, config)
            console.log(fetchedOrder.data)
            setOrder(fetchedOrder.data)
            setLoading(false)
        }
        catch (err) {
            console.log(err)
            setMessage(['Fetch order detail failed', 'Error occured. Please try logging in again.'])
            slideInAlert()
            setShowAlert(true)
            localStorage.removeItem('username')
            setTimeout(redirectToLogin, 2000)
        }
    }

    useEffect(() => {
        if (router.isReady) {
            fetchOrderDetail()
        }
    }, [router.isReady])
    
    return (
        <div><Alert message={message} success={success} showAlert={showAlert} setShowAlert={setShowAlert} />
    {loading?<div><LoadingScreen /></div>:
        <>
        <Alert message={message} success={success} showAlert={showAlert} setShowAlert={setShowAlert} />
        <Navbar />
        <div className=" pt-4 md:pt-8 px-4 md:px-12 lg:px-20 justify-center detail-wrapper">
            <div className="md:grid md:grid-cols-2 md:gap-9">
                <div>
                    <div className="flex space-x-2 md:space-x-3">
                        <button className="bg-gray-dark rounded-xl flex items-center py-2 pr-3 px-2" onClick={() => router.back()}>
                            <img src="/assets/back.svg" alt="" className="h-6"/>
                        </button>
                        <div className="detail-title">
                            <div className="flex items-center w-full">
                                <span className="md:pl-1 text-sm md:text-xl">Order ID</span>
                                <span className="text-purple text-xs md:text-base pl-3">{order.id}</span> 
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between md:grid md:grid-cols-2 py-5 md:py-6 text-xs md:text-sm">
                        <div>
                            <p className="font-bold text-gray-darker pb-2">Order Date</p>
                            <p><b>{formatDate(new Date(order.createdAt))}</b></p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-darker pb-2">Status</p>
                            <div className={"btn-status relative w-24 md:w-28 border p-4 " + styleStatusBtn(order.paymentId?'Paid':'Waiting')}>
                                <p className="text-center">{order.paymentId?'Paid':'Waiting'}</p>
                            </div>
                        </div>
                    </div>
                    <div className="hide-mobile">
                        <Tickets order={order} />
                    </div>
                </div>
                <div>
                    <BuyerInfo listPembeli={order.listPembeli} />
                </div>
                <div className="md:hidden">
                    <Tickets order={order} />
                </div>
            </div>
        </div></>}
        </div>
    )
}