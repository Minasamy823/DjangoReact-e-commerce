import React from 'react';
import Createuser from "./Components/Createuser/Createuser";
import Products from './Components/Products/Products'
import Login from "./Components/Createuser/Login";
import { Route, Switch } from 'react-router-dom';
import Slider from "./Components/Slider/Slider";
import Product_detail from './Components/product_detail/product_detail';
import Cart from './Components/Cart/Cart';
import Men from "./Components/Men/Men";
import Women from './Components/Women/Women'
import Home from "./Components/Home/Home"



function App() {


  const Product_details = ({match})=>(
        console.log('match', match) ||
        <Product_detail id={match.params.id}/>
  )


  return (




<div>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/Register/"  component={Createuser} />
      <Route path="/Login/"  component={Login} />
      <Route path="/cart/"  component={Cart}/>
      <Route path="/men's/"   component={Men}/>
      <Route path="/women's/"   component={Women}/>
      <Route path="/products/"  component={Products}/>
      <Route path="/:id"  component={Product_details}/>

      //this route as It has : so it should depend on another one



    </Switch>



</div>



  );
}

export default App;
