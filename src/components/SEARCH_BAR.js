import React, { useState } from 'react';
import '../css/SEARCH_BAR_STYLES.css';

function SEARCH_BAR(props) {
	const { coins } = props;

	const [search, setSearch] = useState('');

	const filteredCoins = coins.filter((coin) => {
		return coin.name.toLowerCase().includes(search.toLowerCase());
	});

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	return (
		<div className='search-div'>
			<h5> Search currency by name </h5>
			<input
				className='searchbar'
				type='text'
				value={search}
				onChange={handleChange}
			/>
			{search === '' ? (
				<p></p>
			) : (
				<div className='drop-search'>
					{filteredCoins.map((coin) => (
						<div key={coin.id} className='search-coin'>
							{coin.name}, {coin.current_price}
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default SEARCH_BAR;
