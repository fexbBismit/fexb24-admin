import React from "react";

const Tickets = ({ order }) => {
    return (
        <div>
            <div className="bg-purple-lighter flex justify-between items-center w-full rounded-xl py-2 font-bold px-4">
                <h1 className="text-xl pl-1">Ticket(s)</h1>
            </div>
            <div className="py-4 text-sm">
                <div className="border border-drop rounded-2xl px-5 py-1 flex justify-center">
                    <table className="ticket-table text-center">
                        <thead className="font-bold">
                            <tr>
                                <td>Ticket(s) Name</td>
                                <td>Quantity</td>
                                <td>Unit Price</td>
                                <td>Total Price</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>FExB FEBUI 2022</td>
                                <td>x {order.ticket}</td>
                                <td>Rp {(order.total / order.ticket).toLocaleString('id')},-</td>
                                <td>Rp {order.total.toLocaleString('id')},-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-end">
                    <div className="md:w-7/12 lg:w-2/4 py-2 px-1.5">
                        <div className="flex justify-between py-2">
                            <p className="text-gray-darker font-bold">Payment Method</p>
                            <p className="text-right">{order.gateway}</p>
                        </div>
                        <div className="p-3 pt-0">
                            <hr className="border bg-drop" />
                            <div className="flex justify-between pt-2 pb-1">
                                <p>Sub Total</p>
                                <p className="text-right">Rp {order.total.toLocaleString('id')},-</p>
                            </div>
                            <div className="flex justify-between pt-1 pb-2">
                                <p>Discount</p>
                                <p className="text-right">Rp {order.discount.toLocaleString('id')},-</p>
                            </div>
                            <hr className="bg-drop border" />
                            <div className="flex justify-between font-bold py-2">
                                <p>Total</p>
                                <p className="text-right">Rp {(order.total - order.discount).toLocaleString('id')},-</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tickets;