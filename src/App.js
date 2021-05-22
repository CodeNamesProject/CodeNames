import Mainpage from './pages/Mainpage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Game from './pages/Game'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/game" component={Game} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/" exact component={Mainpage} />
        </Switch>
      </div>
      </Router>
  );
}

export default App;
