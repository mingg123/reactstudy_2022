import React, { useState } from "react";
import HomeDialog from "../dialog/HomeDialog";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = props => {
  return (
    <div>
      <div>Here is Home </div>
      <HomeDialog />
      <div>End</div>
    </div>
  );
};

export default Home;
