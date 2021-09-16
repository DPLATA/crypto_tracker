import React, { useRef, useEffect } from 'react'
import { select, axisLeft } from 'd3'

function AXISLEFT( {innerWidth, yScale }) {

const ref = useRef();
  useEffect(() => {
    const yAxisG = select(ref.current);
    const yAxis = axisLeft(yScale)
    .tickSize(-innerWidth)
    .tickPadding(10)

    yAxisG.call(yAxis);
  }, []);


    return (
            <g ref={ref} />
        
    )
}

export default AXISLEFT
