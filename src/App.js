import CENTRAL_HUB from './Pages/CENTRAL_HUB.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SINGLE_COIN from './Pages/SINGLE_COIN.js'
import NAV_BAR from './components/NAV_BAR.js'

function App() {
  return (
    <Router>
      <div className='App'>
        <NAV_BAR />
        {/*<DARK_MODE_BUTTON
          toggleDarkMode={toggleDarkMode}
          darkModeEnable={darkMode}
        />*/}

        <Switch>
          <Route exact strict path='/'>
            <CENTRAL_HUB />
          </Route>
          <Route exact strict path='/:id'>
            <SINGLE_COIN />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
