import React from 'react';
import { CiSearch } from "react-icons/ci";
import { IoPeopleCircleOutline } from "react-icons/io5";



import './navbar.css';

const Navbar = () => {
    return (
        <>
            <div className="container w-75 d-flex align-items-center justify-content-between mt-3">
                <div className="brand">
                    <img src='https://flone.jamstacktemplates.dev/assets/img/logo/logo.png' />
                </div>
                <div className="menu">
                    <ul className='list-unstyled d-flex align-items-center gap-4 p-0 m-0 justify-content-between'>
                        <li>Home</li>
                        <li>Shop</li>

                        <li>Collection</li>
                        <li>Pages</li>
                        <li>Blogs</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="social-icons d-flex align-items-center gap-4 p-0 m-0 justify-content-between">
                    <div className="search"> <CiSearch size={22} /></div>
                    <div className="s-icon"><IoPeopleCircleOutline size={22} />
                    </div>
                </div>

            </div>

        </>
    );
};

export default Navbar;
