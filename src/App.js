import React from 'react'
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
  return (
    <Router>
        <Switch>
            <Route>
                <NavBar/>
                <SideBar/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
