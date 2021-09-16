import React, { useRef, useEffect } from 'react'
import { select, axisBottom } from 'd3'

function AXIS_BOTTOM( { xScale, innerHeight } ) {

  const ref = useRef()
  
  useEffect(() => {
    const xAxisG = select(ref.current);
    const xAxis = axisBottom(xScale)
      .tickPadding(18);
    xAxisG.call(xAxis);
  }, [xScale]);


    return (
     
            <g transform={`translate(0,${innerHeight - (innerHeight / 7)})`} ref={ref} />
       
    )
}

export default AXIS_BOTTOM
