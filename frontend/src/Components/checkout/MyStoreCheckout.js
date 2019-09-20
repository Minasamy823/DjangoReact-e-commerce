import React from "react";
import { Elements } from "react-stripe-elements";
import { StripeProvider } from "react-stripe-elements";
import IjnjectedCheckoutForm from "./checkout";

//Wrap <Elements /> around your checkout form to group the set
// of Stripe Elements you're using together, so Stripe can pull
// data from groups of Elements when tokenizing

class MyStoreCheckout extends React.Component {
  render() {
    return (
      <StripeProvider apiKey='pk_test_lBeo3kGEZ7e86onsWiMCxemf009lxJBfcW'>
        <Elements>
          <IjnjectedCheckoutForm
           total = {this.props.total}
           />
        </Elements>
      </StripeProvider>
    );
  }
}

export default MyStoreCheckout;
