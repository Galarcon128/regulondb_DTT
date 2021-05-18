import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Tips from "./apps/tips/tips";
import DTT from "./apps/dtt/dtt";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path={"/"}>
          <DTT />
        </Route>
        <Route path={"/home"}>
          <DTT />
        </Route>
        <Route path={"/tips"}>
          <Tips />
        </Route>
        <Route path="*">
          <Tips error="404" />
        </Route>
      </Switch>
    </Layout>
  );
}
