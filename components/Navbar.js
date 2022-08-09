import React from "react";
import { Menu, Transition } from '@headlessui/react'

const Navbar = () => {

    function mobileOnClick() {
        document.querySelector(".mobile-menu").classList.toggle("hidden");
    }

    return (
        <div className="page">
        <nav className="bg-purple shadow-md text-white md:h-20" id="navbar">
            <div className="px-6 md:px-14 mx-auto">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div className="flex items-center py-4">
                            <img src={'assets/logo.png'} alt="" objectFit="cover" className="md:h-12 h-8 mr-2"/>
                        </div>                        
                    </div>

                    <div className="btn-nav hidden md:flex items-center space-x-4">
                        <a href="https://fexb.netlify.app/"><button><img src={"assets/home.svg"} className="float-left pr-1 mt-0.5 h-4" alt="" />Home</button></a>
                        <a href="/order-details"><button disabled><img src={"assets/cart.svg"} className="float-left pr-1 mt-0.5 h-4" alt="" />Order Details</button></a>
                    </div>
                    
                    <div className="hidden md:flex items-center">
                        <Menu>
                            <Menu.Button>
                                <div className="hello">
                                    <h1 className="float-left font-medium relative">Hello, tsanaativa.vinnera@gmail.com</h1>
                                    <div className="mt-2.5 ml-2.5" id="tri"></div>
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
                                        <a className={`${active}`} href="/">
                                            <div className="origin-top-right font-medium absolute right-0 mt-6 w-32 rounded-xl shadow-lg bg-white hover:bg-gray" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1" id="tri-drop">
                                                <div className="py-1" role="none">
                                                    <button className="text-red block w-full text-left px-4 py-2 text-sm" tabindex="-1" role="menuitem"><h2>Sign Out</h2></button>
                                                </div>
                                            </div>
                                        </a>
                                    )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                    
                    <div className="md:hidden flex items-center">
                        <button onClick={() => mobileOnClick()} className="outline-none mobile-menu-button">
                        <svg className="w-6 h-6 text-white"
                            x-show="!showMenu"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 20 20"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    </div>
                </div>
            </div>
            <div className="hidden mobile-menu">
                <ul className="bg-gray-light font-medium text-black divide-y divide-gray-200 transition duration-1000 ease-in-out">
                    <li onClick={() => mobileOnClick()} className="cursor-pointer block text-sm px-2 py-4"><p>Hello, FexFEB@gmail.com<span className="font-stretch px-2">▴</span></p><div className="float-right border-solid border-t-black border-t-3 border-x-transparent border-x-3 border-b-0"></div></li>
                    <div role="none">
                        <li><a href="https://fexb.netlify.app/" className="block text-sm px-2 py-4 hover:bg-gray transition duration-300">Home</a></li>
                        <li><a href="/logout" className="block text-sm text-red px-2 py-4 hover:bg-gray transition duration-300">Sign Out</a></li>
                    </div>
                </ul>
            </div>
        </nav>
        </div>
    )
}

export default Navbar;