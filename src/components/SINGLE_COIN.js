import { CircularProgress } from '@material-ui/core'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../css/SINGLE_COIN_STYLES.css'
import PRICE_CHART from './PRICE_CHART'
import SINGLE_BAR from './SINGLE_BAR'
import SINGLE_COIN_COMMUNITY from './SINGLE_COIN_COMMUNITY'


function SINGLE_COIN(props) {

    const { id } = useParams()
  
    const SINGLE_API = `https://api.coingecko.com/api/v3/coins/${id}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`

    const [coin, setCoin] = useState({})
    const [status, setStatus] = useState('')


     useEffect(() => {
        axios
        .get(SINGLE_API)
        .then(res => {
            setCoin(res.data)
            setStatus(res.status)
            //console.log(res.data)
        })
        .catch(error => {
            console.log(error)
        })
        }, [])

        /*const stripHtml = (text) => {
            let doc = new DOMParser().parseFromString(text, 'text/html');
            return doc.body.textContent || "";

        }*/



    return (


        <div>
            {status !== 200 ? 
            <div>
                <CircularProgress className='loading-bar'/>
            </div>:
            <div className= 'parent-grid'>
                <h2 className = 'coin-name'> <img src={coin?.image?.small} alt='coin symbol'/> {coin?.name}</h2> 
                <div className= 'coin-price'> 
                    <h1> {coin?.market_data?.current_price?.usd} US$ </h1>
                    <p  className= {coin?.market_data?.price_change_percentage_24h > 0 ?
                         'daily-change' :
                         'daily-change-neg'}> 
                            %{coin?.market_data?.price_change_percentage_24h} 
                    </p>
                </div>
                <div className='community-bar'>
                    <SINGLE_COIN_COMMUNITY 
                    site={coin?.links?.homepage[0]} 
                    github={coin?.links?.repos_url?.github[0]}
                    explorers={coin?.links?.blockchain_site}
                    twitter={coin?.links?.twitter_screen_name}
                    reddit={coin?.links?.subreddit_url}
                    facebook={coin?.links?.facebook_username}
                    />
                </div>
                
                    <div className='price-bar'>
                        <SINGLE_BAR data={coin.market_data} symbol={coin.symbol}/>
                    </div>
                    <div className ='chart-container'>
                    <PRICE_CHART id ={id}/>
                    </div>
            </div>
            }
        </div>

    )
}

export default SINGLE_COIN
