import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages/index";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

export default function App() {
  const user = null;

  return (
    <Router>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGNIN}
        exact
      >
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGNUP}
        exact
      >
        <Signup />
      </IsUserRedirect>
      <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
        <Browse />
      </ProtectedRoute>

      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.HOME}
        exact
      >
        <Home />
      </IsUserRedirect>
    </Router>
  );
}
