import React from 'react'
import { Link } from 'react-router-dom'
import '../css/COIN_STYLES.css'
import { numberWithCommas } from './FORMAT_FUNCTIONS.js'

function COIN(props) {
  const { name, symbol, img, price, high, low, marketcap, id, rank } = props

  return (
    <div className='Coin-item' data-testid={id}>
      <div className='Coin-spec media-hidden'>{rank}</div>
      <div className='Coin-spec'>
        <Link className='anch' to={`/${id}`}>
          {name}
        </Link>
      </div>
      <div className='Coin-spec media-hidden'>{symbol}</div>
      <div className='Coin-spec media-hidden'>
        <img className='Coin-image' src={img} alt='coin-tag' />{' '}
      </div>
      <div className='Coin-spec'>${numberWithCommas(price)}</div>
      <div className='Coin-spec'>${numberWithCommas(high)}</div>
      <div className='Coin-spec'>${numberWithCommas(low)}</div>
      <div className='Coin-spec media-hidden'>
        ${numberWithCommas(marketcap)}
      </div>
    </div>
  )
}

export default COIN
