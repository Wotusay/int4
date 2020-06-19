import React from "react";
import styles from "./App.module.css";
import { Switch, Route } from "react-router-dom";
import Photobook from "./components/Photobook/photobook";
import { ROUTES } from "./consts";
import PicturesDetail from "./components/PicturesDetail/PicturesDetail.js";
import Room from "./components/Room/room";
import Header from "./components/Header2/header";
import Login from "./components/Login/login";
import CurrentBox from "./components/CurrentBox/currentBox";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useStores } from "./hooks";
import { useObserver } from "mobx-react-lite";
import Boxes from "./components/Boxes/boxes";
import Home from "./components/Home/home";
import NotFound from "./components/NotFound/not-found";
import Dashboard from "./components/Dashboard/dashboard";
import Activities from "./components/Activities/activities";
import MorningRoom from "./components/Room/MorningRoom/morningRoom";
function App() {
  const { uiStore } = useStores();
  return useObserver(() => (
    <>
      <div className={styles.container}>
        <Header />
        <Switch>
        <Route exact path={ROUTES.activities}>
          <Activities/>
          </Route>
        <Route exact path={ROUTES.morningRoom}>
          <MorningRoom/>
          </Route>
          <Route exact path={ROUTES.boxes.path}>
            <Boxes />
          </Route>
          <Route exact strict path={ROUTES.login}>
            {uiStore.currentBox !== undefined &&
            uiStore.checker !== undefined ? (
              <Redirect to={ROUTES.currentbox} />
            ) : (
              <Login />
            )}
          </Route>
          <Route exact path={ROUTES.room}>
            <Room />
          </Route>
          <Route exact path={ROUTES.currentbox}>
            <CurrentBox />
          </Route>

          <Route exact path={ROUTES.picturebook}>
            <Photobook />
          </Route>
          <Route exact path={ROUTES.dashboard}>
            <Dashboard />
          </Route>
          <Route exact path={ROUTES.pictureDetail.path}>
            <PicturesDetail />
          </Route>
          <Route exact strict path={ROUTES.home}>
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  ));
}

export default App;
