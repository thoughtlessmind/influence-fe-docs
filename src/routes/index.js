import React from "react";
import { Switch, Route } from "react-router-dom";

import { Typography } from "../components";

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// We are going to use this route config in 2
// spots: once for the sidebar and once in the main
// content section. All routes are in the same
// order they would appear in a <Switch>.

const Home = () => <h1>Homffe</h1>;

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: Home
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path={"/typography"} component={Typography} />
        <Route exact path={"/"} component={Home} />
      </Switch>
    </div>
  );
}
