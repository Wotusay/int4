import React from 'react';
import styles from "./App.module.css";
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/home.js'
import { ROUTES } from './consts';
import PicturesDetail from './components/PicturesDetail/PicturesDetail.js';



function App() {
  return (
    <div className={styles.container}>
      <Switch>
        <Route exact path={ROUTES.home}>
          <Home/>
        </Route>
        <Route  path={ROUTES.pictureDetail.path}>
          <PicturesDetail/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
