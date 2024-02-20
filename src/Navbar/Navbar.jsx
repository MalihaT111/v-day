import React from "react";
import './Navbar.css'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="navbar">
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&display=swap')
            </style>
            <div className="navbar-pages">
            <Link to='/' style={{ textDecoration: 'none' }}><p style={{margin:0}}>Home</p></Link>
            <Link to='/Quiz' style={{ textDecoration: 'none' }}><p style={{margin:0}}>Quiz</p></Link>
            <Link to='/Coupon' style={{ textDecoration: 'none' }}><p style={{margin:0}}>Coupon</p></Link>
            <Link to='/Gallery' style={{ textDecoration: 'none' }}><p style={{margin:0}}>Gallery</p></Link>
            </div>
            <div className="navbar-decoration"></div>
        </div>
    )
}
export {Navbar} 
