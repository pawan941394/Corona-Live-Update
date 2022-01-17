import Statewise from './MyComponent/Statewise';
import NavBar from './MyComponent/NavBar.js';
import Home from './MyComponent/Home';
import Contact from './MyComponent/Contact';
import Error from './MyComponent/Error';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect
} from "react-router-dom";
import User from './MyComponent/User';
import Search from './MyComponent/Search';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" >
            <Home />
            <Statewise />

          </Route>
          <Route exact path="/Home"  >
            <Home name="Home" />
            <Statewise />
          </Route>
          <Route exact path="/user/:fname/:lname">
          <Home/>
          <User />
        </Route>
        <Route exact path="/Contact">
          <Contact name="Contact" />
        </Route>
        <Route exact path="/Search">
          <Search/>
        </Route>

        {/* this is for error page  */}
        {/* <Route >
          <Error />
        </Route> */}
        {/* this is for redirect to home page  */}
        <Redirect to="/" />

        
      </Switch>
    </Router>
    </>
  );
}
export default App;
