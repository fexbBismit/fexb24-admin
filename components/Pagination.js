import React from "react";

const Pagination = () => {
    return (
        <div className="pagination first-bar-child">
            <div className="py-4 pl-2 md:pl-0 mx-auto flex">
                <div className="flex space-x-2.5 text-xs md:text-sm items-center">
                    <span className="text-lavender">1024 items</span>
                    <button className="btn-small rounded-md p-1.5 w-7 h-7">
                        <img src={'assets/double-arrow.svg'} alt="" />
                    </button>
                    <button className="btn-small rounded-md p-1.5 w-7 h-7">
                        <img src={'assets/arrow.svg'} alt="" className="mx-auto h-3" />
                    </button>
                    <input type="text" className="text-center border-purple-lighter border-2 w-14 rounded-lg px-3 py-1.5" defaultValue={"1"} />
                    <span className="text-lavender">of 71</span>
                    <button className="btn-small rounded-md p-1.5 w-7 h-7">
                        <img src={'assets/double-arrow.svg'} alt="" className="flip" />
                    </button>
                    <button className="btn-small rounded-md p-1.5 w-7 h-7">
                        <img src={'assets/arrow.svg'} alt="" className="mx-auto flip h-3" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pagination;