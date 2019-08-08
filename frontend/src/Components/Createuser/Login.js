import React, {Component} from 'react';
import Customerservices from "./Customerservices";
import axios from 'axios';
import Createuser from './Createuser.css'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


const customerservices = new Customerservices();

export default class Login extends Component{

  state={

    Email:"",
    passw:"",
    emailerror:"",
    passwerror:"",

  }



  emailhandler =(event)=>{
    this.setState({Email:event.target.value})
  }
  passwhandler =(event)=>{
    this.setState({passw:event.target.value})
  }


  validation=()=>{

      let emailerror = "";
      let passwerror = "";



      if (!this.state.Email || !this.state.Email.includes('@') || !this.state.Email.includes('.')||!this.state.Email.includes('com')) {
        emailerror="Invalid Email"
      }
      if (!this.state.passw ||this.state.passw.length < 8) {
        passwerror="Password should be at least 8 characs"
      }

      if (emailerror || passwerror) {
            this.setState({emailerror,passwerror});
            return false;
            }
      return true

    }



  sendingdata =()=>{
    customerservices.login({
      'username':this.refs.email.value,
      'password':this.refs.password.value
    }).then(res => {
        const token = res.data.token // you should firstly fetch the token from the data to be known
        localStorage.setItem('id_token', token) // Store token
    }).then((result)=> {
      console.log(result);
      alert("Loggedin");
    }).catch((error)=>{
      console.log(error);
    })

}
  submithandle=(e)=>{
    e.preventDefault();
    let validate = this.validation();
    if (validate) {

      this.setState({emailerror:""})
      this.setState({passwerror:""})
      this.sendingdata();
    }


  }





  render(){
    return(

       // <form onSubmit={this.submithandle}>
       // <div className='Createuser'>
       //   <h style={{MarginRight:40 }}> login </h>
       //   <br/>
       //   <br/>
       //      <p> Email </p>
       //
       //         <input
       //             ref='email'
       //             type="text"
       //             placeholder="Email"
       //             value={this.state.Email}
       //             onChange={this.emailhandler}/>
       //      <div style={{color: "red"}}> {this.state.emailerror}</div>
       //      <br/>
       //       <p> Password </p>
       //          <input
       //              ref='password'
       //              type="Password"
       //              placeholder="Password"
       //              value={this.state.Passw}
       //              onChange={this.passwhandler}/>
       //      <div style={{color: "red"}}> {this.state.passwerror}</div>
       //
       //       <button> Login </button>
       //    </div>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'  >
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='black' textAlign='center'>
                   Login
                </Header>
                <Form size='large' onSubmit={this.submithandle}>
                  <Segment stacked>
                    <Form.Input
                        ref='email'
                        icon='user'
                        iconPosition='left'
                        placeholder='E-mail address'
                        type='email'
                        value={this.state.Email}
                        onChange={this.emailhandler}


                        />
                    <Form.Input
                      ref='password'
                      icon='lock'
                      iconPosition='left'
                      placeholder='Password'
                      type='password'
                      value={this.state.Passw}
                      onChange={this.passwhandler}

                    />

                    <Button color='teal' fluid size='large'>
                      Login
                    </Button>
                  </Segment>
                </Form>
                <Message>
                  New to us? <a href='#'>Sign Up</a>
                </Message>
              </Grid.Column>
            </Grid>
      // </form>
    )
  }
}
