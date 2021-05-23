import Mainpage from './pages/Mainpage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Game from './pages/Game'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Createroom from './pages/Createroom'
import Account from './pages/Account';
import Gameroom from './pages/Gameroom'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/gameroom" exact component={Gameroom}/>
          <Route path="/account" component={Account}/>
          <Route path="/createroom" component={Createroom}/>
          <Route path="/homepage" component={Homepage} />
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
