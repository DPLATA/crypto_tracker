import React from 'react'
import { Link } from 'react-router-dom'
import '../css/NAV_BAR_STYLES.css'

function NAV_BAR() {
  return (
    <nav className='nav'>
      <div>
        <h4>SilverTracker</h4>
      </div>
      <div>
        <Link className='anchor' to='/'>
          <h4>Cryptocurrencies</h4>
        </Link>
      </div>
    </nav>
  )
}

export default NAV_BAR
