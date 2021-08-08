import React from 'react'
import { Link } from 'react-router-dom'
import '../css/COIN_STYLES.css'

function COIN(props) {

    const { name, symbol, img, price, high, low, marketcap, id } = props

    return (
        <div className= 'Coin-item' data-testid={id}>
            <div className='Coin-spec'> <Link to={`/${id}`}>{name}</Link></div>
            <div className='Coin-spec'>{symbol}</div>
            <div className='Coin-spec'><img className='Coin-image' src={img} alt='coin-tag'/> </div>
            <div className='Coin-spec'>{price}</div>
            <div className='Coin-spec'>{high}</div>
            <div className='Coin-spec'>{low}</div>
            <div className='Coin-spec'>{marketcap}</div>
        </div>
    )
}

export default COIN