import React from 'react';
import {Container, Icon, Search} from 'semantic-ui-react';
import Logo from '../Images/logo.png';
import './Header.css';
import { Route, Switch, Link} from 'react-router-dom';



const Header =() => {
  return(
    <div>
      <div className='bar'>
        <img className='Logo' src={Logo} alt='Logo'/>
        <h className='call_number'> CALL US (844) 811-1112 </h>

          <Link className='plus_cart' to="register"><Icon className='plus_cart' name='plus cart' size='large'/></Link>
          <Link className='user' to="login" > <Icon name='user' size='large'/> </Link>
        <Search className='Search'
               placeholder='search'
            // loading={isLoading}
            // onResultSelect={this.handleResultSelect}
            // onSearchChange={_.debounce(this.handleSearchChange, 500, {
            //   leading: true,
            // })}
            // results={results}
            // value={value}
            // {...this.props}
          />
      </div>

      <ul className="Menu">
        <li> <Link to='#'> HOME </Link> </li>
        <li> <Link to='/products'> SHOP </Link> </li>
        <li> <Link to='#'> MEN'S </Link> </li>
        <li> <Link to='#'>WOMEN'S </Link> </li>
        <li> <Link to='#'>SHOP BY BRAND </Link> </li>



      </ul>




    </div>
  )
}
export default Header;
