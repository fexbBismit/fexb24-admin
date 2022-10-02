import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FilterStatus from "../components/FilterStatus"
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import OrderTable from "../components/OrderTable"
import Pagination from "../components/Pagination"
import SearchBar from "../components/SearchBar"
import Sorter from "../components/Sorter"
import Alert from "../components/Alert";
import slideInAlert from "../util/slideInAlert";
import axios from 'axios'
import getFilterBody from "../util/getFilterBody";

export default function Home() {
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [orders, setOrders] = useState([])
  const [statusCounts, setStatusCounts] = useState(['','',''])
  const [totalOrder, setTotalOrder] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [maxPage, setMaxPage] = useState()

  const [sortBy, setSortBy] = useState(false)
  const [filter, setFilter] = useState('Any')
  const [searchBy, setSearchBy] = useState('nama')
  const [searchInput, setSearchInput] = useState('')
  
  const [isFetching, setIsFetching] = useState(false)
  const [isFirstRender, setIsFirstRender] = useState(true)

  const [success, setSuccess] = useState(false)
  const [message, setMessage] = useState(['',''])
  const [showAlert, setShowAlert] = useState()
  
    const fetchOrders = async () => {
        if (isFirstRender) {
            setLoading(true)
        }
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            
            var body = JSON.stringify(getFilterBody(sortBy, filter, searchBy, searchInput))
            var fetchedOrders = await axios.post(`https://fexb-dev.herokuapp.com/api/get-order?page=${currentPage}`, body, config)
            console.log(fetchedOrders.data)

            var counts = [fetchedOrders.data.metadata.totalOrder, fetchedOrders.data.metadata.totalWaitingOrder, fetchedOrders.data.metadata.totalPaidOrder]
            setStatusCounts(counts)
            setTotalOrder(fetchedOrders.data.metadata.totalItem)
            setMaxPage(parseInt(fetchedOrders.data.metadata.totalPage))
            setOrders(fetchedOrders.data.data)

            if (isFirstRender) {
                setLoading(false)
            } else {
                setIsFetching(false)
            }
        }
        catch (err) {
            console.log(err)
            setMessage(['Fetch orders failed', 'Error occured. Please try logging in again.'])
            slideInAlert()
            setShowAlert(true)
            setTimeout(redirectToLogin, 2000)
        }
    }
    function redirectToLogin() {
        router.push('/login')
    }

    useEffect(() => {
        fetchOrders()
        setIsFirstRender(false)
    }, []);

    useEffect(() => {
        if (isFetching) {
            fetchOrders()
        }
    }, [isFetching]);

  return (
    <div><Alert message={message} success={success} showAlert={showAlert} setShowAlert={setShowAlert} />
    {loading?<div><LoadingScreen /></div>:
        <>
        <Alert message={message} success={success} showAlert={showAlert} setShowAlert={setShowAlert} />
        <Navbar />
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
                </div>
            </div>
            <Pagination 
                setIsFetching={setIsFetching}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                maxPage={maxPage}
                totalOrder={totalOrder}
                />
        </div>
        <hr className="border-2 border-drop-lighter" />
        <div className="mx-auto py-4 second-bar">
            <div className="flex flex-wrap gap-y-2.5 justify-center space-x-1.5 md:space-x-2.5 text-2xs md:text-sm second-bar-child">
                <Sorter
                    setSortBy={setSortBy}
                    setIsFetching={setIsFetching}
                />
                <FilterStatus 
                    filter={filter}
                    setFilter={setFilter}
                    setIsFetching={setIsFetching}
                    setCurrentPage={setCurrentPage}
                />
            </div>
            <div className="flex justify-center space-x-1.5 md:space-x-2.5 text-2xs md:text-sm pt-3 md:pt-0 second-bar-child">
                <SearchBar
                    searchBy={searchBy}
                    setSearchBy={setSearchBy}
                    setSearchInput={setSearchInput}
                    setIsFetching={setIsFetching}
                    setCurrentPage={setCurrentPage}
                 />
            </div>
        </div>
        <div>
            <OrderTable sortBy={sortBy} orders={orders} setCurrentPage={setCurrentPage} isFetching={isFetching} />
        </div>
    </div></>
    }
  </div>
  )
}
