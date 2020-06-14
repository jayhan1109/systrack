import React, { Fragment, useEffect } from "react";
import NavComponent from "./components/NavComponent";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Tabs from "./components/Tabs";

const App = () => {
  const getCPU = async (target) => {
    const data = await axios.get("/cpu");
    console.log(data);
  };

  return (
    <Fragment>
      <NavComponent />
      <Tabs />
    </Fragment>
  );
};

export default App;
