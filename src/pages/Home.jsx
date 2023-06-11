import React from "react";
import IndividualIntervalsExample from "../Components/Slide";

import NavScrollExample from '../components/navbar';
export const Home = () => {
  return (
    <div style={{maxWidth:"100%"}}>
      <NavScrollExample ></NavScrollExample>
      <IndividualIntervalsExample></IndividualIntervalsExample>
    </div>
  );
};
