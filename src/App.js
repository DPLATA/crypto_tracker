import CENTRAL_HUB from './components/CENTRAL_HUB.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SINGLE_COIN from './components/SINGLE_COIN.js';
import DARK_MODE_BUTTON from './components/DARK_MODE_BUTTON.js';
import { useState } from 'react';
import NAV_BAR from './components/NAV_BAR.js'
import './App.css';

function App() {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		if (darkMode === false) {
			setDarkMode(true);
		} else {
			setDarkMode(false);
		}
	};

	return (
		<Router>
			
			<div className='App'>
				<NAV_BAR />
				<DARK_MODE_BUTTON
					toggleDarkMode={toggleDarkMode}
					darkModeEnable={darkMode}
				/>

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
	);
}

export default App;
