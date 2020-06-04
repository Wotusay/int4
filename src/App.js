import React from 'react';
import styles from "./App.module.css";
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/home.js'



function App() {
  return (
    <div className={styles.container}>
      <Switch>
        <Route>
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
