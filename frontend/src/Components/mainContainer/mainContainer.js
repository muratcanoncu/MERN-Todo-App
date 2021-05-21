import React from "react";
import { Switch, Route } from "react-router-dom";
//! Components
import AddingForm from "../AddingForm/AddingForm";
function mainContainer() {
  return (
    <main className="d-flex justify-content-center align-items-start">
      <Switch>
        <Route path="/" component={() => <p>hello</p>} exact></Route>
        <Route path="/todoadd" exact>
          <AddingForm></AddingForm>
        </Route>
      </Switch>
    </main>
  );
}

export default mainContainer;
