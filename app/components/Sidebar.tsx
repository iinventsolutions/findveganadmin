'use client'

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NotificationDropdown from "./NotificationDropdown";
import UserDropdown from "./UserDropdown";

const menuItems = [
    { href: "/dashboard", text: "Dashboard", icon: "fas fa-tv" },
    { href: "/admin_user_management", text: "Admin User Management", icon: "fas fa-tools" },
    { href: "/roles_management", text: "Roles Management", icon: "fas fa-table" },
    { href: "/user_management", text: "User Management", icon: "fas fa-map-marked" },
    { href: "/rider_management", text: "Rider Management", icon: "fas fa-map-marked" },
    { href: "/store_management", text: "Store Management", icon: "fas fa-tv" },
    { href: "/manage_orders", text: "Manage Orders", icon: "fas fa-clipboard-list" },
    { href: "/store_payout_management", text: "Store Payout", icon: "fas fa-money-bill-trend-up" },
    { href: "/rider_payout_management", text: "Rider Payout", icon: "fas fa-money-bill-1-wave" },
    { href: "/cancel_reason", text: "Cancel Reason", icon: "fas fa-circle-xmark" },
];

const authMenuItems = [
    { href: "/auth/login", text: "Login", icon: "fas fa-fingerprint" },
    { href: "/auth/register", text: "Register", icon: "fas fa-clipboard-list" },
];

const noLayoutMenuItems = [
    { href: "/landing", text: "Landing Page", icon: "fas fa-newspaper" },
    { href: "/profile", text: "Profile Page", icon: "fas fa-user-circle" },
];

export default function Sidebar() {
    const [collapseShow, setCollapseShow] = useState("hidden");
    const pathname = usePathname();

    const handleToggleCollapse = () => {
        setCollapseShow("bg-white m-2 py-3 px-6");
    };

    const handleCloseCollapse = () => {
        setCollapseShow("hidden");
    };

    return (
        <nav className="relative z-10 flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow-xl md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden md:w-64">
            <div className="flex flex-wrap items-center justify-between w-full px-0 mx-auto md:flex-col md:items-stretch md:min-h-full md:flex-nowrap">
                {/* Toggler */}
                <button
                    className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
                    type="button"
                    onClick={handleToggleCollapse}
                >
                    <i className="fas fa-bars"></i>
                </button>

                {/* Brand */}
                <Link href="/" className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-blueGray-600 whitespace-nowrap">
                    <img className="h-[50px] w-[120px]" src="/images/logo.png"/>
                </Link>

                {/* User */}
                <ul className="flex flex-wrap items-center list-none md:hidden">
                    <li className="relative inline-block">
                        <NotificationDropdown />
                    </li>
                    <li className="relative inline-block">
                        <UserDropdown />
                    </li>
                </ul>

                {/* Collapse */}
                <div className={`md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ${collapseShow}`}>
                    {/* Collapse header */}
                    <div className="block pb-4 mb-4 border-b border-solid md:min-w-full md:hidden border-blueGray-200">
                        <div className="flex flex-wrap">
                        <div className="w-6/12">
                            <Link href="/" className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-blueGray-600 whitespace-nowrap">
                                <img className="h-[50px] w-[120px]" src="/images/logo.png"/>
                            </Link>
                        </div>
                        <div className="flex justify-end w-6/12">
                            <button
                            type="button"
                            className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
                            onClick={handleCloseCollapse}
                            >
                            <i className="fas fa-times"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                    <hr className="my-4 text-[1px] md:min-w-full" />
                    {/* Menu */}
                    <ul className="flex flex-col items-stretch gap-3 mb-2">
                        {menuItems.map((item, index) => (
                        <li key={index} className="relative block">
                            <Link href={item.href} className={`text-xs capitalize py-3 font-semibold block ${pathname === item.href ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-blueGray-700 hover:text-blueGray-500"}`}>
                            <i className={`${item.icon} mr-2 text-sm opacity-75`}></i>
                            {item.text}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    <hr className="my-4 text-[1px] md:min-w-full" />
                    {/* Auth Menu */}
                    <ul className="flex flex-col items-stretch mb-2">
                        {authMenuItems.map((item, index) => (
                        <li key={index} className="relative block">
                            <Link href={item.href} className={`text-xs uppercase py-3 font-bold block ${pathname === item.href ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-blueGray-700 hover:text-blueGray-500"}`}>
                            <i className={`${item.icon} mr-2 text-sm opacity-75`}></i>
                            {item.text}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    <hr className="my-4 text-[1px] md:min-w-full" />
                    {/* No Layout Menu */}
                    <ul className="flex flex-col items-stretch mb-2">
                        {noLayoutMenuItems.map((item, index) => (
                        <li key={index} className="relative block">
                            <Link href={item.href} className={`text-xs uppercase py-3 font-bold block ${pathname === item.href ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-blueGray-700 hover:text-blueGray-500"}`}>
                            <i className={`${item.icon} mr-2 text-sm opacity-75`}></i>
                            {item.text}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
