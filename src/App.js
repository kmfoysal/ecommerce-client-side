import { useSelector } from "react-redux";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import CheckOut from "./pages/CheckOut/CheckOut";
import Dashborad from "./pages/Dashboard/Dashborad";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Shop from "./pages/Shop/Shop";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Success from "./pages/Success/Success";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/shop'>
          <Shop></Shop>
        </Route>
        <Route path='/products/:category'>
          <Shop></Shop>
        </Route>
        <Route path='/product/:id'>
          <SingleProduct></SingleProduct>
        </Route>
        <Route path='/cart'>
          <CheckOut></CheckOut>
        </Route>
        <Route path='/success'>
          <Success></Success>
        </Route>
        <Route path='/dashboard'>
          {user?.isAdmin? <Dashborad></Dashborad> : <Redirect to='/login' />}
        </Route>
        <Route path='/login'>
          {user ? <Redirect to='/' /> : <Login></Login>}
        </Route>
        <Route path='/registration'>
          {user ? <Redirect to='/' /> : <Registration></Registration>}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
