
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Registeration';
import Navbar from './Navbar';
import ShowMore from './ShowMore';
import Favouriate from './Favouriate';
import { useState} from 'react';
import { ThemeContext } from './Context/ThemeContext';



function App() {

  const {theme,setTheme}=useState('dark');

  return (
    <div className={`App bg-${theme}`} dir={theme == "dark" ? "light" : "dark"} >
    <ThemeContext.Provider value={{theme,setTheme}}>
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path={"/"} component={Home}></Route>
      <Route exact path={"/login"} component={Login}></Route>
      <Route exact path={"/register"} component={Register}></Route>
      <Route exact path={"/showmore/:id"} component={ShowMore}></Route>
      <Route exact path={"/Fav/:id"} component={Favouriate}></Route>
    </Switch>
    </BrowserRouter>
    </ThemeContext.Provider>
    </div>

  );
}

export default App;
