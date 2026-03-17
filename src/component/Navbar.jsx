import { Github } from 'lucide-react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const navClass = ({ isActive }) =>
        isActive ? "underline text-primary font-semibold" : "hover:text-primary";
    const navLinks = <>
        <li><NavLink className={navClass} to={"/"}>Home</NavLink></li>
        <li><NavLink className={navClass} to={"/apps"}>Apps</NavLink></li>
        <li><NavLink className={navClass} to={"/installation"}>Installation</NavLink></li>
    </>
    return (
        <div className="bg-base-100 shadow-sm sticky top-0 z-100">
            <div className="navbar max-w-360 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="font-bold menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/" className='flex gap-1 items-center'>
                        <img src={logo} className='w-8 h-8' alt="hero.io logo" />
                        <span className="text-primary font-bold"> HERO.IO </span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="font-bold menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='http://www.github.com/' target='_blank' className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-none"><Github size={20} /> Contribute</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;