import React from "react";

const Pagination = ({setIsFetching, currentPage, setCurrentPage, maxPage, totalOrder}) => {
    
    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1)
        setIsFetching(true)
    }

    const handleFirstBtn = () => {
        setCurrentPage(1)
        setIsFetching(true)
    }
    
    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1)
        setIsFetching(true)
    }

    const handleLastBtn = () => {
        setCurrentPage(maxPage)
        setIsFetching(true)
    }
    
    return (
        <div className="pagination first-bar-child">
            <div className="py-4 pl-2 md:pl-0 mx-auto flex">
                <div className="flex space-x-2.5 text-xs md:text-sm items-center">
                    <span className="text-lavender">{totalOrder} items</span>
                    <button className="btn-small rounded-md p-1.5 w-7 h-7" disabled={currentPage <= 1} onClick={handleFirstBtn}>
                        <img src={'/assets/double-arrow.svg'} alt="" />
                    </button>
                    <button className="btn-small rounded-md p-1.5 w-7 h-7" disabled={currentPage <= 1} onClick={handlePrevBtn}>
                        <img src={'/assets/arrow.svg'} alt="" className="mx-auto h-3" />
                    </button>
                    <input type="text" className="text-center border-purple-lighter border-2 w-14 rounded-lg px-3 py-1.5" value={currentPage} />
                    <span className="text-lavender">of {maxPage}</span>
                    <button className="btn-small rounded-md p-1.5 w-7 h-7"  disabled={currentPage === maxPage} onClick={handleNextBtn}>
                        <img src={'/assets/arrow.svg'} alt="" className="mx-auto flip h-3" />
                    </button>
                    <button className="btn-small rounded-md p-1.5 w-7 h-7" disabled={currentPage === maxPage} onClick={handleLastBtn}>
                        <img src={'/assets/double-arrow.svg'} alt="" className="flip" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pagination;