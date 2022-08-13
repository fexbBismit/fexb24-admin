import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import BuyerInfo from "../../components/BuyerInfo";
import Tickets from "../../components/Tickets";
import { Menu, Transition } from '@headlessui/react'
import formatDate from "../../util/formatDate";

export default function Detail() {
    const router = useRouter();
    console.log(router.query.id);
    const [isEditing, setIsEditing] = useState(false);


    function styleStatusBtn(stat) {
        if (stat === 'Paid') {
            return 'border-paid-out text-paid bg-paid-in';
        } else if (stat === 'Cancelled') {
            return 'border-cancel text-cancel bg-cancel-in';
        } else {
            return 'border-wait-out text-wait bg-wait-in';
        }
    }

    function editOrderId() {
        var inputId = document.getElementById('edit-id');
        console.log(inputId);
    }

    const order = 
        {
            'id':1,
            'orderId':'400CBDF7EF',
            'status': 'Waiting',
            'date': new Date(),
            'customer': {
                'name': 'Maria Lietania Sampoerna',
                'lineId': 'Maria22',
                'number': '(+62) 81 234 567',
                'email': 'MariaLietaniaSa@gmail.com',
                'highschool': 'SMA Kartika Bangsa'
            },
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'total': 10200000,
        }
    
    return (
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
                                {!isEditing? <span className="text-purple text-sm md:text-xl pl-4">{order.orderId}</span> :
                                <div className="pl-3 md:pl-4"><input type="text" id="edit-id" defaultValue={order.orderId} className="rounded-xl text-purple py-1 px-2 text-xs md:text-sm" /></div>}
                            </div>
                            {!isEditing? 
                            <button onClick={() => setIsEditing(true)}>
                                <img src="/assets/edit.svg" alt="" className="h-6"/>
                            </button>:
                            <button onClick={() => editOrderId()}>
                                <img src="/assets/save.svg" alt="" className="h-5"/>
                            </button>
                            }
                        </div>
                    </div>
                    <div className="flex justify-between md:grid md:grid-cols-2 py-5 md:py-6 text-xs md:text-sm">
                        <div>
                            <p className="font-bold text-gray-darker pb-2">Order Date</p>
                            <p><b>{formatDate(order.date)}</b></p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-darker pb-2">Status</p>
                            <Menu>
                                <Menu.Button>
                                    <div className={"btn-status relative cursor-pointer w-24 md:w-28 border flex items-center justify-between p-4 " + styleStatusBtn(order.status)}>
                                        <p>{order.status}</p>
                                        <div className="mr-0 ml-auto">
                                            <svg className="hidden md:flex" width="13" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.4625 0.401227L5.5825 4.11253L1.7025 0.401227C1.3125 0.0281838 0.6825 0.0281838 0.2925 0.401227C-0.0975 0.774271 -0.0975 1.37688 0.2925 1.74992L4.8825 6.14036C5.2725 6.5134 5.9025 6.5134 6.2925 6.14036L10.8825 1.74992C11.2725 1.37688 11.2725 0.774271 10.8825 0.401227C10.4925 0.037749 9.8525 0.0281838 9.4625 0.401227Z" fill="currentColor"/>
                                            </svg>
                                            <svg className="md:hidden" width="13" height="5" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.4625 0.401227L5.5825 4.11253L1.7025 0.401227C1.3125 0.0281838 0.6825 0.0281838 0.2925 0.401227C-0.0975 0.774271 -0.0975 1.37688 0.2925 1.74992L4.8825 6.14036C5.2725 6.5134 5.9025 6.5134 6.2925 6.14036L10.8825 1.74992C11.2725 1.37688 11.2725 0.774271 10.8825 0.401227C10.4925 0.037749 9.8525 0.0281838 9.4625 0.401227Z" fill="currentColor"/>
                                            </svg>
                                        </div>
                                    </div>
                                </Menu.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Menu.Items>
                                        <Menu.Item>
                                        {({ active }) => (
                                            <a className={`${active}`}>
                                                <div className="dropdown w-24 md:w-28 -mt-6 md:-mt-8 status-drop" id="status-drop">
                                                    <ul>
                                                        <li><div>{order.status === 'Paid' && <img src="/assets/check.svg" alt="" />}</div>Paid</li>
                                                        <li><div>{order.status === 'Waiting' && <img src="/assets/check.svg" alt="" />}</div>Wait to Pay</li>
                                                        <li><div>{order.status === 'Cancelled' && <img src="/assets/check.svg" alt="" />}</div>Cancelled</li>
                                                    </ul>
                                                </div>
                                            </a>
                                        )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                    <div className="hide-mobile">
                        <Tickets order={order} />
                    </div>
                </div>
                <div>
                    <BuyerInfo customer={order.customer} />
                </div>
                <div className="md:hidden">
                    <Tickets order={order} />
                </div>
            </div>
        </div>
    )
}