import React, {Component} from 'react'
import Footer from "../Footer/Footer"
import HeaDer from "../Header/Header"
import axios from 'axios';
import {Card, Icon, Image, Segment, Grid, Header, Rating} from 'semantic-ui-react'
import './product_detail.css';


export default class Product_detail extends Component{

  state={
    data:[]
  }





  componentWillMount (){
    let product_id = this.props.id;
    let url = "http://127.0.0.1:8000/shop/?search="
    axios.get(url+product_id)
    .then((res)=>{
      this.setState({data: res.data.results})
      console.log(res.data.results);
    })}



  render(){

    const product = this.state.data.map(product=>{
      return(

        <Segment style={{padding: '2em 0em', minHeight: 900}} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Image src={product.image}/>
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <Header as="h1">{product.name}</Header>
                                <Header as="h2">Price: {product.price}</Header>
                                <Header as="h4">Description: {product.description}</Header>
                                <Rating icon='star' defaultRating={5} maxRating={5}/>

                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

          </Segment>

      )
    })

  return(
      <div>
          <HeaDer/>
              <div className='product_detail'>
                {product}
              </div>
              <div className=''>
              <Footer/>
              </div>



      </div>
    )
  }

}
