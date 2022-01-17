import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import CheckOut from "./pages/CheckOut/CheckOut";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Shop from "./pages/Shop/Shop";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Success from "./pages/Success/Success";

function App() {
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
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/registration'>
          <Registration></Registration>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
