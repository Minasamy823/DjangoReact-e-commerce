import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import './Drawerside.css'
import {Link} from "react-router-dom";



const Drawer = () => {
return(
  <div className='container_drawer'>
  <div >
      <div className='element_drawer'>
      <Link style={{color: "white"}} to="/" ><p style={{marginTop: "30px"}}> Home </p>  <Icon name='home'/></Link>
      </div>
      <div className='element_drawer'>
      <Link style={{color: "white"}} to="/products" ><p style={{marginTop: "30px"}}> Products </p> <Icon name='shopping basket'/></Link>
      </div>
      <div className='element_drawer'>
      <Link style={{color: "white"}} to="/men's" ><p style={{marginTop: "30px"}}> Men's </p> <Icon name='man'/>  </Link>
      </div>
      <div className='element_drawer'>
      <Link style={{color: "white"}} to="/women's" ><p style={{marginTop: "30px"}}> Women's </p>  <Icon name='woman'/></Link>
      </div>

    </div>
  </div>
)}


export default Drawer;
