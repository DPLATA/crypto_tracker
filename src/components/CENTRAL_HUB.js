import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Coin from './Coin.js'

function CENTRAL_HUB() {

const [coins, setCoins] = useState([])

useEffect(() => {
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
        console.log(res)
        setCoins(res.data)
    },)
    .catch(err => {
        console.log(err)
    })
}, [])


    return (
        <div>
            {coins.map(coin => 
                <Coin key= {coin.id} id={coin.id} name={coin.name} img={coin.image} 
                symbol= {coin.symbol} price={coin.current_price} 
                high= {coin.high_24h} low= {coin.low_24h} marketcap= {coin.market_cap}/>
                
            )}
        </div>
    )
}

export default CENTRAL_HUB
