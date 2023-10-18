// import React, { FC } from 'react'
// import { useState } from 'react';
import './menuCSS.css';
import { 
    Link,
} from 'react-router-dom';
import Logo from './../../photo/tooth1.png';
// import profile from './../../photo/girl.png';
import NavbarAdmin from '../navbar/navbarAdmin';

function Menu() {
    return (
        <>
            <div className='home'>
                <div className='space'>
                    <div className='logo'>
                        <img src={Logo} alt='logo' />
                    </div>
                    <div className='menu'>
                        <div><Link to='/'>หน้าหลัก</Link></div>
                        <div><Link to=''>แพทย์</Link></div>
                        <div><Link to=''>ติดต่อเรา</Link></div> 
                    </div>
                </div>
                <div className='content'>
                </div>
                <div className='footer'>
                    
                </div>
            </div>
        </>
    )
}
export default Menu