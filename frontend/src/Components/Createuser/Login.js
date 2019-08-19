import React, {Component} from 'react';
import Customerservices from "./Customerservices";
import axios from 'axios';
import Createuser from './Createuser.css'
import { Button, Form, Grid, Image, Message, Segment } from 'semantic-ui-react'
import { Dimmer, Loader } from 'semantic-ui-react';
import Header from '../Header/Header';
import './Login.css';
import Footer from '../Footer/Footer';


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
      'username' : this.state.Email,
      'password' : this.state.passw
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
      this.setState({passwerror:""})}
    if (this.state.Email.length>1 && this.state.passw.length>1){
        this.sendingdata()}







}




  render(){
    return(

       <form onSubmit={this.submithandle}>
          <Header />

            <div className='Container'>
            <h className='h_login'> Login </h>
            <h className='h_slash'> / </h>
            <h className='h_register'>
                  <a className='a'href='register'>Register</a>
            </h>
            <br/>
            <br/>

               <p> Email </p>

                  <input
                      className="Input"
                      type="text"
                      value={this.state.Email}
                      onChange={this.emailhandler}/>
               <div style={{color: "red"}}> {this.state.emailerror}</div>
               <br/>


                <p> Password </p>
                   <input
                       className="Input"
                       type="Password"
                       value={this.state.Passw}
                       onChange={this.passwhandler}/>
               <div style={{color: "red"}}> {this.state.passwerror}</div>

               <div className='button'>

                     <button class="ui inverted orange button">
                           Register
                     </button>

               </div>

             </div>
             <div className='Footer2'>
              <Footer/>
              </div>
            </form>
    )
  }
}
