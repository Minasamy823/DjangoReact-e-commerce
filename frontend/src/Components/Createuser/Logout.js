import React, {Component} from 'react';


export default class Logout extends Component {

  Handler = (e) => {
    e.preventDefault();
    localStorage.removeItem("id_token");
    this.props.history.push("/products");

  }

  render(){





    return(
      <form onSubmit={this.Handler}>
          <button> Logout</button>

      </form>
    )


  }




}
