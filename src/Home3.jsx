import React from 'react'
import Navbar3 from './Navbar3'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import Footer3 from './Footer3';
function Home3() {
  return (
    <>
    <Navbar3/>

    <div className="banner1-section-1">
      <div className="container">
    <Swiper
         slidesPerView={1}
         spaceBetween={10}
         pagination={{
           clickable: true,
         }}
         breakpoints={{
           640: {
             slidesPerView: 1,
             spaceBetween: 20,
           },
           768: {
             slidesPerView: 1,
             spaceBetween: 40,
           },
           1024: {
             slidesPerView: 1,
             spaceBetween: 50,
           },
         }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>

    <div className="ban1-sec1">
      <img className='img-fluid w-100' src="./image/Header.png" alt="img" />
    </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="ban1-sec1">
      <img className='img-fluid w-100' src="./image/Header.png" alt="img" />
    </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="ban1-sec1">
      <img className='img-fluid w-100' src="./image/Header.png" alt="img" />
    </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="ban1-sec1">
      <img className='img-fluid w-100' src="./image/Header.png" alt="img" />
    </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="ban1-sec1">
      <img className='img-fluid w-100' src="./image/Header.png" alt="img" />
    </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="ban1-sec1">
      <img className='img-fluid w-100' src="./image/Header.png" alt="img" />
    </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="ban1-sec1">
      <img className='img-fluid w-100' src="./image/Header.png" alt="img" />
    </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="ban1-sec1">
      <img className='img-fluid w-100' src="./image/Header.png" alt="img" />
    </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="ban1-sec1">
      <img className='img-fluid w-100' src="./image/Header.png" alt="img" />
    </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>

    <div className="Section-1 m-0">
    <div className="container">
        <div className="ty p-0">
        <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
                <div className="Sec-1 tyrxss p-3 ">
               <img src="./image/Icon (9).png" alt="img" />
                <div className="sec-1inn">
                    <h4>Free Shipping</h4>
                    <p>Free shipping on all your order</p>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <div className="Sec-1 p-3 ">
                <img src="./image/Icon (10).png" alt="img" />
                <div className="sec-1inn">
                    <h4>Customer Support 24/7</h4>
                    <p>Instant access to Support</p>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <div className="Sec-1  p-3">
                <img src="./image/Icon (11).png" alt="img" />
                <div className="sec-1inn">
                    <h4>100% Secure Payment</h4>
                    <p>We ensure your money is save</p>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <div className="Sec-1 p-3 ">
                <img src="./image/Icon (12).png" alt="img" />
                <div className="sec-1inn">
                    <h4>Money-Back Guarantee</h4>
                    <p>30 Days Money-Back Guarantee</p>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>


<div className="Introduction">
    <div className="container">
    <div className="yue text-center">
           <h2>Introducing Our Products</h2>
        </div>
        <nav>
  <div class="nav nav-underline" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">All</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Vegetable</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Fruit</button>
    <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" >Meat&Fish</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
  <div className="Popular-main d-flex align-items-center justify-content-center">
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
                <span>Sale 50%</span>
                <img src="./image/Image (30).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1  m-0 p-0">
            <div className="Product-1">
                
                <img src="./image/Image (31).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
            
                <img src="./image/Image (32).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
               
                <img src="./image/Image (33).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
            
                <img src="./image/Image (34).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
        </div>
        <div className="Popular-main d-flex align-items-center justify-content-center">
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
              
                <img src="./image/Image (35).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1  m-0 p-0">
            <div className="Product-1">
                
                <img src="./image/Image (36).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
               
                <img src="./image/Image (37).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
            <span>Sale 50%</span>
                <img src="./image/Image (38).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99<h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
                
                <img src="./image/Image (39).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
        </div>
  </div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
  <div className="Popular-main d-flex align-items-center justify-content-center">
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
                <span>Sale 50%</span>
                <img src="./image/Image (30).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1  m-0 p-0">
            <div className="Product-1">
                
                <img src="./image/Image (31).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
            
                <img src="./image/Image (32).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
               
                <img src="./image/Image (33).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
            
                <img src="./image/Image (34).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
        </div>
        <div className="Popular-main d-flex align-items-center justify-content-center">
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
              
                <img src="./image/Image (35).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1  m-0 p-0">
            <div className="Product-1">
                
                <img src="./image/Image (36).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
               
                <img src="./image/Image (37).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
            <span>Sale 50%</span>
                <img src="./image/Image (38).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99<h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
                
                <img src="./image/Image (39).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
        </div>
  </div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
  <div className="Popular-main d-flex align-items-center justify-content-center">
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
                <span>Sale 50%</span>
                <img src="./image/Image (30).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1  m-0 p-0">
            <div className="Product-1">
                
                <img src="./image/Image (31).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
            
                <img src="./image/Image (32).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
               
                <img src="./image/Image (33).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
            
                <img src="./image/Image (34).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
        </div>
        <div className="Popular-main d-flex align-items-center justify-content-center">
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
              
                <img src="./image/Image (35).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1  m-0 p-0">
            <div className="Product-1">
                
                <img src="./image/Image (36).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
               
                <img src="./image/Image (37).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
            <span>Sale 50%</span>
                <img src="./image/Image (38).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99<h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
                
                <img src="./image/Image (39).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
        </div>
  </div>
  <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">
  <div className="Popular-main d-flex align-items-center justify-content-center">
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
                <span>Sale 50%</span>
                <img src="./image/Image (30).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1  m-0 p-0">
            <div className="Product-1">
                
                <img src="./image/Image (31).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
            
                <img src="./image/Image (32).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
               
                <img src="./image/Image (33).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
            
                <img src="./image/Image (34).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
        </div>
        <div className="Popular-main d-flex align-items-center justify-content-center">
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
              
                <img src="./image/Image (35).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1  m-0 p-0">
            <div className="Product-1">
                
                <img src="./image/Image (36).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
               
                <img src="./image/Image (37).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
            <span>Sale 50%</span>
                <img src="./image/Image (38).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99<h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 m-0 p-0">
            <div className="Product-1">
                
                <img src="./image/Image (39).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
        </div>
  </div>
</div>
    </div>
</div>

<div className="Fresh-section">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
                <div className="Fresh-sec">
                    <img src="./image/Bannar (6).png" alt="img" />
                </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
            <div className="Fresh-sec">
                    <img src="./image/Bannar (7).png" alt="img" />
                </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
            <div className="Fresh-sec">
                    <img src="./image/Bannar (8).png" alt="img" />
                </div>
            </div>
        </div>
    </div>
</div>

<div className="ourspecial-product">
   <img src="./image/Best Deal.png" alt="img" />
</div>

<div className="Popular-Product-Section-1">
    <div className="container">
        <div className="yue text-center">
        
           <h2>Featured Products</h2>
        </div>
        <div className="Popular-main d-flex align-items-center justify-content-center">
          <div className="popular-1 tur tur-1">
                    <img className='img-fluid w-100'  src="./image/Bannar (4).png" alt="img" />
          </div>
          <div className="popular-1 tur">
            <div className="Product-1">
                
                <img src="./image/Image (31).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 tur">
            <div className="Product-1">
            
                <img src="./image/Image (32).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 tur">
            <div className="Product-1">
               
                <img src="./image/Image (33).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="popular-1 tur">
            <div className="Product-1">
            
                <img src="./image/Image (34).png" alt="img" />
                <div className="product1-in d-flex align-items-center justify-content-between">
                    <div className="ru">
                    <p>Green Apple</p>
                    <h5>$14.99 <h6>$20.99</h6></h5>
                    <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <img src="./image/Add To Cart.png" alt="img" />
                </div>
            </div>
          </div>
        </div>
    </div>
</div>

<div className="OurClient-section">
    <div className="container">
    <div className="yue text-center">
           <h2>What our Clients Says</h2>
           <Swiper
         slidesPerView={1}
         spaceBetween={10}
         pagination={{
           clickable: true,
         }}
         breakpoints={{
           640: {
             slidesPerView: 1,
             spaceBetween: 20,
           },
           768: {
             slidesPerView: 1,
             spaceBetween: 40,
           },
           1024: {
             slidesPerView: 3,
             spaceBetween: 50,
           },
         }}
        modules={[Pagination]}
        className="mySwiper3"
      >
        <SwiperSlide>
        <div className="ourclient-sec-1 text-center">
            <div className="oursec-1 text-center">
                <img src="./image/Vector (5).png" alt="img" />
                <p>“Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele. ”</p>
            </div>
            <div className="oursec-1in text-center">
                <img src="./image/Image (51).png" alt="img" />
                <h6>Jenny Wilson</h6>
                <p>Customer</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="ourclient-sec-1 text-center">
            <div className="oursec-1 text-center">
                <img src="./image/Vector (5).png" alt="img" />
                <p>“Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele. ”</p>
            </div>
            <div className="oursec-1in text-center">
                <img src="./image/Image (51).png" alt="img" />
                <h6>Jenny Wilson</h6>
                <p>Customer</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="ourclient-sec-1 text-center">
            <div className="oursec-1 text-center">
                <img src="./image/Vector (5).png" alt="img" />
                <p>“Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele. ”</p>
            </div>
            <div className="oursec-1in text-center">
                <img src="./image/Image (51).png" alt="img" />
                <h6>Jenny Wilson</h6>
                <p>Customer</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="ourclient-sec-1 text-center">
            <div className="oursec-1 text-center">
                <img src="./image/Vector (5).png" alt="img" />
                <p>“Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele. ”</p>
            </div>
            <div className="oursec-1in text-center">
                <img src="./image/Image (51).png" alt="img" />
                <h6>Jenny Wilson</h6>
                <p>Customer</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="ourclient-sec-1 text-center">
            <div className="oursec-1 text-center">
                <img src="./image/Vector (5).png" alt="img" />
                <p>“Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele. ”</p>
            </div>
            <div className="oursec-1in text-center">
                <img src="./image/Image (51).png" alt="img" />
                <h6>Jenny Wilson</h6>
                <p>Customer</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="ourclient-sec-1 text-center">
            <div className="oursec-1 text-center">
                <img src="./image/Vector (5).png" alt="img" />
                <p>“Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele. ”</p>
            </div>
            <div className="oursec-1in text-center">
                <img src="./image/Image (51).png" alt="img" />
                <h6>Jenny Wilson</h6>
                <p>Customer</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="ourclient-sec-1 text-center">
            <div className="oursec-1 text-center">
                <img src="./image/Vector (5).png" alt="img" />
                <p>“Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele. ”</p>
            </div>
            <div className="oursec-1in text-center">
                <img src="./image/Image (51).png" alt="img" />
                <h6>Jenny Wilson</h6>
                <p>Customer</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="ourclient-sec-1 text-center">
            <div className="oursec-1 text-center">
                <img src="./image/Vector (5).png" alt="img" />
                <p>“Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele. ”</p>
            </div>
            <div className="oursec-1in text-center">
                <img src="./image/Image (51).png" alt="img" />
                <h6>Jenny Wilson</h6>
                <p>Customer</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="ourclient-sec-1 text-center">
            <div className="oursec-1 text-center">
                <img src="./image/Vector (5).png" alt="img" />
                <p>“Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele. ”</p>
            </div>
            <div className="oursec-1in text-center">
                <img src="./image/Image (51).png" alt="img" />
                <h6>Jenny Wilson</h6>
                <p>Customer</p>
            </div>
        </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
</div>

<div className="best">
    <div className="container">
        <div className="best-1">
            <img src="./image/Video (3).png" alt="img" />
        </div>
    </div>
</div>
<div className="Latest-section">
    <div className="container">
        <div className="yrr text-center">
            <h1>Latest News</h1>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
                <div className="Latest-sec-1 position-relative">
                    <div className="ie position-absolute">
                        <p>18</p>
                        <h6>NOV</h6>
                    </div>
                    <img src="./image/Image (41).png" alt="img" />
                    <div className="kd">
                    <div className="djr d-flex align-items-center">
                        <div className="ler d-flex align-items-center">
                            <img src="./image/tag 1.png" alt="img" />
                            <p>Food</p>
                        </div>
                        <div className="ler d-flex align-items-center">
                            <img src="./image/user_3 1.png" alt="img" />
                            <p>By Admin</p>
                        </div>
                        <div className="ler d-flex align-items-center">
                            <img src="./image/ChatCentered 1.png" alt="img" />
                            <p>65 Comments</p>
                        </div>
                    </div>
                    <p>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
                    <a href="#">Readmore <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
                <div className="Latest-sec-1 position-relative">
                    <div className="ie position-absolute">
                        <p>18</p>
                        <h6>NOV</h6>
                    </div>
                    <img src="./image/Image (42).png" alt="img" />
                    <div className="kd">
                    <div className="djr d-flex align-items-center">
                        <div className="ler d-flex align-items-center">
                            <img src="./image/tag 1.png" alt="img" />
                            <p>Food</p>
                        </div>
                        <div className="ler d-flex align-items-center">
                            <img src="./image/user_3 1.png" alt="img" />
                            <p>By Admin</p>
                        </div>
                        <div className="ler d-flex align-items-center">
                            <img src="./image/ChatCentered 1.png" alt="img" />
                            <p>65 Comments</p>
                        </div>
                    </div>
                    <p>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
                    <a href="#">Readmore <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
                <div className="Latest-sec-1 position-relative">
                    <div className="ie position-absolute">
                        <p>18</p>
                        <h6>NOV</h6>
                    </div>
                    <img src="./image/Image (43).png" alt="img" />
                    <div className="kd">
                    <div className="djr d-flex align-items-center">
                        <div className="ler d-flex align-items-center">
                            <img src="./image/tag 1.png" alt="img" />
                            <p>Food</p>
                        </div>
                        <div className="ler d-flex align-items-center">
                            <img src="./image/user_3 1.png" alt="img" />
                            <p>By Admin</p>
                        </div>
                        <div className="ler d-flex align-items-center">
                            <img src="./image/ChatCentered 1.png" alt="img" />
                            <p>65 Comments</p>
                        </div>
                    </div>
                    <p>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
                    <a href="#">Readmore <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div className="sub-section">
    <div className="container">
        <div className="row align-items-center">
               <div className="col-lg-4 col-md-12 col-12">
                <div className="ssd">
                    <img src="./image/Logo.png" alt="img" />
                </div>
               </div>
            <div className="col-lg-4 col-md-12 col-12">
                <div className="sub-sec-1">
                    <h5>Subcribe our Newsletter</h5>
                    <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12 ">
                <div className="sub-sec-2 d-flex align-items-center justify-content-end">
                    <div className="sub-sec2-1">
                        <input type="text" placeholder='Your email address'/>
                        <button>Subscribe</button>
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
</div>
<Footer3/>
    </>
  )
}

export default Home3