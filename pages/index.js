import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FilterStatus from "../components/FilterStatus"
import OrderTable from "../components/OrderTable"
import Pagination from "../components/Pagination"
import SearchBar from "../components/SearchBar"
import Sorter from "../components/Sorter"

export default function Home() {
  const router = useRouter()

  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState(null);
  const [searchBy, setSearchBy] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  
  const ordersDummy = [
        {
            'id':1,
            'orderId':'400CBDF7EF',
            'status': 'Paid',
            'date': new Date(),
            'customer': 'Ika Lietania Sampoerna',
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'total': 10200000,
        },
        {
            'id':2,
            'orderId':'400CBDF7EG',
            'status': 'Cancelled',
            'date': new Date(),
            'customer': 'Maria Lietania Sampoerna',
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'total': 10200000,
        },
        {
            'id':3,
            'orderId':'400CBDF7EG',
            'status': 'Waiting',
            'date': new Date('2015-10-10T14:50:00'),
            'customer': 'Maria Lietania Sampoerna',
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'total': 10200000,
        },
        {
            'id':4,
            'orderId':'400CBDF7EF',
            'status': 'Paid',
            'date': new Date('2015-10-10T14:48:00'),
            'customer': 'Maria Lietania Sampoerna',
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'total': 10200000,
        },
        {
            'id':5,
            'orderId':'400CBDF7EG',
            'status': 'Cancelled',
            'date': new Date('2013-10-10T14:48:00'),
            'customer': 'Maria Lietania Sampoerna',
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'total': 10200000,
        },
        {
            'id':6,
            'orderId':'400CBDF7EG',
            'status': 'Waiting',
            'date':  new Date('2011-10-10T14:48:00'),
            'customer': 'Maria Lietania Sampoerna',
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'total': 10200000,
        },
    ]
    const fetchOrders = async () => {
        var orderList = ordersDummy
        if (router.query.sortBy) {
            orderList = [...ordersDummy].reverse()
        }
        
        if (router.query.status) {
            setFilter(router.query.status)
        }
        setOrders(orderList);
    }

    useEffect(() => {
        if (router.isReady) {
            fetchOrders();
            setLoading(false)
        }
    }, [router.isReady]);

  return (
    <div>{!loading &&
        <div className="px-3 sm:px-10 md:px-14" >
        <div className=" mx-auto first-bar">
            <div className="flex justify-center items-center pt-5 md:pt-0 first-bar-child">
                <div className="font-bold text-purple flex items-center divide-x-2">
                    <div className="pr-1.5 md:px-2.5">
                        <h3 className="float-left text-xs md:text-sm -mr-0.5">All</h3>
                        <span className="badge text-2xs">1280</span>
                    </div>
                    <div className="px-1.5 md:px-2.5">
                        <h3 className="float-left text-xs md:text-sm -mr-0.5">Waiting to Pay</h3>
                        <span className="badge text-2xs">1280</span>
                    </div>
                    <div className="px-1.5 md:px-2.5">
                        <h3 className="float-left text-xs md:text-sm -mr-0.5">Paid</h3>
                        <span className="badge text-2xs">1280</span>
                    </div>
                    <div className="pl-1.5 md:px-2.5">
                        <h3 className="float-left text-xs md:text-sm -mr-0.5">Cancelled</h3>
                        <span className="badge text-2xs">8</span>
                    </div>
                </div>
            </div>
            <Pagination />
        </div>
        <hr className="border-2 border-drop-lighter" />
        <div className="mx-auto py-4 second-bar">
            <div className="flex justify-center space-x-1.5 md:space-x-2.5 text-2xs md:text-sm second-bar-child">
                <Sorter query={router.query} setOrders={setOrders} orders={orders} />
                <FilterStatus query={router.query} setFilter={setFilter} />
            </div>
            <div className="flex justify-center space-x-1.5 md:space-x-2.5 text-2xs md:text-sm pt-3 md:pt-0 second-bar-child">
                <SearchBar setSearchBy={setSearchBy} searchBy={searchBy} setSearchInput={setSearchInput} />
                <button className="btn-small border-none rounded-2xl md:rounded-xl font-semibold md:font-medium flex items-center space-x-1 md:space-x-2 px-2 pr-2.5 md:px-3">
                    <img src="/assets/export.svg" alt="" className="h-3 md:h-4" /><p>Export</p>
                </button>
                <button className="btn-small border-none rounded-2xl md:rounded-xl font-semibold md:font-medium flex items-center space-x-1 md:space-x-2 px-2 pr-2.5 md:px-3">
                    <img src="/assets/delete.svg" alt="" className="h-3 md:h-4" /><p>Delete</p>
                </button>
            </div>
        </div>
        <div>
            <OrderTable orders={orders} filter={filter} searchBy={searchBy} searchInput={searchInput} />
        </div>
    </div>
    }
  </div>
  )
}
