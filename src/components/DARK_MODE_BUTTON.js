import '../css/DARKMODE_STYLES.css'
import { FaMoon, FaSun } from 'react-icons/fa'

function DARK_MODE_BUTTON({ toggleDarkMode, darkModeEnable }) {
  return (
    <button type='button' className='Dark-button' onClick={toggleDarkMode}>
      {darkModeEnable ? <FaMoon /> : <FaSun />}
    </button>
  )
}

// Henlo

export default DARK_MODE_BUTTON
