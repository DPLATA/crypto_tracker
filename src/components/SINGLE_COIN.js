import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../css/SINGLE_COIN_STYLES.css'
import SINGLE_BAR from './SINGLE_BAR'


function SINGLE_COIN(props) {

    const { id } = useParams()
    console.log(id);
    

    const SINGLE_API = `https://api.coingecko.com/api/v3/coins/${id}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`

    const [coin, setCoin] = useState({})
    const [status, setStatus] = useState('')


     useEffect(() => {
        axios
        .get(SINGLE_API)
        .then(res => {
            setCoin(res.data)
            setStatus(res.status)
            console.log(res.data)
        })
        .catch(error => {
            console.log(error)
        })
        }, [])

        const stripHtml = (text) => {
            let doc = new DOMParser().parseFromString(text, 'text/html');
            return doc.body.textContent || "";

        }


    return (


        <div>
            {status !== 200 ? 
            <h3>Loading...</h3> :
            <div className= 'parent-grid'>
            <h2 className = 'coin-name'>{coin?.name}</h2> 
            <img src={coin?.image?.small} alt='coin symbol'/> 
            <div className='price-bar'><SINGLE_BAR className='price-bar' data={coin.market_data}/></div>
            <div className = 'coin-description'>{stripHtml(coin?.description?.en)}</div>
            </div>
            }
        </div>

    )
}

export default SINGLE_COIN
