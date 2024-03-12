import React from 'react'
import { useState } from 'react';

function Navigation() {

    return (
        <nav className="bg-gray-900 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://i.ytimg.com/vi/xMqT9R5-X9I/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLAyr50jH_VkvRr9tuKKtLYHg_TLow" className="h-8" alt="Flowbite Logo"/>
                        <span className="self-center text-2xl whitespace-nowrap dark:text-white text-red-600 font-bold animate-pulse">4 KING</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">REGISTER</button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a className="block py-2 px-3 rounded md:bg-transparent md:p-0 text-xl text-red-600 dark:text-white font-bold animate-bounce" aria-current="page">DASHBOARD</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation