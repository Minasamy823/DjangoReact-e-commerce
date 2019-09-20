import React from "react";
import axios from 'axios'
import { injectStripe, CardElement } from "react-stripe-elements";
import { Container, Header, Button } from 'semantic-ui-react'
import './checkout.css'
import { Redirect } from 'react-router-dom'
//CheckoutForm renders the input field and a button and injects
//this.props.stripe.createToken  via props
//The token with the encrypted credit card info is sent to my backend
// So I can send it to stripe

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  state = {
    resp_message: "",
    card_errors: ""
  }

  // redirecting = () =>{
  //   return (
  //   this.state.resp_message ? <Redirect to= "/products" /> : null)
  // }

  handleCardErrors = card_dets => {
    console.log("Card Section dets", card_dets);
    this.setState({resp_message: ""})
    if (card_dets.error) {
      this.setState({ card_errors: card_dets.error.message });
    } else {
      this.setState({ card_errors: "" });
    }
  };

  async submit (ev) {

  let {token} = await this.props.stripe.createToken({name: "m"})
  let formData = new FormData();
  formData.append("source", token.id);
  formData.append("amount", this.props.total);
  let response = axios.post("http://127.0.0.1:8000/payment", formData)
  .then((res)=>{
  this.setState({resp_message: res.data})
  if (res.data) {
    return (
    alert("Thanks for your Truth")
  )}



})
}



  render() {
    return (
      <div className='checkout'>

        <div className="info">
          <p style={{color: "#fcd669" }}>  Total = {this.props.total} $ </p>
          <p>  <input className="fields"  placeholder="First name"/>  </p>
          <p>  <input className="fields"  placeholder="Last name"/> </p>
          <p>   <input className="fields"  placeholder="Email"/> </p>
          <p>   <input className="fields"  placeholder="Address"/> </p>


            <CardElement onChange={this.handleCardErrors}
            className="fields cart_paying"
             />

              <p>{this.state.card_errors}</p>


            <button  style = {{backgroundColor: "#fcd669"}}
            className="button fields"
            onClick={this.submit} >
            Confirm order</button>
            {this.state.resp_message ? <Redirect to="/products"/> :null}


          </div>
      </div>
    );
  }
}

//The injectStripe HOC provides the this.props.stripe property
//You can call this.props.stripe.createToken within a component that has been
// injected in order to submit payment data to Stripe.
export default injectStripe(CheckoutForm);
