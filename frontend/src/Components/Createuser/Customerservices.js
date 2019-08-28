
import axios from 'axios';

export default class customerservices{

  constructor(){}

  createcustomer=(user)=>{
    const url = 'http://127.0.0.1:8000/userprofileViewset/';
    return axios.post(url, user);
}
  login=(user)=>{
    const url = 'http://127.0.0.1:8000/Loginviewset/';
    return axios.post(url, user);
  }



}
