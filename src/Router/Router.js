import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import SignUp from "../pages/SignUp"
import Navbar from "../components/Navbar"
import SignIn from "../pages/SignIn"

function AppRouter() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/register" component={SignUp}/>
          <Route path="/login" component={SignIn}/>
        </Switch>
      </Router>
    );
  }
  
  export default AppRouter;