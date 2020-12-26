import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Pic1 from '../../assets/img/carousal/pic1.jpeg'
import Pic2 from '../../assets/img/carousal/pic2.jpeg'
import Pic3 from '../../assets/img/carousal/pic3.jpeg'
import ScrollDown from '../scroll-down/scroll-down.component'
 
import './my-carousel.style.css'
const MyCarousel = () => {
    return (
    <div id="home">    
 <Carousel  controls={false} indicators interval={2500} pause={false}>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img" src={Pic1} alt="First slide" />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img" src={Pic2} alt="Second slide"/>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img" src = {Pic3} alt="Third slide"/>
  </Carousel.Item>
</Carousel>
<ScrollDown />
</div>
        
    
    )
       
}

export default MyCarousel