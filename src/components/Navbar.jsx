import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-blue-500 p-4 text-white">
            <div className="container mx-auto flex items-center justify-between">
                {/* Brand */}
                <Link to="/" className="text-2xl font-bold">
                    Expense Tracker
                </Link>

                {/* Hamburger Menu for Small Screens */}
                <button
                    className="block md:hidden focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>

                {/* Links for Larger Screens */}
                <div
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } md:flex space-x-4 mt-4 md:mt-0`}
                >
                    <Link
                        to="/add"
                        className="block px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add Expense
                    </Link>
                    <Link
                        to="/summary"
                        className="block px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Summary
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
