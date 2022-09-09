import React from "react";
import { Menu, Transition } from '@headlessui/react'

const SearchBar = ( { setIsFetching, searchBy, setSearchBy, setSearchInput, setCurrentPage } ) => {
    console.log('search')
    function changeSearchBy(by) {
        setSearchBy(by)
        document.getElementById('search').value = '';
        setSearchInput('')
        setCurrentPage(1)
        setIsFetching(true)
    }

    function handleInput() {
        var input = document.getElementById('search').value
        setSearchInput(input)
        setCurrentPage(1)
        setIsFetching(true)
    }

    function clearInput(e) {
        e.preventDefault();
        document.getElementById('search').value = '';
        setSearchInput('')
        setCurrentPage(1)
        setIsFetching(true)
    }

    return (
        <div className="search-bar">
            <div className="rounded-2xl bg-purple-lighter border-2 border-purple-lighter flex">
                <div className="rounded-2xl text-purple font-semibold bg-purple-lighter" >
                    <Menu>
                        <Menu.Button>
                            <div className="relative cursor-pointer w-32 md:w-44 flex items-center px-2 py-2">
                                <p>{searchBy === 'nama'? 'By Customer Name':'By Customer Email'}</p>
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
                                        <div className="dropdown w-32 md:w-44 -ml-0.5 search-drop" id="search-drop">
                                            <ul>
                                                <li onClick={() => changeSearchBy('nama')}><div>{searchBy === 'nama' && <img src="/assets/check.svg" alt="" />}</div>By Customer Name</li>
                                                <li onClick={() => changeSearchBy('email')}><div>{searchBy === 'email' && <img src="/assets/check.svg" alt="" />}</div>By Customer Email</li>
                                            </ul>
                                        </div>
                                    </a>
                                )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
                <div className="bg-white flex items-center px-1 md:px-3">
                    <img src="/assets/search.svg" alt="" className="md:h-auto"/>
                </div>
                <input type="text" className=" md:py-2 text-2xs md:text-sm w-28 md:w-32" id="search" placeholder="Search Orders" onKeyUp={() => handleInput()}  />
                <div className="bg-white flex items-center px-1 md:px-2 search-x">
                    <button className="rounded-full p-1 md:p-1.5" onClick={(e) => clearInput(e)}>
                        <img src="/assets/cross.svg" className="md:h-auto" alt=""/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;