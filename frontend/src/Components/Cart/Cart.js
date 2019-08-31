import React, {Component} from 'react';
import axios from 'axios';
import {Table, Button, Header} from 'semantic-ui-react';
import './cart.css'
import Head from "../Header/Header"
import Footer from "../Footer/Footer"
import {Link} from 'react-router-dom';




export default class Cart extends Component{

  state ={
    data:[],
    items:[],
    message:'message',
          }
// this componentWillMount is excuted before the render method
  componentWillMount(){
    let url="https://herokudjangodata.herokuapp.com/cartItems"
    let token = localStorage.getItem('id_token')
    axios.get(url, {
    headers: {
        'Authorization': 'Token '+ token,
        'Accept' : 'application/json',
        'Content-Type': 'application/json'}})
    .then((res)=>{
      this.setState({data: res.data});
      res.data.map((res)=>{
        this.setState({items: res.product})
        console.log(this.state.items)
      })
    })}

  render(){
    const items = <p className='No_data'> You have no items in your shopping cart. </p>
    const data_map =
          <div className='cart'>
            <Table stackable>
                   <Table.Header>
                       <Table.Row>
                           <Table.HeaderCell> </Table.HeaderCell>
                           <Table.HeaderCell>Name</Table.HeaderCell>
                           <Table.HeaderCell>Price</Table.HeaderCell>
                           <Table.HeaderCell>Quantity</Table.HeaderCell>
                           <Table.HeaderCell>Total</Table.HeaderCell>
                           <Table.HeaderCell> </Table.HeaderCell>
                       </Table.Row>
                   </Table.Header>
               {this.state.data.map((res)=> {
                   return(
                     <Table.Body>
                     <Table.Row key={res.product.id}>
                       <Table.Cell textAlign="left"> <img className='Image' src={res.product.image}/></Table.Cell>
                       <Table.Cell textAlign="left">{res.product.name}</Table.Cell>
                       <Table.Cell textAlign="left">{res.product.price}$</Table.Cell>
                       <Table.Cell textAlign="left"> {res.quantity}</Table.Cell>
                       <Table.Cell textAlign="left">{res.product.price * res.quantity}$</Table.Cell>
                       <Table.Cell textAlign="left">
                            <Button inverted color='yellow' className='Buttonkk' onClick={()=>{
                                  let url="http://127.0.0.1:8000/cartItems"
                                  let token = localStorage.getItem('id_token')
                                  axios.delete(url, {
                                  headers: {
                                      'Authorization': 'Token '+ token,
                                      'Accept' : 'application/json',
                                      'Content-Type': 'application/json'},
                                       data: {
                                         "product_id" : res.product.id,
                                           "quantity": 1}
                                     }
                                    )
                                  .then((res)=>{
                                    this.setState({message: res.data});
                                    console.log(this.state.message);
                                  })
                                  .catch((err)=>{
                                    console.log(err);
                                  })
                                  window.location.reload()
                                  //this one for removing an item after removing an item
                                }}>
                                remove
                              </Button>
                          </Table.Cell>
                     </Table.Row>
                  </Table.Body>
                  )})}
           </Table>
        </div>

        // const refreshing = this.state.message.length>1 ? window.location.reload() : null
    return(
      <div>
          <div>
                <Head/>
            </div>
            <div>
             {!this.state.data.length ? items : data_map }

            </div>
            <div className='Foot_cart'>
          </div>
      </div>
    )
  }
}
