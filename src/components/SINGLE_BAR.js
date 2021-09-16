import React from 'react'
import '../css/SINGLE_BAR_STYLES.css'

function SINGLE_BAR( { data, symbol } ) {

    symbol = symbol.toUpperCase()

    


    const remainSupply = (data.circulating_supply * 100) / data.max_supply

    const numberWithCommas = (x)  => {
            let parts = x.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join("."); 
    }


    return (
        <div className='single-bar-container'>
            <div className='market-cap-container'>
                <h6>Market cap:</h6> {data.market_cap.usd}
                 {data.market_cap_change_24h}
            </div>
            <div className='diluted-container'>
                <h6>Diluted Market Cap:</h6> {data.market_cap.usd}
            </div>
            <div className='volume-container'>
                <h6>Volume 24h:</h6>  {data.market_cap.usd}
            </div>
            <div className='supply-container'>
            <h6>Circulating supply</h6>
                { data.max_supply ?
                    <> 
                        <div className='remaining-supply'>
                            <p>{numberWithCommas(data.circulating_supply)}{symbol}</p> 
                            <p>{remainSupply}%</p> 
                        </div> 
                        <progress  max={data.max_supply} value={data.circulating_supply} /> 
                    </> :
                    <div className='remaining-supply'>
                        <p>{numberWithCommas(data.circulating_supply)} {symbol}</p>
                    </div> 
                }


            </div>
        </div>
    )
                }

export default SINGLE_BAR
