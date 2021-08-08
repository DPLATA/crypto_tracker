import CENTRAL_HUB from './components/CENTRAL_HUB.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SINGLE_COIN from './components/SINGLE_COIN.js';




function App() {


  return (
    <Router>
    <div className="App">
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