import React from 'react'
import '../css/DARKMODE_STYLES.css'
import { FaMoon, FaSun} from 'react-icons/fa'

function DARKMODEBUTTON() {
    return (
        <div className='Dark-button'>
            <FaSun />
            <FaMoon />
        </div>
    )
}

export default DARKMODEBUTTON
