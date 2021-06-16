import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Spring from './pages/Spring';
import Summer from './pages/Summer';
import Autumn from './pages/Autumn';
import Winter from './pages/Winter';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home" exact>
            <Main />
          </Route>
          <Route path="/spring">
            <Spring />
          </Route>
          <Route path="/summer">
            <Summer />
          </Route>
          <Route path="/autumn">
            <Autumn />
          </Route>
          <Route path="/winter">
            <Winter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
