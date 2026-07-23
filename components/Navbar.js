"use client";

import Link from "next/link";


export default function Navbar() {
    return (
        <nav className="w-full bg-[#003366] shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex tems-center justify-between">

                {/* {Logo/Title} */}
                    <Link href="/" className="text-2xl font-bold text-white">
                        SYL Portfolio
                    </Link>

                    {/* {Navigation Links} */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link
                                href="/"
                                className="text-white hover:text-cyan-300 transition fron-medium"
                            >
                                Home
                            </Link>

                            <Link
                                href="/about"
                                classname="text-white hover:text-cyan-300 transition font-medium"
                            >
                                About
                            </Link>

                            <Link
                                href="/ministry"
                                className="text-white hover:text-cyan-300 transition font-medium"
                            >
                                Ministry
                            </Link>

                            <Link
                                href="/portfolio"
                                className="text-white hover:text-cyan-300 transition font-medium"
                            >
                                Portfolio
                            </Link>

                            <Link
                                href="/contact"
                                className="text-white hover:text-cyan-300 transition font-medium"
                            >
                                Contact
                            </Link>
                        </div>

                        {/* {Mobile Menu Button} */}
                        <button className="md:hidden text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
            </div>
        </nav>
    );
}