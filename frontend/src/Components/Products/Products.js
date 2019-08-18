import React, {Component} from 'react';
import axios from 'axios';
import { Card, Grid} from 'semantic-ui-react'
import './Products.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Link} from 'react-router-dom';
import men from "../Images/men.jpg";


export default class products extends Component{



  state = {
    data: [],
    search: '',
    search_data:[],
    supplier:"",
    classification:"",
    available:"",
    price:"",
    supplier: "",
    condition:"",
    size:"",
    filter_data:[]
  }

  componentWillMount (){
    let color = this.state.color;
    let supplier = this.state.supplier;
    let size = this.state.size;
    let condition = this.state.condition;
    let classification = this.state.classification;
    let price = this.state.price;
    let available = this.state.available;

    axios.get('http://127.0.0.1:8000/shop/?price=' + price + '&classification=' +
    classification + '&size=' + size + '&supplier=' + supplier + '&condition=' + condition +
    '&available='+ available)
     .then((res)=> {
      console.log(res.data);
      this.setState({filter_data:res.data.results});
    })
    }

  render() {

    const product_card =  this.state.filter_data.map((pro)=>
                            <Grid.Column key={pro.id}>
                              <Link to={ pro.name}>
                                <Card
                                key={pro.id}
                                image={pro.image}
                                header={pro.name}
                                description={pro.price}
                                />
                                </Link>
                            </Grid.Column>
                          )
    const products_list = <Grid columns={3}>
                              {product_card}
                          </Grid>

    return(
      <div>

        <div>
           <Header/>
        </div>
      
        <div className='men'>
          <Link to="/men's">  <img src={men} size='large' /></Link>

        </div>



      <div className='grid_container'>
          <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                  <Grid.Column textAlign='center'>
                      {products_list}
                  </Grid.Column>
              </Grid.Row>
          </Grid>
       </div>
    </div>

    )}
}
