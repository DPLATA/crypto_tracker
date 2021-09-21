import React, { useRef, useEffect } from 'react';
import { select, axisLeft, format } from 'd3';

function AXIS_LEFT({ innerWidth, yScale }) {
	const ref = useRef();
	useEffect(() => {
		const yAxisG = select(ref.current);
		const yAxis = axisLeft(yScale).ticks(5).tickSize(-innerWidth).tickPadding(10).tickFormat(format(".3s"));

		yAxisG.call(yAxis);
	}, [yScale, innerWidth]);

	return <g className='axis-left' ref={ref} />;
}

export default AXIS_LEFT;
