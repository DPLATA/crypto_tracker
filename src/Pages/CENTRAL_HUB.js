import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import COIN from '../components/COIN.js'
import SEARCH_BAR from '../components/SEARCH_BAR.js'
import { CircularProgress } from '@material-ui/core'

function CENTRAL_HUB() {
  const [coins, setCoins] = useState([])
  const [page, setPage] = useState('1')
  const paginationArray = ['1', '2', '3', '4']
  const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res)
        setCoins(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  if (!coins) {
    return <CircularProgress />
  }

  return (
    <div>
      <h1> Cryptocurrency tracker</h1>
      <h3> Check out prices and market cap for top cryptocurrencies</h3>

      <SEARCH_BAR coins={coins} />

      <div className='Coin-grid'>
        <div className='headers'>
          <div className='header-item media-hidden'> Rank </div>
          <div className='header-item'> Currency </div>
          <div className='header-item media-hidden'> Symbol </div>
          <div className='header-item media-hidden'> Tag </div>
          <div className='header-item'> Price </div>
          <div className='header-item'> 24 Hour high </div>
          <div className='header-item'> 24 Hour low </div>
          <div className='header-item media-hidden'> Market Cap </div>
        </div>

        {coins.map((coin) => (
          <COIN
            key={coin.id}
            rank={coin.market_cap_rank}
            id={coin.id}
            name={coin.name}
            img={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            high={coin.high_24h}
            low={coin.low_24h}
            marketcap={coin.market_cap}
          />
        ))}
      </div>
      <div className='pagination-btns'>
        {paginationArray.map((number) => {
          return (
            <button key={number} onClick={() => setPage(number)}>
              {number}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default CENTRAL_HUB
