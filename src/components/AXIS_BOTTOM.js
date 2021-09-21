import React, { useRef, useEffect } from 'react';
import { select, axisBottom } from 'd3';

function AXIS_BOTTOM({ xScale, innerHeight }) {
	const ref = useRef();

	useEffect(() => {
		const xAxisG = select(ref.current);
		const xAxis = axisBottom(xScale).tickArguments([7]).tickPadding(20).tickSize(0);
		xAxisG.call(xAxis);
	}, [xScale]);

	return (
		<g className='axis-bottom' transform={`translate(0,${innerHeight - innerHeight / 7})`} ref={ref} />
	);
}

export default AXIS_BOTTOM;
