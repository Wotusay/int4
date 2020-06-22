import React from "react";
import { useObserver } from "mobx-react-lite";
import { useParams, useHistory } from "react-router-dom";
import NightRoom from "./NightRoom/nightRoom";
import AfternoonRoom from "./AfternoonRoom/afternoonRoom";
import MorningRoom from "./MorningRoom/morningRoom";
import { ROUTES } from "../../consts";

const Room = () => {
  const  {id} = useParams();
  const history = useHistory(); 
  return useObserver(() => (
    <>
    {id === 'avond' ? <NightRoom /> : id === 'middag' ? <AfternoonRoom /> : id === 'ochtend' ? <MorningRoom /> : history.push(ROUTES.activities)}
    </>
  ));
};

export default Room;
