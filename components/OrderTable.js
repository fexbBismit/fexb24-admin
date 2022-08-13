import Link from "next/link";
import React from "react";
import formatDate from "../util/formatDate";

const OrderTable = ( {orders, filter, searchBy, searchInput} ) => {

    return (
        <div className="table-wrapper">
            <table className=" text-2xs md:text-sm w-full header-fixed" id="order-table">
                <thead className="bg-gray-light">
                    <tr className="text-purple">
                        <th className=""></th>
                        <th className="">ORDER ID</th>
                        <th className="">STATUS</th>
                        <th className="">ORDER DATE</th>
                        <th className="">CUSTOMER</th>
                        <th className="hide-mobile">TICKET(S)</th>
                        <th className="hide-mobile">GATEWAY</th>
                        <th className="hide-mobile">DISCOUNT</th>
                        <th className="hide-mobile">TOTAL</th>
                        <th className=""></th>
                    </tr>
                </thead>
                <tbody className="border border-gray">
                    {orders.map(order => (
                        <>
                        {(filter === null || filter === order.status) && ((searchBy === null && order.orderId.toLowerCase().includes(searchInput.toLowerCase())) || (searchBy !== null && order.customer.toLowerCase().includes(searchInput.toLowerCase()))) &&
                        <tr>
                            <td className="w-6 md:w-9 ">
                            <label className="container-check">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            </td>
                            <td className="font-bold">{order.orderId}</td>
                            <td>
                                {order.status === 'Paid' && <div className="btn-status border-paid-out text-paid bg-paid-in w-full">{order.status}</div>}
                                
                                {order.status === 'Waiting' && <div className="btn-status border-wait-out text-wait bg-wait-in w-full">{order.status}</div>}
                                
                                {order.status === 'Cancelled' && <div className="btn-status border-cancel text-cancel bg-cancel-in w-full">{order.status}</div>}
                            </td>
                            <td className="md:w-24">{formatDate(order.date)}</td>
                            <td className="font-bold">{order.customer}</td>
                            <td className="font-bold hide-mobile w-36"><p><span className="text-purple">FExB FEBUI 2022</span> x {order.ticket}</p></td>
                            <td className="hide-mobile">{order.gateway}</td>
                            <td className="hide-mobile">Rp {order.discount.toLocaleString('id')}</td>
                            <td className="font-bold hide-mobile">Rp {order.total.toLocaleString('id')}</td>
                            <td><Link href={'/detail/' + order.id}><button className="btn-lavender rounded md:rounded-3xl px-1 md:px-3 py-1 md:py-2 md:w-24 text-xs font-semibold">
                                <span className="hide-mobile">See Details</span>
                                <div className="md:hidden">
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.125 5.875V0.875H7.125L9.18125 2.93125L2.93125 9.18125L0.875 7.125V12.125H5.875L3.81875 10.0687L10.0687 3.81875L12.125 5.875Z" fill="white"/>
                                    </svg>
                                </div>
                                </button></Link>
                            </td>
                        </tr>}</>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default OrderTable;