import React from "react";
import FilterStatus from "../components/FilterStatus"
import OrderTable from "../components/OrderTable"
import Pagination from "../components/Pagination"
import SearchBar from "../components/SearchBar"
import Sorter from "../components/Sorter"

export default function Home() {
  return (
    <div className="px-3 sm:px-10 md:px-14 page" >
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
              <Sorter />
              <FilterStatus />
          </div>
          <div className="flex justify-center space-x-1.5 md:space-x-2.5 text-2xs md:text-sm pt-3 md:pt-0 second-bar-child">
              <SearchBar />
              <button className="btn-small border-none rounded-2xl md:rounded-xl font-semibold md:font-medium flex items-center space-x-1 md:space-x-2 px-2 pr-2.5 md:px-3">
                  <img src="/assets/export.svg" alt="" className="h-3 md:h-4" /><p>Export</p>
              </button>
              <button className="btn-small border-none rounded-2xl md:rounded-xl font-semibold md:font-medium flex items-center space-x-1 md:space-x-2 px-2 pr-2.5 md:px-3">
                  <img src="/assets/delete.svg" alt="" className="h-3 md:h-4" /><p>Delete</p>
              </button>
          </div>
      </div>
      <div>
          <OrderTable />
      </div>
  </div>
  )
}
