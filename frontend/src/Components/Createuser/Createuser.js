import React, {Component} from 'react';
import Customerservices from "./Customerservices";
import axios from 'axios';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'



const customerservices = new Customerservices();

export default class Createuser extends Component{

  state={
    name:"",
    Email:"",
    passw:"",
    passwmatch:"",
    nameerror:"",
    emailerror:"",
    passwerror:"",
    passwmatcherror:""
  }


  userchange =(event)=>{
    this.setState({name: event.target.value})
  }
  emailhandler =(event)=>{
    this.setState({Email:event.target.value})
  }
  passwhandler =(event)=>{
    this.setState({passw:event.target.value})
  }
  passmatchwhandler =(event)=>{
    this.setState({passwmatch:event.target.value})
  }

  validation=()=>{
      let nameerror = "";
      let emailerror = "";
      let passwerror = "";
      let passwmatcherror = "";

      if (!this.state.name) {
        nameerror= "This field is required"
        }
      if (!this.state.Email || !this.state.Email.includes('@') || !this.state.Email.includes('.')||!this.state.Email.includes('com')) {
        emailerror="Invalid Email"
      }
      if (!this.state.passw ||this.state.passw.length < 8) {
        passwerror="Password should be at least 8 characs"
      }
      if (!this.state.passwmatch||this.state.passwmatch !== this.state.passw) {
        passwmatcherror="The pass didn't match"

      }
      if (nameerror||emailerror||passwerror||passwmatcherror) {
            this.setState({nameerror,emailerror,passwerror,passwmatcherror});
            return false;
            }
      return true

    }



  sendingdata =()=>{
    customerservices.createcustomer({
      'name':this.refs.name.value,
      'email':this.refs.email.value,
      'password':this.refs.password.value
    }).then(res => {
        const token = res.data.token // you should firstly fetch the token from the data to be known
        localStorage.setItem('id_token', token) // Store token
    }).then((result)=> {
      console.log(result);
      alert("Created");
    }).catch((error)=>{
      console.log(error);
    })

}
  submithandle=(e)=>{
    e.preventDefault();
    let validate = this.validation();
    if (validate) {
      this.setState({nameerror:""})
      this.setState({emailerror:""})
      this.setState({passwerror:""})
      this.setState({passwmatcherror:""})
      this.sendingdata();
    }


  }





  render(){
    return(

       <form onSubmit={this.submithandle}>
       <div className='Createuser'>
         <h style={{MarginRight:40 }}> Register </h>
         <br/>
         <br/>
            <p>Username</p>
               <input
                   ref='name'
                   type="text"
                   placeholder="User"
                   value={this.state.name}
                   onChange={this.userchange}/>
            <div style={{color: "red"}}> {this.state.nameerror}</div>
            <br/>
            <p> Email </p>

               <input
                   ref='email'
                   type="text"
                   placeholder="Email"
                   value={this.state.Email}
                   onChange={this.emailhandler}/>
            <div style={{color: "red"}}> {this.state.emailerror}</div>
            <br/>
             <p> Password </p>
                <input
                    ref='password'
                    type="Password"
                    placeholder="Password"
                    value={this.state.Passw}
                    onChange={this.passwhandler}/>
            <div style={{color: "red"}}> {this.state.passwerror}</div>

            <br/>
            <p> confirm Password </p>
               <input
                   type="Password"
                   placeholder="confirm Password"
                   value={this.state.passwmatch}
                   onChange={this.passmatchwhandler}/>
            <div style={{color: "red"}}> {this.state.passwmatcherror}</div>

             <button> Register </button>









        </div>
      </form>
    )
  }
}
