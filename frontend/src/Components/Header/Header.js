import React, {Component} from 'react';
import {Container, Icon, Search, Button} from 'semantic-ui-react';
import Logo from '../Images/logo.png';
import Logout from "../Createuser/Logout/Logout"
import './Header.css';
import { Route, Switch, Link} from 'react-router-dom';
import Drawer from '../Drawerside/Drawerside'



export default class Header extends Component {

  state = {width:0,
           height: 0,
           opened: false
  }

  sidebar =()=>{
    this.setState({opened: !this.state.opened})
  }
  updateWindowDimensions =()=> {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

  componentDidMount (){
    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions)
    this.setState({width: window.innerWidth, height: window.innerHeight})
  }



  render(){
    const token = localStorage.getItem("id_token")
    let style = this.state.opened ? 'container_drawer' : 'container_drawer_back'

    return(
      <div>
      {this.state.width <= 970 && this.state.opened ?
        <div className='Drawer_slider'> <Drawer/> </div> : null}

        <div className='bar'>
          {this.state.width <= 970 ?
          <Icon className='Drawer_button' name='align justify'
          size="large"  onClick={this.sidebar}/>  : null}


          <img className='Logo' src={Logo} alt='Logo'/>
          <h className='call_number'> CALL US (844) 811-1112 </h>
           <div>
            {
              token ? <Link className='plus_cart' to="basket">
                      <Icon  name='plus cart' size='large'/></Link>
                       :null
            }
            </div>
            <div className='Log_out'>

            {
              token ? <Logout/> :
              <Link   to="login" >
                  <Icon className='user' name='user' size='large'/>
              </Link>
            }
            </div>
            <Search className='Search'
                   placeholder='search'

              />
        </div>

        <div className="Menu">
        <ul>
          <li> <Link to=''> HOME </Link> </li>
          <li> <Link to='products'> SHOP </Link> </li>
          <li> <Link to="men's"> MEN'S </Link> </li>
          <li> <Link to="women's">WOMEN'S </Link> </li>
        </ul>

        </div>

        </div>
    )
  }}
