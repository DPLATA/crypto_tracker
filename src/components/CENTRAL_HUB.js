import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import COIN from './COIN.js'

function CENTRAL_HUB() {

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
const [coins, setCoins] = useState([])


useEffect(() => {
    axios
    .get(API_URL)
    .then(res => {
        //TODO: remove console logs not necessarily right away but should not be there
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
                <COIN key={coin.id} id={coin.id} name={coin.name} img={coin.image} 
                symbol={coin.symbol} price={coin.current_price} 
                high={coin.high_24h} low={coin.low_24h} marketcap={coin.market_cap}/>
            )}
        </div>
    )
}

export default CENTRAL_HUB
