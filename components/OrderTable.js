import Link from "next/link";
import React, { useEffect } from "react";
import formatDate from "../util/formatDate";

const OrderTable = ( {sortBy, orders, setCurrentPage, isFetching} ) => {

    function saveCheckedState() {
        var sorter = document.getElementById('sort')
        if (sortBy) {
            sorter.checked = true
        } else {
            sorter.checked = false
        }
    }

    function scrollToTop() {
        if (orders.length > 0) {
            const tbody = document.querySelectorAll('tbody')[0]
            tbody.scrollTop = 0
        }
    }

    function getTicketFrequency(order) {
        var namaTiket = order.listPembeli[0].tipeTiket.namaTiket;
        return order.tiketFrequency[namaTiket]
    }

    useEffect(() => {
        if (orders.length === 0) {
            setCurrentPage(0)
        }
        scrollToTop()
        saveCheckedState()
    }, [orders])

    return (
        <div>{orders.length > 0? 
            <div className="table-wrapper">
                <table className=" text-2xs md:text-sm w-full header-fixed" id="order-table">
                    <thead className="bg-gray-light">
                        <tr className="text-purple">
                            <th className="">ORDER ID</th>
                            <th className="">STATUS</th>
                            <th className="">ORDER DATE</th>
                            <th className="">CUSTOMER</th>
                            <th className="hide-mobile">TICKET(S)</th>
                            <th className="hide-mobile">DISCOUNT</th>
                            <th className="hide-mobile">TOTAL</th>
                            <th className=""></th>
                        </tr>
                    </thead>
                    <tbody className="border border-gray">
                        {isFetching?
                        <tr className="overflow-x-hidden">
                            <td colSpan="9" className="fetching">
                                <div className="flex justify-center w-full py-10">
                                    <div className="justify-items-center">
                                        <img src='/assets/loading.svg' alt="" className="h-36 display-block mx-auto -mt-5" />
                                        <p className="text-purple text-sm text-center font-semibold -mt-3">Loading...</p>
                                    </div>
                                </div>
                            </td>
                        </tr>:
                        <>{orders.map(order => (
                            <tr>
                                <td className="font-bold">{order.id}</td>
                                <td>
                                    {order.paymentId !== null && <div className="btn-status border-paid-out text-paid bg-paid-in w-full"><span className="px-3">Paid</span></div>}
                                    
                                    {order.paymentId === null && <div className="btn-status border-wait-out text-wait bg-wait-in w-full"><span className="px-3">Waiting</span></div>}
                                </td>
                                <td className="md:w-24">{formatDate(new Date(order.createdAt))}</td>
                                <td className="font-bold"><p>{order.listPembeli[0].nama}{order.listPembeli.length > 1 && <>, <p className="text-purple">and others</p></>}</p></td>
                                <td className="font-bold hide-mobile w-36"><p><span className="text-purple">{order.listPembeli[0].tipeTiket.namaTiket}</span> x {getTicketFrequency(order)}{order.listPembeli.length > 1 && <>,<span className="text-purple"> ...</span></>}</p></td>
                                <td className="hide-mobile">Rp {(order.totalPembayaran - order.pembayaranSetelahDiskon).toLocaleString('id')}</td>
                                <td className="font-bold hide-mobile">Rp {order.totalPembayaran.toLocaleString('id')}</td>
                                <td><Link href={'/detail/' + order.id}><button className="btn-lavender rounded md:rounded-3xl px-1 md:px-3 py-1 md:py-2 md:w-24 text-xs font-semibold">
                                    <span className="hide-mobile">See Details</span>
                                    <div className="md:hidden">
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.125 5.875V0.875H7.125L9.18125 2.93125L2.93125 9.18125L0.875 7.125V12.125H5.875L3.81875 10.0687L10.0687 3.81875L12.125 5.875Z" fill="white"/>
                                        </svg>
                                    </div>
                                    </button></Link>
                                </td>
                            </tr>
                        ))}</>}
                    </tbody>
                </table>
            </div>
            :
            <div className="flex justify-center w-full py-12">
                <div className="justify-items-center">
                <img src='/assets/no-item.svg' alt="" className="h-32 display-block mx-auto" />
                <p className="text-lavender text-sm pt-3 font-semibold">No order has been recorded yet</p>
                </div>
            </div>
            }
        </div>
    )
}

export default OrderTable;