import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FilterStatus from "../components/FilterStatus"
import OrderTable from "../components/OrderTable"
import Pagination from "../components/Pagination"
import PopupDelete from "../components/PopupDelete";
import SearchBar from "../components/SearchBar"
import Sorter from "../components/Sorter"

export default function Home() {
  const router = useRouter()

  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [statusCounts, setStatusCounts] = useState([])
  const [isOldest, setIsOldest] = useState(false);
  const [searchBy, setSearchBy] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [checkedList, setCheckedList] = useState([])
  const [filteredOrders, setFilteredOrders] = useState()

  const postsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = "";
  let postLength = 0;
  

  if (filteredOrders) {
      currentPosts = filteredOrders.slice(indexOfFirstPost, indexOfLastPost);
      postLength = filteredOrders.length;
  } else if (orders !== []) {
      currentPosts = orders.slice(indexOfFirstPost, indexOfLastPost);
      postLength = orders.length;
  }
  const paginate = pageNumber => setCurrentPage(pageNumber);
  
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
        {
            'id':7,
            'orderId':'400CBDF7EG',
            'status': 'Waiting',
            'date':  new Date('2011-10-10T14:48:00'),
            'customer': 'Maria Lietania Sampoerna',
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'total': 10200000,
        },
        {
            'id':8,
            'orderId':'400CBDF7EG',
            'status': 'Waiting',
            'date':  new Date('2011-10-10T14:48:00'),
            'customer': 'Maria Lietania Sampoerna',
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'total': 10200000,
        },
        {
            'id':9,
            'orderId':'400CBDF7EG',
            'status': 'Waiting',
            'date':  new Date('2011-10-10T14:48:00'),
            'customer': 'Maria Lietania Sampoerna',
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'total': 10200000,
        },
        {
            'id':10,
            'orderId':'400CBDF7EG',
            'status': 'Waiting',
            'date':  new Date('2011-10-10T14:48:00'),
            'customer': 'Maria Lietania Sampoerna',
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'total': 10200000,
        },
        {
            'id':11,
            'orderId':'400CBDF7EG',
            'status': 'Paid',
            'date':  new Date('2011-10-10T14:48:00'),
            'customer': 'Maria Lietania Sampoerna',
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'total': 10200000,
        },
        {
            'id':12,
            'orderId':'400CBDF7EG',
            'status': 'Waiting',
            'date':  new Date('2011-10-10T14:48:00'),
            'customer': 'Maria Lietania Sampoerna',
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'total': 10200000,
        },
        {
            'id':13,
            'orderId':'400CBDF7EG',
            'status': 'Waiting',
            'date':  new Date('2011-10-10T14:48:00'),
            'customer': 'Maria Lietania Sampoerna',
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'total': 10200000,
        },
        {
            'id':14,
            'orderId':'400CBDF7EG',
            'status': 'Waiting',
            'date':  new Date('2011-10-10T14:48:00'),
            'customer': 'Maria Lietania Sampoerna',
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'total': 10200000,
        },
        {
            'id':15,
            'orderId':'400CBDF7EG',
            'status': 'Waiting',
            'date':  new Date('2011-10-10T14:48:00'),
            'customer': 'Maria Lietania Sampoerna',
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'total': 10200000,
        },
        {
            'id':16,
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
        var counts = [ordersDummy.length]
        var statuses = ['Waiting', 'Paid', 'Cancelled']
        statuses.map((val) => {
            var filtered = ordersDummy.filter((obj) => obj.status === val)
            counts.push(filtered.length)
        })
        setStatusCounts(counts)
        
        if (router.query) {
            var filtered = ordersDummy

            if (router.query.sortBy) {
                filtered = [...filtered].reverse()
                setIsOldest(true)
            }
            setOrders(filtered)
            
            if (router.query.status) {
                filtered = filtered.filter((el) => el.status ===  router.query.status)
            }
            setFilteredOrders(filtered)

        } else {
            setOrders(ordersDummy);
        }
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
                        <span className="badge text-2xs">{statusCounts[0]}</span>
                    </div>
                    <div className="px-1.5 md:px-2.5">
                        <h3 className="float-left text-xs md:text-sm -mr-0.5">Waiting to Pay</h3>
                        <span className="badge text-2xs">{statusCounts[1]}</span>
                    </div>
                    <div className="px-1.5 md:px-2.5">
                        <h3 className="float-left text-xs md:text-sm -mr-0.5">Paid</h3>
                        <span className="badge text-2xs">{statusCounts[2]}</span>
                    </div>
                    <div className="pl-1.5 md:px-2.5">
                        <h3 className="float-left text-xs md:text-sm -mr-0.5">Cancelled</h3>
                        <span className="badge text-2xs">{statusCounts[3]}</span>
                    </div>
                </div>
            </div>
            <Pagination 
                currentPage={currentPage}
                postsPerPage={postsPerPage}
                totalPosts={postLength}
                paginate={paginate}
                />
        </div>
        <hr className="border-2 border-drop-lighter" />
        <div className="mx-auto py-4 second-bar">
            <div className="flex justify-center space-x-1.5 md:space-x-2.5 text-2xs md:text-sm second-bar-child">
                <Sorter query={router.query} setOrders={setOrders} orders={orders} filteredOrders={filteredOrders} setFilteredOrders={setFilteredOrders} setIsOldest={setIsOldest} />
                <FilterStatus query={router.query} orders={orders} setOrders={setOrders} setFilteredOrders={setFilteredOrders} setCurrentPage={setCurrentPage} isOldest={isOldest} />
            </div>
            <div className="flex justify-center space-x-1.5 md:space-x-2.5 text-2xs md:text-sm pt-3 md:pt-0 second-bar-child">
                <SearchBar setSearchBy={setSearchBy} searchBy={searchBy} setSearchInput={setSearchInput} />
                <button className="btn-small border-none rounded-2xl md:rounded-xl font-semibold md:font-medium flex items-center space-x-1 md:space-x-2 px-2 pr-2.5 md:px-3">
                    <img src="/assets/export.svg" alt="" className="h-3 md:h-4" /><p>Export</p>
                </button>
                <PopupDelete checkedList={checkedList} />
            </div>
        </div>
        <div>
            <OrderTable orders={currentPosts} searchBy={searchBy} searchInput={searchInput} checkedList={checkedList} setCheckedList={setCheckedList} />
        </div>
    </div>
    }
  </div>
  )
}
