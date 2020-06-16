import React from "react";
import styles from "./App.module.css";
import { Switch, Route } from "react-router-dom";
import Photobook from "./components/Photobook/photobook";
import { ROUTES } from "./consts";
import PicturesDetail from "./components/PicturesDetail/PicturesDetail.js";
import Room from "./components/Room/room";
import Header from "./components/Header/header";
import Login from "./components/Login/login";
import CurrentBox from "./components/CurrentBox/currentBox";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useStores } from "./hooks";
import { useObserver } from "mobx-react-lite";


function App() {
  const { uiStore } = useStores();
  return useObserver(() => (
    <>
      <Header />
      <div className={styles.container}>
        <Switch>
              <Route exact path={ROUTES.home}>
                {uiStore.currentBox !== undefined &&
                uiStore.checker !== undefined ? (
                  <Redirect to={ROUTES.box} />
                ) : (
                  <Login />
                )}
              </Route>
              <Route exact path={ROUTES.room}>
                <Room />
              </Route>
              <Route exact path={ROUTES.box}>
                <CurrentBox />
              </Route>

              <Route exact path={ROUTES.photoBook}>
                <Photobook />
              </Route>
              <Route path={ROUTES.pictureDetail.path}>
                <PicturesDetail />
              </Route>
        </Switch>
      </div>
    </>
  ));
}

export default App;
