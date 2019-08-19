import React, {Component} from 'react';
import axios from 'axios';
import { Card, Grid} from 'semantic-ui-react'
import './Products.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Link} from 'react-router-dom';






export default class products extends Component{



  state = {
    data: [],
    search: '',
    search_data:[]

  }


  componentWillMount(){

       axios.get('http://127.0.0.1:8000/shop/')
        .then((res)=> {
         this.setState({data:res.data.results});
         console.log(this.state.data);


         })

        }



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




    return(
      <div>
      <Header/>



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
