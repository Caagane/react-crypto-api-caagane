import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


    return (
        <div className='header'>
            <div className='container'>
                <h2><span className='primary'>Som</span>Crypto</h2>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='home-link'>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a href='#featured'>Featured</a>
                    </li>
                    <li>
                        <a href='#earn'>Earn</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
                {/* <div className='btn-group'>
                    <button className='btn'>Connect Wallet</button>
                </div> */}
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#ddd000'}}/>) : (<FaBars size={20} style={{color: '#ddd000'}} />)}
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
