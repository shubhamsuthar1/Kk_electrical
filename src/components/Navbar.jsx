// Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const state = useSelector((state) => state.handleCart);

    return (
      
           <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> KK Electrical</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto my-2 text-center">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Service">
                                    Services
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/ProductSection">
                                    Products
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Customercare">
                                Customer care
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <div className="buttons text-center">
                            <NavLink to="/login" className="btn btn-outline-primary m-2">
                                <i className="fa fa-sign-in-alt mr-1"></i> Login
                            </NavLink>
                            <NavLink to="/register" className="btn btn-outline-primary m-2">
                                <i className="fa fa-user-plus mr-1"></i> Register
                            </NavLink>
                            <NavLink to="/cart" className="btn btn-outline-primary m-2">
                                <i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length})
                            </NavLink>
                            {/* <button
                                className="btn btn-outline-dark m-2"
                                onClick={toggleSearchBar}
                            >
                                <i className="fa fa-search mr-1"></i> Search
                            </button> */}
                        </div>
                    </div>
                </div>
            </nav>          
    );
};

export default Navbar;
