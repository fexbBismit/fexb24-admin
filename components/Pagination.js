import React from "react";

const Pagination = ({currentPage, postsPerPage, totalPosts, paginate}) => {
    
    const firstPage = 1
    const lastPage = Math.ceil(totalPosts / postsPerPage)
    
    const handlePrevBtn = () => {
        paginate(currentPage - 1)
    }

    const handleFirstBtn = () => {
        paginate(firstPage)
    }
    
    const handleNextBtn = () => {
        paginate(currentPage + 1)
    }

    const handleLastBtn = () => {
        paginate(lastPage)
    }
    
    return (
        <div className="pagination first-bar-child">
            <div className="py-4 pl-2 md:pl-0 mx-auto flex">
                <div className="flex space-x-2.5 text-xs md:text-sm items-center">
                    <span className="text-lavender">{totalPosts} items</span>
                    <button className="btn-small rounded-md p-1.5 w-7 h-7" disabled={currentPage <= firstPage} onClick={handleFirstBtn}>
                        <img src={'/assets/double-arrow.svg'} alt="" />
                    </button>
                    <button className="btn-small rounded-md p-1.5 w-7 h-7" disabled={currentPage <= firstPage} onClick={handlePrevBtn}>
                        <img src={'/assets/arrow.svg'} alt="" className="mx-auto h-3" />
                    </button>
                    <input type="text" className="text-center border-purple-lighter border-2 w-14 rounded-lg px-3 py-1.5" value={currentPage} />
                    <span className="text-lavender">of {lastPage}</span>
                    <button className="btn-small rounded-md p-1.5 w-7 h-7"  disabled={currentPage === lastPage} onClick={handleNextBtn}>
                        <img src={'/assets/arrow.svg'} alt="" className="mx-auto flip h-3" />
                    </button>
                    <button className="btn-small rounded-md p-1.5 w-7 h-7" disabled={currentPage === lastPage} onClick={handleLastBtn}>
                        <img src={'/assets/double-arrow.svg'} alt="" className="flip" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pagination;