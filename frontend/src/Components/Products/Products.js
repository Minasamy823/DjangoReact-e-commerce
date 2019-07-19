import React, {Component} from 'react';
import axios from 'axios';
// this file for the first page of the site, gonna hold all the
// products
export default class Products extends Component {
  state={
    data:[]
  }


componentWillMount(){

     axios.get('http://127.0.0.1:8000/shop/')
     .then(response=>response.data)
     .then((data)=> {
      this.setState({data:data })
      console.log(this.state.data)
    })
}
  render(){

    return(
      <div>
        {this.state.data.map((data, index)=>(
          <img src={data.image}/>

        ))}
      </div>

    );
  }
}
