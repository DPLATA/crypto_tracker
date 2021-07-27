import {render, screen, cleanup} from '@testing-library/react';
import COIN from '../COIN'
import axios from 'axios'

afterEach(() => {
    cleanup()
})

test('Should render COIN component',async () => {
    const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    const coins = await axios.get(API_URL).then(response => {
        return response.data
    })

    //Render all coins from API
    render(coins.map(coin => 
        <COIN key={coin.id} id={coin.id} name={coin.name} img={coin.image} 
        symbol={coin.symbol} price={coin.current_price} 
        high={coin.high_24h} low={coin.low_24h} marketcap={coin.market_cap}/>
    ))

    //TODO: update this to check for 5 random coins out of an array of 10
    const bitcoin = screen.getByTestId('bitcoin')
    const ethereum = screen.getByTestId('ethereum')
    const dogecoin = screen.getByTestId('dogecoin')
    expect(bitcoin).toBeInTheDocument();
    expect(ethereum).toBeInTheDocument();
    expect(dogecoin).toBeInTheDocument();
})