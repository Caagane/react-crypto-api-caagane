import React from 'react'
import { Link } from 'react-router-dom'
import Crypto from '../assets/home.svg'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container' id="home">

                {/* Left Side */}
                <div className='left'>
                    <h1>Invest <span className='primary'>Crypto</span></h1>
                    <h2 style={{ marginTop: '-10px' }}>as soon as possible</h2>
                    <h2><small>Buy, Sell <span className='primary1'>Cryptocurrencies</span></small></h2>
                    <div className='input-container'>
                        <Link to="/more-cryptos" className='btn'>See More Coins</Link>
                    </div>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={Crypto} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
