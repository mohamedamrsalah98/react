import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Registeration';
import Navbar from './Navbar';
import ShowMore from './ShowMore';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path={"/"} component={Home}></Route>
      <Route exact path={"/login"} component={Login}></Route>
      <Route exact path={"/register"} component={Register}></Route>
      <Route exact path={"/showmore/:id"} component={ShowMore}></Route>

    </Switch>
    </BrowserRouter>
  );
}

export default App;
