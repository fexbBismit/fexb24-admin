import React, { useEffect, useState } from "react";

const Tickets = ({ order }) => {
    const [ticketPrices, setTicketPrices] = useState()

    function getUnitPrice(namaTiket) {
        if (ticketPrices) {
            return ticketPrices[namaTiket]
        } else {
            return 0
        }
    }

    useEffect(() => { 
        var tickets = {}
        order.listPembeli.map((pembeli) => {
            var nama = pembeli.tipeTiket.namaTiket
            if (!tickets.nama) {
                tickets[nama] = pembeli.tipeTiket.harga
            }
        })
        setTicketPrices(tickets)
    }, [order])

    return (
        <div>
            <div className="detail-title">
                <h1 className="text-sm md:text-xl pl-1">Ticket(s)</h1>
            </div>
            <div className="py-4 text-xs md:text-sm">
                <div className="border border-drop rounded-2xl px-2 md:px-5 py-2 flex justify-center">
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
                            {Object.entries(order.tiketFrequency).map(([key, value]) => (
                            <tr className="text-2xs md:text-sm">
                                <td>{key}</td>
                                <td>x {value}</td>
                                <td>Rp {getUnitPrice(key).toLocaleString('id')},-</td>
                                <td>Rp {(value * getUnitPrice(key)).toLocaleString('id')},-</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-end">
                    <div className="w-8/12 sm:w-6/12 md:w-7/12 lg:w-2/4 py-2 px-1.5 total-box">
                        {/* <div className="flex justify-between space-x-2 py-2">
                            <p className="text-gray-darker font-bold">Payment Method</p>
                            <p className="text-right">{order.gateway}</p>
                        </div> */}
                        <div className="p-3 pt-0">
                            {/* <hr className="border bg-drop" /> */}
                            <div className="flex justify-between space-x-2 pt-2 pb-1">
                                <p>Sub Total</p>
                                <p className="text-right">Rp {order.totalPembayaran.toLocaleString('id')},-</p>
                            </div>
                            <div className="flex justify-between space-x-2 pt-1 pb-2">
                                <p>Discount</p>
                                <p className="text-right">Rp {(order.totalPembayaran - order.pembayaranSetelahDiskon).toLocaleString('id')},-</p>
                            </div>
                            <hr className="bg-drop border" />
                            <div className="flex justify-between space-x-2 font-bold py-2">
                                <p>Total</p>
                                <p className="text-right">Rp {order.pembayaranSetelahDiskon.toLocaleString('id')},-</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tickets;