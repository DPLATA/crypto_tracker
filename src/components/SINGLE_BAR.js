import React from 'react'

function SINGLE_BAR(props) {

    const { data } = props



    return (
        <div className='single-bar-container'>
            <div className='current-container'>
            <ul>
                <li>Current price: {data.current_price.usd}</li>
                <li>All time high: {data.ath.usd}</li>
                <li>ATH date: {data.ath_date.usd}</li>
                <li>Circulating supply: {data.circulating_supply}</li>
                <li>Max supply: {data.max_supply}</li>
                <li>Market cap: {data.market_cap.usd}</li>
                <li>Market cap change 24h: {data.market_cap_change_24h}</li>
            </ul>
            </div>
            <div className='price-change-container'>
            <ul>
                <li>Price change 24h: ${data.price_change_24h}</li>
                <li>Price change % 14d: %{data.price_change_percentage_14d}</li>
                <li>Price change % 30d: %{data.price_change_percentage_30d}</li>
                <li>Price change % 1y: %{data.price_change_percentage_1y}</li>
            </ul>
            </div>
        </div>
    )
}

export default SINGLE_BAR
