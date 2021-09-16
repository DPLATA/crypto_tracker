import React, { useState } from 'react'
import '../css/DARKMODE_STYLES.css' 
import { FaMoon, FaSun } from 'react-icons/fa'

function DARKMODEBUTTON(props) {

    const { toggledark } = props
    const [ballClass, setballClass] = useState('ball')

    const handleClick = () => {
        toggledark();
        if(ballClass === 'ball') {
            setballClass('dark-ball')
        } else {
            setballClass('ball')
        }
    }

    

    
    return (
        <div className= 'Dark-button' onClick={handleClick}>
            <FaSun  className='sun'/>
            <FaMoon className='moon'/>
            <div className={ballClass}></div>
        </div>
    )
}

// Henlo

export default DARKMODEBUTTON
