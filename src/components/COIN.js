import React from 'react'
import '../css/COIN_STYLES.css'

function COIN(props) {

    const { name, symbol, img, price, high, low, marketcap, id } = props

    return (
    //TODO: from now on remember to set data-testid attributes to html elements for testing purposes
        <div className= 'Coin-item' data-testid={id}>
            <div className='Coin-spec'>{name}</div>
            <div className='Coin-spec'>{symbol}</div>
            {/* TODO: add an alt attribute to img tag */}
            <div className='Coin-spec'><img className='Coin-image' src={img}/> </div>
            <div className='Coin-spec'>{price}</div>
            <div className='Coin-spec'>{high}</div>
            <div className='Coin-spec'>{low}</div>
            <div className='Coin-spec'>{marketcap}</div>
        </div>
    )
}

export default COIN