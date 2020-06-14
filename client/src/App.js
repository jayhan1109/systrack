import React, { Fragment, useState } from "react";
import NavComponent from "./components/NavComponent";
import axios from "axios";
import Tabs from "./components/Tabs";
import Info from "./components/Info";
import SpinnerComponent from "./components/SpinnerComponent";
import JumboComponent from "./components/JumboComponent";

const App = () => {
  const [values, setValues] = useState([]);
  const [keys, setKeys] = useState([]);
  const [spin, setSpin] = useState(false);

  const beforeSearch = () => {
    setKeys([]);
    setValues([]);
    setSpin(true);
    console.log(values);
    console.log(keys);
  };

  const getCPU = async () => {
    beforeSearch();
    const res = await axios.get("/cpu");
    setKeys(["CPU", "Manufacturer", "Cores", "Speed", "Socket"]);
    setValues([
      res.data.brand,
      res.data.manufacturer,
      res.data.cores,
      res.data.speed,
      res.data.socket,
    ]);
    setSpin(false);
  };

  const getGraphic = async () => {
    beforeSearch();
    const arrKey = [];
    const arrValue = [];
    const res = await axios.get("/graphic");
    res.data.controllers.forEach((item, index) => {
      arrKey.push("Model " + (index + 1));
      arrKey.push("Manufacturer " + (index + 1));
      arrValue.push(item["model"]);
      arrValue.push(item["vendor"]);
    });

    setKeys(arrKey);
    setValues(arrValue);
    setSpin(false);
    console.log(res);
  };

  return (
    <Fragment>
      <NavComponent />
      <Tabs getCPU={getCPU} getGraphic={getGraphic} />
      {spin && <SpinnerComponent />}
      {keys.length === 0 && !spin && <JumboComponent />}
      {keys.length !== 0 && !spin && <Info keys={keys} values={values} />}
    </Fragment>
  );
};

export default App;
