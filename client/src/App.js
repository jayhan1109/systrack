import React, { Fragment, useEffect } from "react";
import NavComponent from "./components/NavComponent";

const App = () => {
  getData();

  return (
    <Fragment>
      <NavComponent />
      <p></p>
    </Fragment>
  );
};

export default App;
