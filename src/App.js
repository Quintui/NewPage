import React, {useState} from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";
import SideBar from './components/SideBar/Sidebar';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => { 
    setIsOpen(!isOpen)
  }

  return (
    <Router>
        <Switch>
            <Route>
                <NavBar  toggle = {toggle}/>
                <SideBar toggle = {toggle} isOpen ={isOpen}/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
