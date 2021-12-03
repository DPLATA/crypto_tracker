import React from 'react';
import '../css/SINGLE_BAR_STYLES.css';
import { numberWithCommas } from './FORMAT_FUNCTIONS.js' 
import { MdInfoOutline } from 'react-icons/md'
import { Tooltip } from 'react-tippy'
import 'react-tippy/dist/tippy.css'
import { marketCapDescription,
		 volumeDescription,
		 dilutedMarketDescription, 
		 circSupplyDescription} from './DESCRIPTIONS.js'



function SINGLE_BAR({ data, symbol }) {
	symbol = symbol.toUpperCase();

	const remainSupply = (data.circulating_supply * 100) / data.max_supply;

	

	return (
		<div className='single-bar-container'>
			<div className='market-cap-container'>
				<h6>Market cap: <span className='info-icon'>
					<Tooltip html={marketCapDescription()} size='small' position='bottom'>
						<MdInfoOutline />
					</Tooltip></span>
				</h6> 
				<p>${numberWithCommas(data.market_cap.usd)}</p>
				<p className={data.market_cap_change_percentage_24h > 0 ?
								'green-text':
								'red-text'}>
					{numberWithCommas(data.market_cap_change_percentage_24h)}%</p>
			</div>
			<div className='diluted-container'>
				<h6>Total Volume: <span className='info-icon'>
					<Tooltip size='small' html={volumeDescription()} position='bottom'>
						<MdInfoOutline />
					</Tooltip></span>
				</h6> 
				<p>${data.total_volume.usd ?
				numberWithCommas(data.total_volume.usd):
				''}</p>
			</div>
			<div className='volume-container'>
				<h6>Volume 24h: <span className='info-icon'>
					<Tooltip html={dilutedMarketDescription()} size='small'>
						<MdInfoOutline />
					</Tooltip></span>
				</h6> 
				<p>${numberWithCommas(data.total_volume.usd)}</p>
			</div>
			<div className='supply-container'>
				<h6>Circulating supply <span className='info-icon'>
					<Tooltip html={circSupplyDescription()} size='small'>
						<MdInfoOutline />
					</Tooltip></span>
					</h6>
				{data.max_supply ? (
					<>
						<div className='remaining-supply'>
							<p>
								{numberWithCommas(data.circulating_supply)}
								{symbol}
							</p>
							<p>{Math.round(remainSupply * 100) / 100}%</p>
						</div>
						<progress className='progress-bar' max={data.max_supply} value={data.circulating_supply} />
					</>
				) : (
					<div className='remaining-supply'>
						<p>
							{numberWithCommas(data.circulating_supply)} {symbol}
						</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default SINGLE_BAR;
