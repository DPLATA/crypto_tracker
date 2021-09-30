import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { scaleLinear, extent, scaleTime, line, curveNatural, bisector, pointer } from 'd3';
import AXIS_BOTTOM from './AXIS_BOTTOM';
import AXIS_LEFT from './AXIS_LEFT';
import CHART_TOOLTIP from './CHART_TOOLTIP';
import '../css/PRICE_CHART_STYLES.css';


function PRICE_CHART({ id, name }) {

	const [activeIndex, setActiveIndex] = useState([])
	const [history, setHistory] = useState(null);
	

	const historyURL = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=90&interval=daily`;


	const innerWidth = window.innerWidth * 0.50;
	let innerHeight = window.innerHeight / 1.7;
	console.log(window.innerHeight)

	if(innerHeight < 500) {innerHeight = 500}

	const margin = {
		top: 10,
		left: 50,
	};

	useEffect(() => {
		axios
			.get(historyURL)
			.then((res) => {
				setHistory(res.data);
			})
			.catch((err) => console.log(err));
	}, [historyURL]);

		if (!history) {
		return <pre>Loading...</pre>;
	}

		const xValue = (d) => d[0];
		const yValue = (d) => d[1];

		const yScale = scaleLinear()
			.domain(extent(history.prices, yValue))
			.range([innerHeight - 70, 30]);

		const xScale = scaleTime()
			.domain(extent(history.prices, xValue))
			.range([0, innerWidth * 0.9]);

		const handleMouseMove = (e) => {
			const bisect = bisector(xValue).left,
			 	x0 = xScale.invert(pointer(e, this)[0]),
				index = bisect(history.prices, x0, 1);
			setActiveIndex(index);
			};

		const handleMouseLeave = () => {
				setActiveIndex(null);
			};
		
		
	return (
		<div className='svg-container'>
			<svg height={innerHeight} width={innerWidth} >
				<g transform={`translate(${margin.left},${margin.top})`} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
				<text x='0' y='15' className='chart-title'>{name} to USD Chart</text>
					<AXIS_BOTTOM xScale={xScale} innerHeight={innerHeight} />
					<AXIS_LEFT yScale={yScale} innerWidth={innerWidth} />
					<path className='main-line'
						d={line()
							.x((d) => xScale(xValue(d)))
							.y((d) => yScale(yValue(d)))
							.curve(curveNatural)(history.prices)}
					/>
					<CHART_TOOLTIP prices={history.prices} xScale={xScale} yScale={yScale} activeIndex={activeIndex}/>
				</g>
			</svg>
		</div>
	);
}

export default PRICE_CHART;
