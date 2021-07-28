import {render, screen, cleanup} from '@testing-library/react';
import COIN from '../COIN'
import axios from 'axios'

afterEach(() => {
    cleanup()
})

test('Should render COIN component',async () => {
    const TESTABLE_COINS = ['bitcoin', 'ethereum', 'binancecoin', 'dogecoin', 'cardano', 'chainlink', 'polkadot', 'litecoin', 'dai', 'monero', 'neo', 'ripple', 'crypto-com-chain', 'shiba-inu']

    const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    const COINS = await axios.get(API_URL).then(response => {
        return response.data
    })

    let random_coin = ''

    //Render all coins from API
    render(COINS.map(coin => 
        <COIN key={coin.id} id={coin.id} name={coin.name} img={coin.image} 
        symbol={coin.symbol} price={coin.current_price} 
        high={coin.high_24h} low={coin.low_24h} marketcap={coin.market_cap}/>
    ))

    for (let index = 0; index < TESTABLE_COINS.length / 2; index++) {
        random_coin = TESTABLE_COINS[Math.floor(Math.random() * (TESTABLE_COINS.length))]
        
        expect(screen.getByTestId(random_coin)).toBeInTheDocument()
    }
})