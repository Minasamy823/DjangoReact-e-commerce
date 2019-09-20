import React from 'react';
import Createuser from "./Components/Createuser/Createuser";
import Products from './Components/Products/Products'
import Login from "./Components/Createuser/Login";
import Men from "./Components/Men/Men";
import Women from "./Components/Women/Women";
import { Route, Switch } from 'react-router-dom';
import Slider from "./Components/Slider/Slider";
import Home from "./Components/Home/Home";
import Cart from './Components/Cart/Cart';
import Product_detail from './Components/product_detail/product_detail';
import MyStoreCheckout from './Components/checkout/MyStoreCheckout';
import Headerd from "./Components/Header/Header"
import Footerr from "./Components/Footer/Footer"
import Drawer from "./Components/Drawerside/Drawerside"
function App() {


  const Product_details = ({match})=>(
        console.log('match', match) ||
        <Product_detail id={match.params.id}/>
  )

  return (

<div>
    <Switch>
          <Route path="/Drawer" exact component={Drawer}/>
          <Route path="/" exact component={Home}/>
          <Route path="/Headerd" exact component={Headerd}/>
          <Route path="/checkout"  component={MyStoreCheckout}/>
          <Route path="/Register"  component={Createuser} />
          <Route path="/Login"  component={Login} />
          <Route path="/basket"  component={Cart}/>
          <Route path="/men's"   component={Men}/>
          <Route path="/women's"   exact component={Women}/>
          <Route path="/Footerr"  component={Footerr}/>
          <Route path="/products"  component={Products}/>

          <Route path="/:id"  component={Product_details}/>
          <Route path="*" component={Home}/>

      //this route as It has : so it should depend on another one



    </Switch>



</div>



  );
}

export default App;
