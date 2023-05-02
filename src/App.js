
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './Compenent/Dashboard';


function App() {
  return (
    <div className="App">

      <Switch>

      <Route exact path="/"><Dashboard/></Route>

      </Switch>

    </div>
  );
}

export default App;
