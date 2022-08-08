import React from "react";

const OrderTable = () => {
    const orders = [
        {
            'id':'400CBDF7EF',
            'status': 'Paid',
            'date': new Date('2022-01-28T23:50:21.817Z'),
            'customer': 'Maria Lietania Sampoerna',
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'total': 10200000,
        },
        {
            'id':'400CBDF7EG',
            'status': 'Cancelled',
            'date': '2022-01-28T23:50:21.817Z',
            'customer': 'Maria Lietania Sampoerna',
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'total': 10200000,
        },
        {
            'id':'400CBDF7EG',
            'status': 'Waiting',
            'date': '2022-01-28T23:50:21.817Z',
            'customer': 'Maria Lietania Sampoerna',
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'total': 10200000,
        },
        {
            'id':'400CBDF7EF',
            'status': 'Paid',
            'date': new Date('2022-01-28T23:50:21.817Z'),
            'customer': 'Maria Lietania Sampoerna',
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'total': 10200000,
        },
        {
            'id':'400CBDF7EG',
            'status': 'Cancelled',
            'date': '2022-01-28T23:50:21.817Z',
            'customer': 'Maria Lietania Sampoerna',
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'total': 10200000,
        },
        {
            'id':'400CBDF7EG',
            'status': 'Waiting',
            'date': '2022-01-28T23:50:21.817Z',
            'customer': 'Maria Lietania Sampoerna',
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'total': 10200000,
        },
    ]

    function formatMin10(num) {
        if (num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }

    function formatAMPM(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();    
        const ampm = hours >= 12 ? 'pm' : 'am';
      
        hours %= 12;
        hours = hours || 12;    
        minutes = minutes < 10 ? `0${minutes}` : minutes;
      
        const strTime = `${hours}.${minutes} ${ampm}`;
      
        return strTime;
    }

    function formatDate(date) {
        return formatMin10(date.getDate()) + '/' + formatMin10(date.getMonth()) + '/' + date.getFullYear() + ' ' + formatAMPM(date);
    }

    return (
        <div className="table-wrapper">
            <table className=" text-2xs md:text-sm w-full header-fixed" id="order-table">
                <thead className="bg-gray-light">
                    <tr className="text-purple" valign="middle">
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
                <tbody className="border border-gray align-bottom">
                    {orders.map(order => (
                        <tr>
                            <td className="w-6 md:w-9 ">
                            <label className="container-check">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            </td>
                            <td className="font-bold">{order.id}</td>
                            <td>
                                {order.status === 'Paid' && <div className="btn-status border-paid-out text-paid bg-paid-in">{order.status}</div>}
                                
                                {order.status === 'Waiting' && <div className="btn-status border-wait-out text-wait bg-wait-in">{order.status}</div>}
                                
                                {order.status === 'Cancelled' && <div className="btn-status border-cancel text-cancel bg-cancel-in">{order.status}</div>}
                            </td>
                            <td className="md:w-24">{formatDate(new Date())}</td>
                            <td className="font-bold">{order.customer}</td>
                            <td className="font-bold hide-mobile w-36"><span className="text-purple">FExB FEBUI 2022</span> x {order.ticket}</td>
                            <td className="hide-mobile">{order.gateway}</td>
                            <td className="hide-mobile">Rp {order.discount.toLocaleString('id')}</td>
                            <td className="font-bold hide-mobile">Rp {order.total.toLocaleString('id')}</td>
                            <td><button className="btn-lavender rounded md:rounded-3xl px-1 md:px-3 py-1 md:py-2 md:w-24 text-xs font-semibold">
                                <span className="hide-mobile">See Details</span>
                                <div className="md:hidden">
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.125 5.875V0.875H7.125L9.18125 2.93125L2.93125 9.18125L0.875 7.125V12.125H5.875L3.81875 10.0687L10.0687 3.81875L12.125 5.875Z" fill="white"/>
                                    </svg>
                                </div>
                                </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default OrderTable;