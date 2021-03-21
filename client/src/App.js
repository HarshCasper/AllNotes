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
import { useState, useEffect } from 'react';

import Home from './components/home/Home';
import screenGif from './gif/splash-screen.gif';

function App() {
  const [onLoading, changeLoading] = useState(true);
  let content = <img src={screenGif} alt='Loading...' />;

  // let content = 'Loading...';

  if (!onLoading)
    content = (
      <div className='App'>
        <Router history={history}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/:error' exact component={Error_} />
          </Switch>
        </Router>
      </div>
    );

  useEffect(() => {
    changeLoading(false);
  }, []);

  // let contentToShow = (
  //   <div className='App'>
  //     <Router history={history}>
  //       <Switch>
  //         <Route path='/' exact component={Home} />
  //         <Route path='/:error' exact component={Error_} />
  //       </Switch>
  //     </Router>
  //   </div>
  // );

  return content;

  // {onLoading ? { contentToShow } : <div>" loading" </div>}
}

export default App;
