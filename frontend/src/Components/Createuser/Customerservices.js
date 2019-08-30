
import axios from 'axios';

export default class customerservices{

  constructor(){}

  createcustomer=(user)=>{
    const url = 'https://react-and-django.appspot.com/userprofileViewset';
    return axios.post(url, user);
}
  login=(user)=>{
    const url = 'https://react-and-django.appspot.com/Loginviewset';
    return axios.post(url, user);
  }



}
