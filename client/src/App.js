import logo from './logo.svg';
import './App.css';
import Error_ from './components/error/Error';
import history from './history';
import {
  Route,
  Router,
  Switch,
  BrowserRouter as Routerr,
} from 'react-router-dom';

import Home from './components/home/Home';

function App() {
  return (
    <div className='App'>
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/:error' exact component={Error_} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
