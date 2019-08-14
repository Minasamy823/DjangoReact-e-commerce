import React, {Component} from 'react';
import Customerservices from "./Customerservices";
import axios from 'axios';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import Heas from '../Header/Header';
import Footer from '../Footer/Footer';


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
      'name':this.state.name,
      'email':this.state.Email,
      'password':this.state.passw
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
      this.setState({passwmatcherror:""})}
    if (this.state.name.length>1 && this.state.Email.length>1 && this.state.passw.length>1 && this.state.passwmatch.length>7){
      this.sendingdata()}
  }





  render(){
    return(

       <form onSubmit={this.submithandle}>

       <Heas/>
       <div className='container'>


         <h className='h'> Register </h>
         <br/>
         <br/>
            <p>Username</p>
               <input
                   className="Input"
                   type="text"
                   value={this.state.name}
                   onChange={this.userchange}/>
            <div style={{color: "red"}}> {this.state.nameerror}</div>
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

            <br/>
            <p> confirm Password </p>
               <input
                   className="Input"
                   type="Password"
                   value={this.state.passwmatch}
                   onChange={this.passmatchwhandler}/>
            <div style={{color: "red"}}> {this.state.passwmatcherror}</div>


            <div className='button'>

            <button class="ui inverted orange button">
                  Register
            </button>

            </div>


        </div>
        <div className='Footer_register'>
        <Footer/>
        </div>

      </form>

    )
  }
}
