import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/authentication/Login";
import SignUp from "./pages/authentication/Signup";
import AdminPage from "./pages/admin/";
import CustomerPage from "./pages/customer/";
import DeliveryPage from "./pages/cashier/";

// the "/" is default route like localhost:3000
//rest are specific routes
//so basically there exists a variable called "path" which Route is always looking
//as soon as this variable changes, Route looks at the matching path and renders that component
//think of the component below as a rendered that it looking at props and a variable called "path" to see what to render

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <ProtectedRoute privelage={0} path="/admin" component={AdminPage} />
          <ProtectedRoute
            privelage={1}
            path="/cashier"
            component={DeliveryPage}
          />
          <ProtectedRoute
            privelage={2}
            path="/customer"
            component={CustomerPage}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
