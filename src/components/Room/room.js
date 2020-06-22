import React from "react";
import { useObserver } from "mobx-react-lite";
import { useParams, useHistory } from "react-router-dom";
import NightRoom from "./NightRoom/nightRoom";
import AfternoonRoom from "./AfternoonRoom/afternoonRoom";
import MorningRoom from "./MorningRoom/morningRoom";
import { ROUTES } from "../../consts";
import { useStores } from "../../hooks";

const Room = () => {
  const  { id } = useParams();
  const { uiStore } = useStores();
  const history = useHistory(); 
  return useObserver(() => {
    if (uiStore.currentBox === undefined) {
      history.push(ROUTES.login)
      return (
        <p> loading ...</p>
      )
    } else {
    return (
    <>
    {id === 'avond' ? <NightRoom /> : id === 'middag' ? <AfternoonRoom /> : id === 'ochtend' ? <MorningRoom /> : history.push(ROUTES.activities)}
    </>
  )}});
};

export default Room;
