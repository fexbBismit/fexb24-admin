import React, { useState } from "react";

const FilterStatus = () => {
    const [selected, setSelected] = useState("Any");
    function showDropdown() {
        document.getElementById("status-drop").classList.remove('hidden');
    }
    function hideDropdown() {
        document.getElementById("status-drop").classList.add('hidden');
    }

    return (
        <div>
            <div className="box-purple px-2.5 md:px-4 py-1 md:py-2 space-x-2 flex items-center">
                <img src="assets/filter.svg" alt="" className="h-3" />
                <span className="text-2xs md:text-sm font-semibold md:font-medium">Filter Status</span>
                <div className="relative">
                    <button className="border-1 border-purple bg-white rounded-xl px-2 md:px-3 font-semibold text-2xs flex items-center w-20 md:w-24" onClick={() => showDropdown()} onBlur={() => hideDropdown()}>
                        <span>{selected}</span>
                        <div className="mr-0 ml-auto">
                            <svg className="hidden md:flex" width="13" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.4625 0.401227L5.5825 4.11253L1.7025 0.401227C1.3125 0.0281838 0.6825 0.0281838 0.2925 0.401227C-0.0975 0.774271 -0.0975 1.37688 0.2925 1.74992L4.8825 6.14036C5.2725 6.5134 5.9025 6.5134 6.2925 6.14036L10.8825 1.74992C11.2725 1.37688 11.2725 0.774271 10.8825 0.401227C10.4925 0.037749 9.8525 0.0281838 9.4625 0.401227Z" fill="currentColor"/>
                            </svg>
                            <svg className="md:hidden" width="13" height="5" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.4625 0.401227L5.5825 4.11253L1.7025 0.401227C1.3125 0.0281838 0.6825 0.0281838 0.2925 0.401227C-0.0975 0.774271 -0.0975 1.37688 0.2925 1.74992L4.8825 6.14036C5.2725 6.5134 5.9025 6.5134 6.2925 6.14036L10.8825 1.74992C11.2725 1.37688 11.2725 0.774271 10.8825 0.401227C10.4925 0.037749 9.8525 0.0281838 9.4625 0.401227Z" fill="currentColor"/>
                            </svg>
                        </div>
                    </button>
                    
                    <div className="dropdown hidden w-20 md:w-24 -mt-6" id="status-drop">
                    <ul className="cursor-pointer">
                        <li className="flex items-start py-1 px-1 md:px-2 hover:bg-drop-light choice-first transition duration-200"><div className="w-4 mt-1 mr-0.5"><img src="assets/check.svg" alt="" className="h-2.5"/></div>Any</li>
                        <li className="flex items-start py-1 px-1 md:px-2 hover:bg-drop-light transition duration-200"><div className="w-4 mt-1 mr-0.5"><img src="assets/check.svg" alt="" className="h-2.5"/></div>Wait to Pay</li>
                        <li className="flex items-start py-1 px-1 md:px-2 hover:bg-drop-light transition duration-200"><div className="w-4 mt-1 mr-0.5"><img src="assets/check.svg" alt="" className="h-2.5"/></div>Paid</li>
                        <li className="flex items-start py-1 px-1 md:px-2 hover:bg-drop-light choice-last transition duration-200"><div className="w-4 mt-1 mr-0.5"><img src="assets/check.svg" alt="" className="h-2.5"/></div>Cancelled</li>
                    </ul>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default FilterStatus;