import React from 'react';
import h from '../Images/30.jpg';
import k from '../Images/50.jpg';
import s from '../Images/60.jpg';
import './slider.css'

const Slider = () =>{
  return(
    <div className='slider'>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={k} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={h} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={s} alt="Third slide"/>
    </div>
  </div>
</div>
</div>
  )
};
export default Slider;
