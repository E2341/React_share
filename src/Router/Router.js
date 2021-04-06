import {useContext} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Main from "../pages/Main";
import SignUp from "../pages/SignUp";
import UserDetail from "../pages/UserDetail"
import Navbar from "../components/Navbar";
import SignIn from "../pages/SignIn";
import { FirebaseAuthContext } from '../Context/AuthContext';


function AppRouter() {
  const { currentUser } = useContext(FirebaseAuthContext);

    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/register" component={SignUp}/>
          <Route exact path="/login" component={SignIn}/>
          <Route exact path="/user/:id" component={currentUser ? UserDetail : SignIn}/>
          <Route path="/" component={Main}/>
        </Switch>
      </Router>
    );
  }
  
  export default AppRouter;