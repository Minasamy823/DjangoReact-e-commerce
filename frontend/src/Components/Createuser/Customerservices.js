
import axios from 'axios';

export default class customerservices{

  constructor(){}

  createcustomer=(user)=>{
    const url = 'https://herokudjangodata.herokuapp.com/userprofileViewset';
    return axios.post(url, user);
}
  login=(user)=>{
    const url = 'https://herokudjangodata.herokuapp.com/Loginviewset/';
    return axios.post(url, user);
  }



}
