import React from 'react';
import {Container, Icon, Search} from 'semantic-ui-react';
import Logo from '../Images/logo.png';
import Logout from "../Createuser/Logout/Logout"
import './Header.css';
import { Route, Switch, Link} from 'react-router-dom';



const Header =() => {
  let token = localStorage.getItem("id_token")
  return(
    <div>
      <div className='bar'>
        <img className='Logo' src={Logo} alt='Logo'/>
        <h className='call_number'> CALL US (844) 811-1112 </h>
          {
            token ? <Link className='plus_cart' to="basket">
                    <Icon className='plus_cart' name='plus cart' size='large'/></Link>
                     : null
          }

          {
            token ? <Logout/> :
            <Link className='user' to="login" >
                <Icon name='user' size='large'/>
            </Link>
          }

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
        <li> <Link to=''> HOME </Link> </li>
        <li> <Link to='products'> SHOP </Link> </li>
        <li> <Link to="men's"> MEN'S </Link> </li>
        <li> <Link to="women's">WOMEN'S </Link> </li>
        <li> <Link to='#'>SHOP BY BRAND </Link> </li>
      </ul>

      </div>
  )
}
export default Header;


// product_detail =()=>{
//   this.pros.history.push('/product')
// }



 // search = () => {
 //    const url = 'http://127.0.0.1:8000/shop/?search=';
 //    const search = this.state.search;
 //
 //    axios.get(url + search)
 //   .then((res)=> {
 //    this.setState({search_data: res.data.results});
 //    console.log(this.state.search_data);
 //  })}
 //
 //
 //  searchchangehandler = (event) => {
 //    this.setState({search: event.target.value},
 //      () => {
 //        if (this.state.search && this.state.search.length > 1) {
 //
 //                this.search()
 //
 //
 //
 //        }
 //
 //          }
 //      )}
