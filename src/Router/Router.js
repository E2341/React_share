import {useContext} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Main from "../pages/Main";
import SignUp from "../pages/SignUp";
import UserDetail from "../pages/UserDetail";
import userPost from "../pages/UserPost";
import Navbar from "../components/Navbar";
import SignIn from "../pages/SignIn";
import Footer from "../components/Footer";
import { FirebaseAuthContext } from '../Context/AuthContext';
import ForgotPassword from "../pages/ForgotPassword";


function AppRouter() {
  const { currentUser } = useContext(FirebaseAuthContext);

    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/register" component={SignUp}/>
          <Route exact path="/login" component={SignIn}/>
          <Route exact path="/forgot-password" component={ForgotPassword}/>
          <Route exact path="/user/:id" component={currentUser ? UserDetail : SignIn}/>
          <Route exact path="/user/:id/post" component={currentUser ? userPost : SignIn}/>
          <Route path="/" component={Main}/>
        </Switch>
         <Footer />
      </Router>
    );
  }
  
  export default AppRouter;