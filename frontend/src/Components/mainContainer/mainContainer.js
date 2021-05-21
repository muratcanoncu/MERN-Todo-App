import React from "react";
import { Switch, Route } from "react-router-dom";
function mainContainer() {
  return (
    <main>
      <Switch>
        <Route path="/" component={() => <p>hello</p>} exact></Route>
        <Route path="/todoadd" component={() => <p>add</p>} exact></Route>
      </Switch>
    </main>
  );
}

export default mainContainer;
