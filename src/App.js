import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Character from './components/Character';
import Quote from './components/Quote';
import Navbar from './components/Navbar';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <h1>Welcome!</h1>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/Character">
              <Character />
            </Route>

            <Route path="/Quote">
              <Quote />
            </Route>

          </Switch>
        </div>

      </div>
    </Router>
  )
}

export default App;