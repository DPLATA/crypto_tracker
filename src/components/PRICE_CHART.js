import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { scaleLinear, extent, scaleTime, line, curveNatural } from 'd3'
import AXIS_BOTTOM from './AXIS_BOTTOM'
import AXIS_LEFT from './AXIS_LEFT'


function PRICE_CHART( { id }) {

    const svgRef = useRef()

    const [history, setHistory] = useState(null)
    //const [prices, setPrices] = useState()
    //const [dates, setDates] = useState()

    const historyURL = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=90&interval=daily`

    //const xValues = []
    //const yValues = []
    const innerWidth = window.innerWidth * 0.45
    const innerHeight = window.innerHeight / 2
    const margin = {
        top: 10,
        left: 50
    }
    
    useEffect(() => {
        axios
        .get(historyURL)
        .then(res => {
            setHistory(res.data) 
            console.log(res.data)
        })
        .catch(err => console.log(err))
        

    }, [historyURL])
    

            

    if(!history) { 
        return <pre>Loading...</pre>
    }

    const xValue = d => d[0]
    const yValue = d => d[1]

    const yScale = scaleLinear()
        .domain(extent(history.prices, yValue))
        .range([innerHeight -70, 0])

    const xScale = scaleTime()
        .domain(extent(history.prices, xValue))
        .range([0, innerWidth])

    /*const svg = select(svgRef.current)
    const xAxis = axisBottom(xScale)
    svg.select('.x-axis').call(xAxis)*/

    
    

        
    return (
        <div className= 'svg-container'>
           <svg height={innerHeight} width={innerWidth} ref={svgRef}>
            <g transform={`translate(${margin.left},${margin.top})`}>
            <AXIS_BOTTOM xScale={xScale} innerHeight= {innerHeight}/>
            <AXIS_LEFT yScale={yScale} innerWidth= {innerWidth} />
            <path
                stroke='black'
                fill='none'
                d={ 
                    line()
                    .x(d => xScale(xValue(d)))
                    .y(d =>yScale(yValue(d)))
                    .curve(curveNatural)(history.prices)
                       
                } />
               
               </g>
           </svg>
        </div>
    )
}

export default PRICE_CHART
