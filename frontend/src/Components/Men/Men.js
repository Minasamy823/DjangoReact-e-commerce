import React, {Component} from 'react';
import axios from 'axios';
import { Card, Grid} from 'semantic-ui-react'
import './Men.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Link} from 'react-router-dom';
import { Loader } from 'semantic-ui-react'
import men from "../Images/men.jpg"





export default class Men extends Component{



  state = {

    data:[],

}

  componentWillMount(){

       axios.get('https://react-and-django.appspot.com/shop/?classification=men')
        .then((res)=> {
         this.setState({data:res.data.results});
         console.log(this.state.data);

         })}


  render() {

    const product_card =  this.state.data.map((pro)=>
                            <Grid.Column>
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

    const spinner_condition =  this.state.data.length>2 ?

                          <div className='grid_container'>
                              <Grid container stackable verticalAlign='middle'>
                                  <Grid.Row>
                                      <Grid.Column textAlign='center'>
                                          {products_list}
                                      </Grid.Column>
                                  </Grid.Row>
                              </Grid>
                           </div> : <Loader active inline='centered' />


    return(
      <div>
        <Header/>
        <div>
          <img className='men_banner' src={men}/>
        </div>
        {spinner_condition}




    </div>
  )}
}
