import React from 'react'
import '../css/PRICE_HISTORY_STYLES.css'


export const PRICE_HISTORY = ( {data, name}) => {

  
    const ATH_DATE = data.ath_date.usd
    const ATL_DATE = data.atl_date.usd
    return (
        <div className='history-flex'>
            <div><h3>{name} price Statistics</h3></div>
            <div className='history-spec'>
                <p className='history-spec-title'>All time high</p>
                <p className='history-spec-data'>{data.ath.usd} USD</p>
            </div>
            <div className='history-spec'>
                <p className='history-spec-title'>All time high date</p>
                <p className='history-spec-data'>{ATH_DATE}</p>
            </div>
            <div className='history-spec'>
                <p className='history-spec-title'>All time low</p>
                <p className='history-spec-data'>{data.atl.usd} USD</p>
            </div>
            <div className='history-spec'>
                <p className='history-spec-title'>All time low date</p>
                <p className='history-spec-data'>{ATL_DATE} USD</p>
            </div>
            <div className='history-spec'>
                <p className='history-spec-title'>Price</p>
                <p className='history-spec-data'>{data.current_price.usd}</p>
            </div>
            <div className='history-spec'>
                <p className='history-spec-title'>Price change 24h</p>
                <p className='history-spec-data'>{data.price_change_24h} USD</p>
            </div>
            <div className='history-spec'>
                <p className='history-spec-title'>Price high/Low 24h</p>
                <p className='history-spec-data'>{data.high_24h.usd}/{data.low_24h.usd} USD</p>
            </div>  
        </div>
    )
}
