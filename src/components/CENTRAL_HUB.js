import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import COIN from './COIN.js';
import SEARCH_BAR from './SEARCH_BAR.js';

function CENTRAL_HUB() {
	const API_URL =
		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
	const [coins, setCoins] = useState([]);

	useEffect(() => {
		axios
			.get(API_URL)
			.then((res) => {
				console.log(res);
				setCoins(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	

	return (
		<div>
			<h1> Cryptocurrency tracker</h1>
			<h3> Check out prices and market cap for top cryptocurrencies</h3>

			<SEARCH_BAR coins={coins} />

			<div className='Coin-grid'>
				<div className='headers'>
					<div className='header-item'> Rank </div>
					<div className='header-item'> Currency </div>
					<div className='header-item'> Symbol </div>
					<div className='header-item'> Tag </div>
					<div className='header-item'> Price </div>
					<div className='header-item'> 24 Hour high </div>
					<div className='header-item'> 24 Hour low </div>
					<div className='header-item'> Market Cap </div>
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
		</div>
	);
}

export default CENTRAL_HUB;
