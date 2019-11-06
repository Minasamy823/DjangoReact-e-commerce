import React, {Component} from 'react';
import './Home.css';
import Slider from '../Slider/Slider';
import Header from "../Header/Header"
import BC from "../Images/BC.jpg";
import BC2 from "../Images/BC2.jpg";
import BC3 from "../Images/bc3.jpG";
import men from "../Images/men.jpg";
import Footer from "../Footer/Footer"
import {Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'



export default class Home extends Component{

  render(){


    return(
      <div>
            <div>
                <Header/>
            </div>
            <div style={{overflow:"hidden"}}>
                <Slider/>
            </div>
            <div className='Text'>
                <p> Shop for Men's Watches online at Amazon Russia
                  Buy men’s watches online in the watchery.in men’s watch store.
                  Choose from a variety of smartwatches, sports watches, chronograph,
                  analogue and digital watches or shop by material such as leather,
                  stainless steel and more.
                  You can check out watches by price or discount too.
                   Buy classic styles by brands like Citizen,Titan, Fossil, Sonata, Maxima,
                   Guess, Seiko, Daniel Klein, Daniel Wellington and Kenneth Cole or the best
                   sports watches by Fastrack, Tommy Hilfiger, Timex and Casio.</p>

            </div>
            <div >
              <Link to="/men's">  <img  className='men' src={men} size='large' /></Link>

            </div>


            <div className='Text'>
                <p> Shop for Men's Watches online at Amazon Russia
                  Buy men’s watches online in the watchery.in men’s watch store.
                  Choose from a variety of smartwatches, sports watches, chronograph,
                  analogue and digital watches or shop by material such as leather,
                  stainless steel and more.
                  You can check out watches by price or discount too.
                   Buy classic styles by brands like Citizen,Titan, Fossil, Sonata, Maxima,
                   Guess, Seiko, Daniel Klein, Daniel Wellington and Kenneth Cole or the best
                   sports watches by Fastrack, Tommy Hilfiger, Timex and Casio.</p>

            </div>
            <div >
                <Link to='/products'> <img className='BC' src={BC} size='medium' /> </Link>
            </div>
            <div>
                <Link to='/products'> <img className='BC2' src={BC3} size='medium' /> </Link>
            </div>
      </div>

    )
  }
}
