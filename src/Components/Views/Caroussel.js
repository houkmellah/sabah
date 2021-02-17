import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Caroussel() {
    return (
            <Carousel className='mt-4 mb-4'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://inspiredwebdev.com/static/682414dbf5da799db5e4d788e33ce6aa/cb30f/javascript-carousel-tutorial.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://inspiredwebdev.com/static/682414dbf5da799db5e4d788e33ce6aa/cb30f/javascript-carousel-tutorial.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://inspiredwebdev.com/static/682414dbf5da799db5e4d788e33ce6aa/cb30f/javascript-carousel-tutorial.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        
    )
}

export default Caroussel
