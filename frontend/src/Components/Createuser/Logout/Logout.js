import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';
import './Logout.css';

export default class Logout extends Component {

  Handler = (e) => {
    e.preventDefault();
    localStorage.removeItem("id_token")
    window.location.reload()

  }

  render(){





    return(

          <Icon className='Log_out' onClick={this.Handler}  name='log out' color='white' size='large'>  </Icon>


    )


  }




}
