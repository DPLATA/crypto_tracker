import React, { useRef, useEffect } from 'react';
import { select, axisLeft } from 'd3';

function AXIS_LEFT({ innerWidth, yScale }) {
	const ref = useRef();
	useEffect(() => {
		const yAxisG = select(ref.current);
		const yAxis = axisLeft(yScale).tickSize(-innerWidth).tickPadding(10);

		yAxisG.call(yAxis);
	}, [yScale, innerWidth]);

	return <g ref={ref} />;
}

export default AXIS_LEFT;
