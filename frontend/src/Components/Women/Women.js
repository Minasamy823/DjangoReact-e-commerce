import React, {Component} from 'react';
import axios from 'axios';
import { Card, Grid} from 'semantic-ui-react'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Link} from 'react-router-dom';
import { Loader } from 'semantic-ui-react';
import women from "../Images/women.jpg";
import "./women.css"




export default class Women extends Component{



  state = {

    data:[],

}
  updateWindowDimensions =()=> {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  componentWillMount(){
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions);
       axios.get('https://herokudjangodata.herokuapp.com/shop/?classification=women')
        .then((res)=> {
         this.setState({data:res.data.results});
         console.log(this.state.data);

         })}


  render() {

    const product_card = this.state.data.map((pro)=>
                            this.state.width > 970 ?
                            <Grid.Column>
                              <Link to={ pro.name}>
                                <Card
                                style={{width : "85%"}}
                                key={pro.id}
                                image={pro.image}
                                header={pro.name}
                                description={pro.price}
                                />
                                </Link>
                            </Grid.Column>
                            :
                            <Grid.Column
                            style={{width: this.state.width >= 767 ? "150px" : "120px", left : "10%"}}>
                              <Link to={ pro.name}>
                                <Card
                                style={{width : "150px"}}
                                key={pro.id}
                                image={pro.image}
                                header={pro.price}
                                />
                                </Link>
                            </Grid.Column>
                          )


    const products_list = <Grid columns={4}>
                              {product_card}
                          </Grid>

    const spinner_condition =  this.state.data.length>2 ?

                          <div className='women'>
                              <Grid className="ui grid" >
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
        <div style={{marginTop: "45px"}}>
          <img className="women_img" src={women}/>
        </div>
        {spinner_condition}




    </div>
  )}
}
