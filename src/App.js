import CENTRAL_HUB from './components/CENTRAL_HUB.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SINGLE_COIN from './components/SINGLE_COIN.js';
import DARKMODEBUTTON from './components/DARKMODEBUTTON.js';
import { useState } from 'react'
import './App.css'





function App() {

const [dark, setDark] = useState(false)

const toggleDark = () => {
  if (dark === false) {
    setDark(true)
  } else {
    setDark(false)
  }
}


  return (
    <Router>
    <div className="App">
      <DARKMODEBUTTON toggledark={toggleDark} dark={dark}/>
      <Switch>
        <Route exact strict path="/"> 
          <CENTRAL_HUB/> 
        </Route>
        <Route exact strict path="/:id"> 
          <SINGLE_COIN />
        </Route> 
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;