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
import ActivityDetail from "./components/ActivityDetail/activitydetail";
import UploadPicture from "./components/Uploadpicture/uploadpicture";
import PicturePreview from "./components/PicturePreview/picturepreview";
import UploadComplete from "./components/Uploadcomplete/uploadcomplete";
import PizzaConfigurator from "./components/Configurator/configurator";
import Quiz from "./components/Quiz/quiz";
import Finland from "./components/Finland/finland";

function App() {
  const { uiStore } = useStores();
  return useObserver(() => (
    <>
      <div className={styles.container}>
        <Header />
        <Switch>
          <Route exact path={ROUTES.finland}>
            <Finland />
          </Route>
          <Route exact path={ROUTES.quiz}>
            <Quiz />
          </Route>
          <Route exact path={ROUTES.pizzaconfigurator}>
            <PizzaConfigurator />
          </Route>
          <Route exact path={ROUTES.uploadComplete}>
            <UploadComplete />
          </Route>
          <Route exact path={ROUTES.picturePreview.path}>
            <PicturePreview />
          </Route>
          <Route exact path={ROUTES.activityDetail.path}>
            <ActivityDetail />
          </Route>
          <Route exact path={ROUTES.activities}>
            <Activities />
          </Route>
          <Route exact path={ROUTES.uploadpicture}>
            <UploadPicture />
          </Route>
          <Route exact path={ROUTES.kamer.path}>
            <Room />
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
          <Route exact path={ROUTES.currentbox}>
            <CurrentBox />
          </Route>

          <Route exact path={ROUTES.photobook}>
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
