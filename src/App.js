import './App.css';
import Home from './Home'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Policy from './Policy';
import Preloader from './Preloader';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/policy">
           <Policy />
        </Route>
        <Route path="/index">
           <Home />
        </Route>
        <Route path="/">
          <Preloader />
           <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
