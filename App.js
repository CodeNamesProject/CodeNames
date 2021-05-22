import Mainpage from './pages/Mainpage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Homepage from './pages/Homepage'
import Createroom from "./pages/Createroom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Gameroom from "./pages/Gameroom";
import Account from "./pages/Account";

function App() {
  return (
    <Router>
      <div>
        <Switch>
            <Route path={"/account"} component={Account}/>
            <Route path={"/gameroom"} component={Gameroom}/>
            <Route path="/createroom" component={Createroom}/>
            <Route path="/homepage" component={Homepage}/>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/" component={Mainpage} />
        </Switch>
      </div>
      </Router>
  );
}

export default App;
