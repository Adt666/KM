import React, {useContext} from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect, } from "react-router-dom";
import Content from "./Content";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import Huntingground from "./pages/Huntingground";
import Myprofile from "./Myprofile";
import Notifications from "./Notifications";
import Settings from "./settings";
import Projectcollab from "./pages/projectcollab";
import Projectadopt from "./pages/projectadopt";
import Projectpage from "./pages/Projectpage";
import errorpage from "./404";
import create from "./pages/createpage";
// import Dashboard from './Dashboard/dashboard'
// import Register from './Actions/registration';
import {useAuth} from "../contexts/AuthContext";

function Dash() {

  const { currentUser } = useAuth();


  return (
    <>
    {
      currentUser ? (
        <div className="App">
          <div className="wrapper">
            <Router>
              <Leftbar />
              <Switch>
                <Route exact path="/" component={Content} />
                <Route exact path="/createpages" component={create} />
                <Route exact path="/Content" component={Content} />
                <Route exact path="/Myprofile" component={Myprofile} />
                <Route exact path="/Projectpage" component={Projectpage} />
                <Route exact path="/Huntingground/projectcollab" component={Projectcollab}/>
                <Route exact path="/Huntingground/projectadopt" component={Projectadopt}/>
                <Route exact path="/Huntingground" component={Huntingground} />
                <Route exact path="/Notifications" component={Notifications} />
                <Route exact path="/Settings" component={Settings} />
                <Route component={errorpage} />
              </Switch>
              <Rightbar />
            </Router>
          </div>
        </div>
      ): (
        <Redirect to="/login"/>
      )
    }
    </>
  );
}

// export default withRouter(Dash);
export default Dash;
