import React, {Component} from 'react';
import axios from 'axios';
import {Table, Button, Header} from 'semantic-ui-react';
import './cart.css'
import Head from "../Header/Header"
import Footer from "../Footer/Footer"
import {Link} from 'react-router-dom'
import MyStoreCheckout from "../checkout/MyStoreCheckout"



export default class Cart extends Component{

  state ={
    data:[],
    items:[],
    message:'message',
    total: 0,
    popup : false,
    token: localStorage.getItem('id_token'),
    width: 0,
    height:0
          }

  resizing = () =>{
    this.setState({ width: window.innerWidth, height: window.innerHeight})

  }
// this componentWillMount is excuted before the render method
  checkout =()=>(
    this.setState({popup: !this.state.popup}),
    console.log(this.state.popup)
  )


  componentWillMount(){


    let url="https://herokudjangodata.herokuapp.com/cartItems"
    let token = localStorage.getItem('id_token')
    this.resizing()
    window.addEventListener('resize', this.resizing)
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
        let total = this.state.total;
        total = total + res.product.price * res.quantity
        this.setState({total : total})
        console.log(this.state.total)


      })
    })

  }


  render(){

    const items = <p className='No_data'> You have no items in your shopping cart. </p>
    const data_map =

          <div className='cart'>
            <Table className=''>
              {this.state.width >= 767 ?
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell> </Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Quantity</Table.HeaderCell>
                        <Table.HeaderCell>Total</Table.HeaderCell>
                        <Table.HeaderCell> </Table.HeaderCell>
                    </Table.Row>
                </Table.Header> :
              null }

               {this.state.data.map((res)=> {
                   return(
                     <Table.Body>
                     <Table.Row key={res.product.id}>
                       <Table.Cell textAlign={this.state.width <= 767 ? "center" : "left"}> <img className='Image' src={res.product.image}/></Table.Cell>
                       <Table.Cell textAlign={this.state.width <= 767 ? "center" : "left"}>{res.product.name}</Table.Cell>
                       <Table.Cell textAlign={this.state.width <= 767 ? "center" : "left"}>{res.product.price}$</Table.Cell>
                       <Table.Cell textAlign={this.state.width <= 767 ? "center" : "left"}> {res.quantity}</Table.Cell>
                       <Table.Cell textAlign={this.state.width <= 767 ? "center" : "left"}>{res.product.price * res.quantity}$</Table.Cell>

                       <Table.Cell textAlign="left" className='Buttonkk'>
                            <Button inverted color='orange'  onClick={()=>{
                                  let url="https://herokudjangodata.herokuapp.com/cartItems"
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
           <div>

          </div>
          <div className='button_paying'>
          <Button
          inverted
          color='orange'
          onClick={this.checkout}
          >
          Order
         </Button>
          </div>
        </div>
      const condition = this.state.data.length ? data_map  : items

        // const refreshing = this.state.message.length>1 ? window.location.reload() : null
    return(
      <div>
      {console.log(this.state.width)}

            <div>
                <Head/>
            </div>
            <div>
             {condition}

            </div>

           {
             this.state.popup ?
             <div className="popup">

                <MyStoreCheckout
                  total = {this.state.total}
                />
             </div> : null
           }

      </div>
    )
  }
}
