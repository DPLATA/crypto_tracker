import React from 'react'
import { timeFormat } from 'd3'

function CHART_TOOLTIP({ prices, xScale, yScale, activeIndex }) {


    const formatDate = timeFormat("%m/%d/%Y")


    
    return (
        prices.map((item, index) => 
        <g key={index} >
        <circle
            cx={xScale(item[0])}
            cy={yScale(item[1])}
            r={2}
            fill='#A0B700'
            strokeWidth={index === activeIndex ? 2 : 0}
            stroke="#fff"
            style={{ transition: "ease-out .1s" }}
        />
        <g className='tooltip-box'>
        <text 
            className= 'tooltip-info'
            x={xScale(item[0])}
            y={30}
            textAnchor="middle"
        >
            {index === activeIndex ? `Price: $${Math.round(item[1] * 100) / 100}` : ""}
        </text>
        <text 
            className= 'tooltip-info'
            x={xScale(item[0])}
            y={45}
            textAnchor="middle"
        >
            {index === activeIndex ? ` Date: ${formatDate(item[0])}` : ""}
        </text>
        </g>
    </g>
    ))
            

}


export default CHART_TOOLTIP
