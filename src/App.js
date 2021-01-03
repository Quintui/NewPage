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

function App() {
  return (
    <Router>
        <Switch>
            <Route>
                <NavBar/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
