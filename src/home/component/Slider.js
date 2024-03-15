import React from 'react'
import '../home.css'
import myImage1 from'./slideimg/s1.jpg'
import myImage2 from'./slideimg/s2.jpg'
import myImage3 from'./slideimg/s3.jpg'
import myImage4  from'./slideimg/s4.jpg'
import myImage5  from'./slideimg/s5.jpg'
const Slider = () => {
  return (
  
    <div id="carouselExampleCaptions" className="carousel slide max-w-[1920px] m-auto" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active md:h-21">
      <img src={myImage1} className="d-block w-100 h-[65vh] md:h-1/2 max-sm:h-[100%]" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={myImage2} className="d-block w-100 h-[65vh] md:h-1/2 max-sm:h-[100%] " alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={myImage3} className="d-block w-100  h-[80vh] md:h-1/2 max-sm:h-[100%]" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={myImage4} className="d-block w-100  h-[80vh] md:h-1/2 max-sm:h-[100%]" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    <div className="carousel-item">
          <img src={myImage5} className="d-block w-100  h-[80vh] md:h-1/2 max-sm:h-[100%]" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Slider