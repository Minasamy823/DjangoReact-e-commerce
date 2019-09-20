import React, {Component} from 'react';
import axios from 'axios';
import { Card, Grid} from 'semantic-ui-react'
import './Products.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Link} from 'react-router-dom';
import men from "../Images/men.jpg";
import Drawer from '../Drawerside/Drawerside'

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
    filter_data:[],
    height: 0,
    width: 0,
    }


  updateWindowDimensions =()=> {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

  componentDidMount (){
    // e.preventDefault();
    let color = this.state.color;
    let supplier = this.state.supplier;
    let size = this.state.size;
    let condition = this.state.condition;
    let classification = this.state.classification;
    let price = this.state.price;
    let available = this.state.available;

    axios.get('https://herokudjangodata.herokuapp.com/shop/?price=' + price + '&classification=' +
    classification + '&size=' + size + '&supplier=' + supplier + '&condition=' + condition +
    '&available='+ available)
     .then((res)=> {
      console.log(res.data);
      this.setState({filter_data:res.data.results});
    })
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions);

    }

    supplier_handleChange=(event)=>{
      this.setState({supplier: event.target.value})
    }

    classification_handleChange=(event)=>{
      this.setState({classification: event.target.value})
    }
    condition_handleChange=(event)=>{
      this.setState({condition: event.target.value})
    }


    submiting=(event)=>{
      this.componentDidMount()
      event.preventDefault();
    }



  render() {

    const product_card =  this.state.width > 970 ? this.state.filter_data.map((pro)=>
                            <Grid.Column key={pro.id}>
                              <Link to={ pro.name}>
                                <Card
                                style={{width : "85%"}}
                                key={pro.id}
                                image={pro.image}
                                header={pro.name}
                                description={"$" + pro.price }
                                />
                                </Link>
                            </Grid.Column>
                          ) :
                          this.state.filter_data.map((pro)=>
                              <Grid.Column key={pro.id}
                              style={{width: this.state.width >= 767 ? "150px" : "120px", left : "10%"}}>
                                <Link to={ pro.name}>
                                  <Card
                                  style={{width : "150px"}}
                                  key={pro.id}
                                  header={"$" + pro.price}
                                  image={pro.image}
                                  />
                                  </Link>
                              </Grid.Column>
                            )
    const products_list = <Grid columns={4}>
                              {product_card}
                          </Grid>


    return(
      <div>
      {console.log(this.state.width)}

        <div style={{marginBottom: '50px'}}>
           <Header/>
        </div>


        <div >
          <Link to="/men's">  <img className='men_home' src={men} size='large' /></Link>
        </div>


        <form className='filter' onSubmit={this.submiting}>
              <select  onChange={this.supplier_handleChange}>
                 <option value="">category</option>
                 <option value="1">omega</option>
                 <option value="2">rolex</option>
              </select>
              <select onChange={this.classification_handleChange}>
                 <option  value="">classification</option>
                 <option value="men">men</option>
                 <option value="women">women</option>
              </select>
              <select onChange={this.condition_handleChange}>
                 <option value="">condition</option>
                 <option value="new">new</option>
                 <option value="used">used</option>
              </select>
              <input className='button_products' type="submit" value="Submit" />
          </form>

      <div className='grid_container'>
          <Grid >
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
