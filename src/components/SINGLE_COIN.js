import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function SINGLE_COIN(props) {

    const { id } = useParams()
    console.log(id);
    

    const SINGLE_API = `https://api.coingecko.com/api/v3/coins/${id}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`

    const [coin, setCoin] = useState({})


     useEffect(() => {
        axios
        .get(SINGLE_API)
        .then(res => {
            setCoin(res.data)
            console.log(res.data)
        })
        .catch(error => {
            console.log(error)
        })
        }, [])


    return (


        <div>
            <h2>{coin?.name}</h2> 
            <div>{coin?.public_interest_score}</div>
            <div>{coin?.developer_data?.forks}</div>  
            <div>{coin?.description?.en}</div>
        </div>

    )
}

export default SINGLE_COIN
