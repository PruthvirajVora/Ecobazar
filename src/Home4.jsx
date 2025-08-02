import React from 'react'
import Navbar4 from './Navbar4'
import Footer from './Footer';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


function Home4() {
  return (
    <>
    <Navbar4/>
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
          <img className='img-fluid w-100' src="./image/Group 27.png" alt="img" />
        </div>
            </SwiperSlide>
            <SwiperSlide>
    
        <div className="ban1-sec1">
          <img className='img-fluid w-100' src="./image/Group 27.png" alt="img" />
        </div>
            </SwiperSlide>
            <SwiperSlide>
    
        <div className="ban1-sec1">
          <img className='img-fluid w-100' src="./image/Group 27.png" alt="img" />
        </div>
            </SwiperSlide>
            <SwiperSlide>
    
        <div className="ban1-sec1">
          <img className='img-fluid w-100' src="./image/Group 27.png" alt="img" />
        </div>
            </SwiperSlide>
            <SwiperSlide>
    
        <div className="ban1-sec1">
          <img className='img-fluid w-100' src="./image/Group 27.png" alt="img" />
        </div>
            </SwiperSlide>
            <SwiperSlide>
    
        <div className="ban1-sec1">
          <img className='img-fluid w-100' src="./image/Group 27.png" alt="img" />
        </div>
            </SwiperSlide>
            <SwiperSlide>
    
        <div className="ban1-sec1">
          <img className='img-fluid w-100' src="./image/Group 27.png" alt="img" />
        </div>
            </SwiperSlide>
            <SwiperSlide>
    
        <div className="ban1-sec1">
          <img className='img-fluid w-100' src="./image/Group 27.png" alt="img" />
        </div>
            </SwiperSlide>
            <SwiperSlide>
    
        <div className="ban1-sec1">
          <img className='img-fluid w-100' src="./image/Group 27.png" alt="img" />
        </div>
            </SwiperSlide>
          </Swiper>
          </div>
        </div>



<div className="Section-1">
    <div className="container">
        <div className="ty">
        <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
                <div className="Sec-1 d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-truck-fast"></i>
                <div className="sec-1inn">
                    <h4>Free Shipping</h4>
                    <p>Free shipping on all your order</p>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <div className="Sec-1 d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-headset"></i>
                <div className="sec-1inn">
                    <h4>Customer Support 24/7</h4>
                    <p>Instant access to Support</p>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <div className="Sec-1 d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-bag-shopping"></i>
                <div className="sec-1inn">
                    <h4>100% Secure Payment</h4>
                    <p>We ensure your money is save</p>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <div className="Sec-1 d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-box"></i>
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
<div className="top-cat">
<div className="yue text-center">
           <h2>Top Category</h2>
        </div>
        <div className="container">
        <Swiper  slidesPerView={1}
         spaceBetween={10}
         pagination={{
           clickable: true,
         }}
         breakpoints={{
           640: {
             slidesPerView: 4,
             spaceBetween: 20,
           },
           768: {
             slidesPerView: 1,
             spaceBetween: 40,
           },
           1024: {
             slidesPerView: 6,
             spaceBetween: 50,
           },
         }}
        modules={[Pagination]}
        className="mySwiper2"
      >
        <SwiperSlide>
        <div className="top-sec-1 tyeeee">
                        <img src="./image/Vegetable.png" alt="img" />
                        <h6>Vegetables</h6>
                        <p>165 Products</p>
                       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="top-sec-1 ">
                        <img src="./image/fruits 1.png" alt="img" />
                        <h6>Fresh Fruit</h6>
                        <p>165 Products</p>
                       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="top-sec-1 ">
                        <img src="./image/fish 1.png" alt="img" />
                        <h6>River Fish</h6>
                        <p>165 Products</p>
                       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="top-sec-1 ">
                        <img src="./image/meat 1.png" alt="img" />
                        <h6>Meat</h6>
                        <p>165 Products</p>
                       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="top-sec-1 ">
                        <img src="./image/Filled outline.png" alt="img" />
                        <h6>Water and Drinks</h6>
                        <p>165 Products</p>
                       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="top-sec-1 ">
                        <img src="./image/snacks 1.png" alt="img" />
                        <h6>Snacks</h6>
                        <p>165 Products</p>
                       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="top-sec-1 ">
                        <img src="./image/Vegetable.png" alt="img" />
                        <h6>Vegetables</h6>
                        <p>165 Products</p>
                       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="top-sec-1 ">
                        <img src="./image/Vegetable.png" alt="img" />
                        <h6>Vegetables</h6>
                        <p>165 Products</p>
                       </div>
        </SwiperSlide>
        <SwiperSlide>

        </SwiperSlide>
      </Swiper>
        </div>
</div>

<div className="trusted-nutriton">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-8 col-md-12 col-12">
                <div className="row ">
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="trusted">
                        <img src="./image/Image (60).png" alt="img" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-12">
                        <div className="trusted-1">
                        <img src="./image/Image (61).png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
               <div className="trusted-2">
                <h1>100% Trusted
                Organic Food Store</h1>
                <div className="tursted-in-1 d-flex align-items-center">
                   <img src="./image/Check.png" alt="img" />
                   <div className="tursted-in">
                    <h6>Healthy & natural food for lovers of healthy food.</h6>
                    <p>Ut quis tempus erat. Phasellus euismod bibendum magna non tristique. Pellentesque semper vestibulum elit sed condimentum. Nunc pretium fermentum interdum. </p>
                   </div>
                </div>
                <div className="tursted-in-1 d-flex align-items-center">
                   <img src="./image/Check.png" alt="img" />
                   <div className="tursted-in">
                    <h6>Healthy & natural food for lovers of healthy food.</h6>
                    <p>Ut quis tempus erat. Phasellus euismod bibendum magna non tristique. Pellentesque semper vestibulum elit sed condimentum. Nunc pretium fermentum interdum. </p>
                   </div>
                </div>
                <a href="#">Shop Now<i class="fa-solid fa-arrow-right"></i></a>
               </div>
            </div>
        </div>
    </div>
</div>


<div className="hard-work-section">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-12 col-12">
                <div className="hard-work text-center">
                    <h1>37+</h1>
                    <p>Years of Hard Work</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-12 col-12">
            <div className="hard-work text-center">
                    <h1>500k+</h1>
                    <p>Happy Customer</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-12 col-12">
            <div className="hard-work text-center">
                    <h1>28</h1>
                    <p>Qualified Team Member</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-12 col-12">
            <div className="hard-work text-center">
                    <h1>750k+</h1>
                    <p>Monthly Orders</p>
                </div>
            </div>
        </div>
    </div>
</div>


<div className="fruit">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
                <div className="fruit-1">
                    <img src="./image/Bannar (9).png" alt="img" />
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
            <div className="fruit-1">
                    <img src="./image/Bannar (10).png" alt="img" />
                </div>
            </div>
        </div>
    </div>
</div>

<div className="Popular-Product-Section-1">
    <div className="container">
        <div className="yue text-center">
           <p>Products</p>
           <h2>Our Featured Products</h2>
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


<div className="hot-deal-1">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-md-12 col-12">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-12">
            <div className="ruw">
            <h4> Hot Deal</h4>
            <div className="hot-1-1 d-flex align-items-center justify-content-around">
              <img src="./image/Image (46).png" alt="img" />
              <div className="hot-1-1in">
                <p>Green Apple</p>
                <h6>$14.99</h6>
                <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
              </div>
            </div>
            <div className="hot-1-1 d-flex align-items-center justify-content-around yuoo">
              <img src="./image/Image (31).png" alt="img" />
              <div className="hot-1-1in">
                <p>Indian Malta</p>
                
                <div className="tu d-flex align-items">
                   <img src="./image/Add To Cart (1).png" alt="img" />
                   <img src="./image/Quick View.png" alt="img" />
                   <img src="./image/Add To wishlist.png" alt="img" />
                    </div>
              </div>
            </div>
            <div className="hot-1-1 d-flex align-items-center justify-content-around">
              <img src="./image/Image (32).png" alt="img" />
              <div className="hot-1-1in">
                <p>Green Apple</p>
                <h6>$14.99</h6>
                <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
              </div>
            </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12">
          <div className="ruw">
            <h4> Best Seller</h4>
            <div className="hot-1-1 d-flex align-items-center justify-content-around">
              <img src="./image/Image (34).png" alt="img" />
              <div className="hot-1-1in">
                <p>Eggplant</p>
                <h6>$14.99</h6>
                <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
              </div>
            </div>
            <div className="hot-1-1 d-flex align-items-center justify-content-around">
              <img src="./image/Image (35).png" alt="img" />
              <div className="hot-1-1in">
                <p>Green Apple</p>
                <h6>$14.99</h6>
                <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
              </div>
            </div>
            <div className="hot-1-1 d-flex align-items-center justify-content-around">
              <img src="./image/Image (36).png" alt="img" />
              <div className="hot-1-1in">
                <p>Green Apple</p>
                <h6>$14.99</h6>
                <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
              </div>
            </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12">
          <div className="ruw">
            <h4> Best Seller</h4>
            <div className="hot-1-1 d-flex align-items-center justify-content-around">
              <img src="./image/Image (37).png" alt="img" />
              <div className="hot-1-1in">
                <p>Eggplant</p>
                <h6>$14.99</h6>
                <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
              </div>
            </div>
            <div className="hot-1-1 d-flex align-items-center justify-content-around">
              <img src="./image/Image (38).png" alt="img" />
              <div className="hot-1-1in">
                <p>Green Apple</p>
                <h6>$14.99</h6>
                <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
              </div>
            </div>
            <div className="hot-1-1 d-flex align-items-center justify-content-around">
              <img src="./image/Image (39).png" alt="img" />
              <div className="hot-1-1in">
                <p>Green Apple</p>
                <h6>$14.99</h6>
                <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 col-12">
        <div className="eor">
          <img src="./image/Bannar (5).png" alt="img" />
        </div>
      </div>
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

<div className="Testional-section">
    <div className="container">
    <div className="yue d-flex align-items-center justify-content-between">
            <h1>Client Testimonials</h1>
            <a href="#">View All <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="test-1">
        <img src="./image/Vector (1).png" alt="img" />
        <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
        <div className="test-1in d-flex align-items-center justify-content-between">
            <div className="test-1in-1 d-flex align-items-center">
                <img src="./image/Image (44).png" alt="img" />
                <div className="sire">
                    <h6>Robert Fox</h6>
                    <p>Customer</p>
                </div>
            </div>
            <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="test-1">
        <img src="./image/Vector (1).png" alt="img" />
        <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
        <div className="test-1in d-flex align-items-center justify-content-between">
            <div className="test-1in-1 d-flex align-items-center">
                <img src="./image/Image (44).png" alt="img" />
                <div className="sire">
                    <h6>Robert Fox</h6>
                    <p>Customer</p>
                </div>
            </div>
            <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="test-1">
        <img src="./image/Vector (1).png" alt="img" />
        <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
        <div className="test-1in d-flex align-items-center justify-content-between">
            <div className="test-1in-1 d-flex align-items-center">
                <img src="./image/Image (44).png" alt="img" />
                <div className="sire">
                    <h6>Robert Fox</h6>
                    <p>Customer</p>
                </div>
            </div>
            <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="test-1">
        <img src="./image/Vector (1).png" alt="img" />
        <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
        <div className="test-1in d-flex align-items-center justify-content-between">
            <div className="test-1in-1 d-flex align-items-center">
                <img src="./image/Image (44).png" alt="img" />
                <div className="sire">
                    <h6>Robert Fox</h6>
                    <p>Customer</p>
                </div>
            </div>
            <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="test-1">
        <img src="./image/Vector (1).png" alt="img" />
        <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
        <div className="test-1in d-flex align-items-center justify-content-between">
            <div className="test-1in-1 d-flex align-items-center">
                <img src="./image/Image (44).png" alt="img" />
                <div className="sire">
                    <h6>Robert Fox</h6>
                    <p>Customer</p>
                </div>
            </div>
            <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="test-1">
        <img src="./image/Vector (1).png" alt="img" />
        <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
        <div className="test-1in d-flex align-items-center justify-content-between">
            <div className="test-1in-1 d-flex align-items-center">
                <img src="./image/Image (44).png" alt="img" />
                <div className="sire">
                    <h6>Robert Fox</h6>
                    <p>Customer</p>
                </div>
            </div>
            <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="test-1">
        <img src="./image/Vector (1).png" alt="img" />
        <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
        <div className="test-1in d-flex align-items-center justify-content-between">
            <div className="test-1in-1 d-flex align-items-center">
                <img src="./image/Image (44).png" alt="img" />
                <div className="sire">
                    <h6>Robert Fox</h6>
                    <p>Customer</p>
                </div>
            </div>
            <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="test-1">
        <img src="./image/Vector (1).png" alt="img" />
        <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
        <div className="test-1in d-flex align-items-center justify-content-between">
            <div className="test-1in-1 d-flex align-items-center">
                <img src="./image/Image (44).png" alt="img" />
                <div className="sire">
                    <h6>Robert Fox</h6>
                    <p>Customer</p>
                </div>
            </div>
            <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="test-1">
        <img src="./image/Vector (1).png" alt="img" />
        <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
        <div className="test-1in d-flex align-items-center justify-content-between">
            <div className="test-1in-1 d-flex align-items-center">
                <img src="./image/Image (44).png" alt="img" />
                <div className="sire">
                    <h6>Robert Fox</h6>
                    <p>Customer</p>
                </div>
            </div>
            <div className="tu d-flex align-items">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
        </div>
      </div>
        </SwiperSlide>
      </Swiper>
    </div>
</div>


<div className="container">
<div className="logos-section d-flex align-items-center justify-content-around">
    <img src="./image/Vector (2).png" alt="img" />
    <div className="kder"></div>
    <img src="./image/mango-1.png" alt="img" />
    <div className="kder"></div>
    <img src="./image/Group.png" alt="img" />
    <div className="kder"></div>
    <img src="./image/food.png" alt="img" />
    <div className="kder"></div>
    <img src="./image/bookoff-corporation-logo.png" alt="img" />
    <div className="kder"></div>
    <img src="./image/Group (1).png" alt="img" />
    </div>
</div>


<div className="ourlocation">
    <div className="container">
    <div className="row">
     <div className="col-lg-3 col-md-12 col-12">
        <div className="ourloc-1">
            <img src="./image/Icon (13).png" alt="img" />
            <h6>Our Location</h6>
            <p>1901 Thornridge Cir. Shiloh, Washington DC 20020, United States</p>
        </div>
     </div>
     <div className="col-lg-3 col-md-12 col-12">
     <div className="ourloc-1">
            <img src="./image/Icon (14).png" alt="img" />
            <h6>Call Us 24/7</h6>
            <h3>(303) 555-0105</h3>
        </div>
     </div>
     <div className="col-lg-6 col-md-12 col-12">
     <div className="ourloc-1">
            <img src="./image/Icon (15).png" alt="img" />
            <h6>Subscribe Newsletter</h6>
            <div className="tuww d-flex align-items-center justify-content-between">
                <input type="text" placeholder='Your email address' />
                <button>Subscribe</button>
            </div>
        </div>
     </div>
    </div>
    </div>
</div>

<Footer/>

    </>
  )
}

export default Home4