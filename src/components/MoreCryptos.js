import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import BTC from '../assets/btc-img.png'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import Navbar from './Navbar'


function MoreCryptos() {
    
    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data);
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    

    if (!data) return null

    
    return (
        <>
            <Navbar />

            <div className='featured' id='featured' style={{clipPath: 'polygon(0 0, 100% 1%, 100% 100%, 0% 100%)'}}>
                <div className='container'>


                    {/* Left */}
                    <div className='left'>
                        <h2>100 Coins</h2>
                    </div>



                    {/* Right */}
                    <div className='right' style={{padding: '10px 15%'}}>
                        {
                            data.map(coin => {
                                return (
                                    <div className='card'>
                                    <div className='top'>
                                        {/* <img src={BTC} alt='/' /> */}
                                        <img src={coin.image} alt='' />
                                    </div>
                                    <div>
                                        <h5><small>{coin.name}</small></h5>
                                        <p>${coin.current_price.toLocaleString()}</p>
                                    </div>
        
                                    {coin.price_change_percentage_24h < 0 ? (
                                        <span className='red'>
                                            <FiArrowDown className='icon' />
                                            {coin.price_change_percentage_24h.toFixed(2)}%
                                        </span>
                                    ) : (
                                        <span className='green'>
                                            <FiArrowUpRight className='icon' />
                                            {coin.price_change_percentage_24h.toFixed(2)}%
                                        </span>
                                    )}
                                </div>
                                )
                            })
                        }
                    </div>


                    
                </div>

            </div>
        </>
    )
}

export default MoreCryptos