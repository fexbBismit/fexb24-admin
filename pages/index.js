import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FilterStatus from "../components/FilterStatus"
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import OrderTable from "../components/OrderTable"
import Pagination from "../components/Pagination"
import PopupDelete from "../components/PopupDelete";
import SearchBar from "../components/SearchBar"
import Sorter from "../components/Sorter"
import Alert from "../components/Alert";
import slideInAlert from "../util/slideInAlert";
import axios from 'axios'

export default function Home() {
  const router = useRouter()

  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [statusCounts, setStatusCounts] = useState(['','','',''])
  const [filter, setFilter] = useState();
  const [searchBy, setSearchBy] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [checkedList, setCheckedList] = useState([])
  const [filteredOrders, setFilteredOrders] = useState()
  const [searchResult, setSearchResult] = useState()

  const postsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = "";
  let postLength = 0;
  
  if (searchResult) {
    currentPosts = searchResult.slice(indexOfFirstPost, indexOfLastPost);
    postLength = searchResult.length;
  } else if (filteredOrders) {
      currentPosts = filteredOrders.slice(indexOfFirstPost, indexOfLastPost);
      postLength = filteredOrders.length;
  } else if (orders !== []) {
      currentPosts = orders.slice(indexOfFirstPost, indexOfLastPost);
      postLength = orders.length;
  }
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const [success, setSuccess] = useState(false)
  const [message, setMessage] = useState(['',''])
  const [showAlert, setShowAlert] = useState()
  
  const ordersDummy = [
        {
            'id':1,
            'orderId':'400CBDF7EF',
            'status': 'Paid',
            'createdAt': '2009-08-20T14:50:00',
            'listPembeli': [{
                "id": 1,
                "nama": "Nuel Lietania Sampoerna",
                "email": "nuelgeming@gmail.com",
                "idLine": "nuel123",
                "nomorWA": "087741161102",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            },{
                "id": 2,
                "nama": "Maria",
                "email": "maria@gmail.com",
                "idLine": "marl123",
                "nomorWA": "087741161222",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            }],
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'totalPembayaran': 10200000,
        },
        {
            'id':2,
            'orderId':'400CBDF7EG',
            'status': 'Cancelled',
            'createdAt': '2022-08-20T14:50:00',
            'listPembeli': [{
                "id": 1,
                "nama": "Nuel Lietania Sampoerna",
                "email": "nuelgeming@gmail.com",
                "idLine": "nuel123",
                "nomorWA": "087741161102",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            },{
                "id": 2,
                "nama": "Maria",
                "email": "maria@gmail.com",
                "idLine": "marl123",
                "nomorWA": "087741161222",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            }],
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'totalPembayaran': 10200000,
        },
        {
            'id':3,
            'orderId':'400CBDF7EG',
            'status': 'Waiting',
            'createdAt': '2015-10-10T14:50:00',
            'listPembeli': [{
                "id": 1,
                "nama": "Nuel Lietania Sampoerna",
                "email": "nuelgeming@gmail.com",
                "idLine": "nuel123",
                "nomorWA": "087741161102",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            },{
                "id": 2,
                "nama": "Maria",
                "email": "maria@gmail.com",
                "idLine": "marl123",
                "nomorWA": "087741161222",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            }],
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'totalPembayaran': 10200000,
        },
        {
            'id':4,
            'orderId':'400CBDF7EF',
            'status': 'Paid',
            'createdAt': '2015-10-10T14:48:00',
            'listPembeli': [{
                "id": 1,
                "nama": "Nuel Lietania Sampoerna",
                "email": "nuelgeming@gmail.com",
                "idLine": "nuel123",
                "nomorWA": "087741161102",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            },{
                "id": 2,
                "nama": "Maria",
                "email": "maria@gmail.com",
                "idLine": "marl123",
                "nomorWA": "087741161222",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            }],
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'totalPembayaran': 10200000,
        },
        {
            'id':5,
            'orderId':'400CBDF7EG',
            'status': 'Cancelled',
            'createdAt': '2013-10-10T14:48:00',
            'listPembeli': [{
                "id": 1,
                "nama": "Nuel Lietania Sampoerna",
                "email": "nuelgeming@gmail.com",
                "idLine": "nuel123",
                "nomorWA": "087741161102",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            },{
                "id": 2,
                "nama": "Maria",
                "email": "maria@gmail.com",
                "idLine": "marl123",
                "nomorWA": "087741161222",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            }],
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'totalPembayaran': 10200000,
        },
        {
            'id':6,
            'orderId':'400CBDF7EG',
            'status': 'Waiting',
            'createdAt': '2011-10-10T14:48:00',
            'listPembeli': [{
                "id": 1,
                "nama": "Nuel Lietania Sampoerna",
                "email": "nuelgeming@gmail.com",
                "idLine": "nuel123",
                "nomorWA": "087741161102",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            },{
                "id": 2,
                "nama": "Maria",
                "email": "maria@gmail.com",
                "idLine": "marl123",
                "nomorWA": "087741161222",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            }],
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'totalPembayaran': 10200000,
        },
        {
            'id':7,
            'orderId':'400CBDF7EG',
            'status': 'Waiting',
            'createdAt': '2012-10-10T14:48:00',
            'listPembeli': [{
                "id": 1,
                "nama": "Nuel Lietania Sampoerna",
                "email": "nuelgeming@gmail.com",
                "idLine": "nuel123",
                "nomorWA": "087741161102",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            },{
                "id": 2,
                "nama": "Maria",
                "email": "maria@gmail.com",
                "idLine": "marl123",
                "nomorWA": "087741161222",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            }],
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'totalPembayaran': 10200000,
        },
        {
            'id':8,
            'orderId':'400CBDF7EG',
            'status': 'Waiting',
            'createdAt': '2011-10-10T14:48:00',
            'listPembeli': [{
                "id": 1,
                "nama": "Nuel Lietania Sampoerna",
                "email": "nuelgeming@gmail.com",
                "idLine": "nuel123",
                "nomorWA": "087741161102",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            }],
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'totalPembayaran': 10200000,
        },
        {
            'id':9,
            'orderId':'400CBDF7EG',
            'status': 'Waiting',
            'createdAt': '2011-10-10T14:48:00',
            'listPembeli': [{
                "id": 1,
                "nama": "Nuel Lietania Sampoerna",
                "email": "nuelgeming@gmail.com",
                "idLine": "nuel123",
                "nomorWA": "087741161102",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            },{
                "id": 2,
                "nama": "Maria",
                "email": "maria@gmail.com",
                "idLine": "marl123",
                "nomorWA": "087741161222",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            }],
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'totalPembayaran': 10200000,
        },
        {
            'id':10,
            'orderId':'400CBDF7EG',
            'status': 'Waiting',
            'createdAt': '2011-10-10T14:48:00',
            'listPembeli': [{
                "id": 1,
                "nama": "Nuel Lietania Sampoerna",
                "email": "nuelgeming@gmail.com",
                "idLine": "nuel123",
                "nomorWA": "087741161102",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            },{
                "id": 2,
                "nama": "Maria",
                "email": "maria@gmail.com",
                "idLine": "marl123",
                "nomorWA": "087741161222",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            }],
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'totalPembayaran': 10200000,
        },
        {
            'id':11,
            'orderId':'400CBDF7EG',
            'status': 'Paid',
            'createdAt': '2011-10-10T14:48:00',
            'listPembeli': [{
                "id": 1,
                "nama": "Nuel Lietania Sampoerna",
                "email": "nuelgeming@gmail.com",
                "idLine": "nuel123",
                "nomorWA": "087741161102",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            },{
                "id": 2,
                "nama": "Maria",
                "email": "maria@gmail.com",
                "idLine": "marl123",
                "nomorWA": "087741161222",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            }],
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'totalPembayaran': 10200000,
        },
        {
            'id':12,
            'orderId':'400CBDF7EG',
            'status': 'Waiting',
            'createdAt': '2011-10-10T14:48:00',
            'listPembeli': [{
                "id": 1,
                "nama": "Nuel Lietania Sampoerna",
                "email": "nuelgeming@gmail.com",
                "idLine": "nuel123",
                "nomorWA": "087741161102",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            },{
                "id": 2,
                "nama": "Maria",
                "email": "maria@gmail.com",
                "idLine": "marl123",
                "nomorWA": "087741161222",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            }],
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'totalPembayaran': 10200000,
        },
        {
            'id':13,
            'orderId':'400CBDF7EG',
            'status': 'Waiting',
            'createdAt': '2011-10-10T14:48:00',
            'listPembeli': [{
                "id": 1,
                "nama": "Nuel Lietania Sampoerna",
                "email": "nuelgeming@gmail.com",
                "idLine": "nuel123",
                "nomorWA": "087741161102",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            },{
                "id": 2,
                "nama": "Maria",
                "email": "maria@gmail.com",
                "idLine": "marl123",
                "nomorWA": "087741161222",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            }],
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'totalPembayaran': 10200000,
        },
        {
            'id':14,
            'orderId':'400CBDF7EG',
            'status': 'Waiting',
            'createdAt': '2011-10-10T14:48:00',
            'listPembeli': [{
                "id": 1,
                "nama": "Nuel Lietania Sampoerna",
                "email": "nuelgeming@gmail.com",
                "idLine": "nuel123",
                "nomorWA": "087741161102",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            },{
                "id": 2,
                "nama": "Maria",
                "email": "maria@gmail.com",
                "idLine": "marl123",
                "nomorWA": "087741161222",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            }],
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'totalPembayaran': 10200000,
        },
        {
            'id':15,
            'orderId':'400CBDF7EG',
            'status': 'Waiting',
            'createdAt': '2011-10-10T14:48:00',
            'listPembeli': [{
                "id": 1,
                "nama": "Michael Sampoerna",
                "email": "nuelgeming@gmail.com",
                "idLine": "nuel123",
                "nomorWA": "087741161102",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            },{
                "id": 2,
                "nama": "Maria",
                "email": "maria@gmail.com",
                "idLine": "marl123",
                "nomorWA": "087741161222",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            }],
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'totalPembayaran': 10200000,
        },
        {
            'id':16,
            'orderId':'400CBDF7EH',
            'status': 'Waiting',
            'createdAt': '2011-10-10T14:48:00',
            'listPembeli': [{
                "id": 1,
                "nama": "a Samaya",
                "email": "nuelgeming@gmail.com",
                "idLine": "nuel123",
                "nomorWA": "087741161102",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            },{
                "id": 2,
                "nama": "Maria",
                "email": "maria@gmail.com",
                "idLine": "marl123",
                "nomorWA": "087741161222",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            }],
            'ticket': 10,
            'gateway': 'Gopay',
            'discount': 2500,
            'totalPembayaran': 10200000,
        },
        {
            'id':17,
            'orderId':'400CBDF7EH',
            'status': 'Waiting',
            'createdAt': '2011-10-10T17:48:00',
            'listPembeli': [{
                "id": 1,
                "nama": "Samaya",
                "email": "nuelgeming@gmail.com",
                "idLine": "nuel123",
                "nomorWA": "087741161102",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            },{
                "id": 2,
                "nama": "Maria",
                "email": "maria@gmail.com",
                "idLine": "marl123",
                "nomorWA": "087741161222",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            }],
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'totalPembayaran': 10200000,
        },
        {
            'id':15,
            'orderId':'400CBDF7EG',
            'status': 'Waiting',
            'createdAt':  '2011-10-10T14:48:00',
            'listPembeli': [{
                "id": 1,
                "nama": "Mariaaaa sahdkah dasdkasn hdashdjksb",
                "email": "nuelgeming@gmail.com",
                "idLine": "nuel123",
                "nomorWA": "087741161102",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            },{
                "id": 2,
                "nama": "Maria",
                "email": "maria@gmail.com",
                "idLine": "marl123",
                "nomorWA": "087741161222",
                "highschool": "SMAN 49 Jakarta",
                "orderId": 1,
                "tiketId": 1
            }],
            'ticket': 100,
            'gateway': 'Virtual Account',
            'discount': 25000,
            'totalPembayaran': 102000,
        },
    ]

    function sortOrdersByDate(orders) {
        let sortedOrders = orders
        sortedOrders.sort(function(a, b){
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
        console.log(sortedOrders)
        return sortedOrders
    }

    const fetchOrders = async () => {
        // setLoading(false)
        // var counts = [ordersDummy.length]
        // var statuses = ['Waiting', 'Paid', 'Cancelled']
        // statuses.map((val) => {
        //     var filtered = ordersDummy.filter((obj) => obj.status === val)
        //     counts.push(filtered.length)
        // })
        // setStatusCounts(counts)
        // let sortedOrders = sortOrdersByDate(ordersDummy)
        // setOrders(sortedOrders)

        setLoading(true)
        try {
            var fetchedOrders = await axios.get('https://fexb-dev.herokuapp.com/api/order')
            console.log(fetchedOrders.data)
            var counts = [fetchedOrders.data.length]
            var statuses = ['Waiting', 'Paid', 'Cancelled']
            statuses.map((val) => {
                var filtered = fetchedOrders.data.filter((obj) => obj.status === val)
                counts.push(filtered.length)
            })
            setStatusCounts(counts)
            let sortedOrders = sortOrdersByDate(fetchedOrders.data)
            setOrders(sortedOrders)
            setLoading(false)
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
    }, []);

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
                <Sorter orders={orders} setOrders={setOrders} filteredOrders={filteredOrders} setFilteredOrders={setFilteredOrders} searchResult={searchResult} setSearchResult={setSearchResult} />
                <FilterStatus orders={orders} filter={filter} setFilter={setFilter} setFilteredOrders={setFilteredOrders} setCurrentPage={setCurrentPage} setSearchInput={setSearchInput} setSearchResult={setSearchResult} />
            </div>
            <div className="flex justify-center space-x-1.5 md:space-x-2.5 text-2xs md:text-sm pt-3 md:pt-0 second-bar-child">
                <SearchBar setSearchBy={setSearchBy} searchBy={searchBy} setSearchInput={setSearchInput} orders={orders} setOrders={setOrders} filteredOrders={filteredOrders} setSearchResult={setSearchResult} setCurrentPage={setCurrentPage} />
                <PopupDelete checkedList={checkedList} />
            </div>
        </div>
        <div>
            <OrderTable orders={currentPosts} checkedList={checkedList} setCheckedList={setCheckedList} setCurrentPage={setCurrentPage} />
        </div>
    </div></>
    }
  </div>
  )
}
