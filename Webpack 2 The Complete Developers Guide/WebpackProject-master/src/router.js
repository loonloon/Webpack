import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Home from "./components/Home";
import ArtistMain from "./components/artists/ArtistMain";

const componentRoutes = {
  component: Home,
  path: "/",
  indexRoute: { component: ArtistMain },
  childRoutes: [
    {
      path: "artists/new",
      getComponent(location, callback) {
        System.import("./components/artists/ArtistCreate").then(module =>
          callback(null, module.default)
        );
      }
    },
    {
      path: "artists/:id",
      getComponent(location, callback) {
        System.import("./components/artists/ArtistDetail").then(module =>
          callback(null, module.default)
        );
      }
    },
    {
      path: "artists/:id/edit",
      getComponent(location, callback) {
        System.import("./components/artists/ArtistEdit").then(module =>
          callback(null, module.default)
        );
      }
    }
  ]
};

const Routes = () => {
  return <Router history={hashHistory} routes={componentRoutes} />;
};

export default Routes;
