import React from 'react'
import Navbar from './Navbar'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Footer2 from './Footer2';

function Home2() {
  return (
<>
<Navbar/>
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
      <img className='img-fluid w-100' src="./image/Hero (1).png" alt="img" />
    </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="ban1-sec1">
      <img className='img-fluid w-100' src="./image/Hero (1).png" alt="img" />
    </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="ban1-sec1">
      <img className='img-fluid w-100' src="./image/Hero (1).png" alt="img" />
    </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="ban1-sec1">
      <img className='img-fluid w-100' src="./image/Hero (1).png" alt="img" />
    </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="ban1-sec1">
      <img className='img-fluid w-100' src="./image/Hero (1).png" alt="img" />
    </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="ban1-sec1">
      <img className='img-fluid w-100' src="./image/Hero (1).png" alt="img" />
    </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="ban1-sec1">
      <img className='img-fluid w-100' src="./image/Bannar (3).png" alt="img" />
    </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="ban1-sec1">
      <img className='img-fluid w-100' src="./image/Bannar (3).png" alt="img" />
    </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="ban1-sec1">
      <img className='img-fluid w-100' src="./image/Bannar (3).png" alt="img" />
    </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>


    <div className="Section-1 m-0">
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
        <div className="popular-1 tur">
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

<div className="saleof-section">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
                <div className="sale-sec-1 position-relative">
                    <img src="./image/Rectangle 54.png" alt="img" />
                    <div className="sale-sec-1inn position-absolute">
                        <p>Best Deals</p>
                        <h1>Sale of the Month</h1>
                        <div className="twu d-flex align-items-center justify-content-center">
                            <div className="tyww">
                                <p>00</p>
                                <p>Days</p>
                            </div>
                            
                            <div className="tyww">
                                <p>02</p>
                                <p>Hours</p>
                            </div>
                            <div className="tyww">
                                <p>18</p>
                                <p>MINS</p>
                            </div>
                            <div className="tyww">
                                <p>46</p>
                                <p>SECS</p>
                            </div>
                        </div>
                        <a href="#"> Shop Now <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
            <div className="sale-sec-1 position-relative">
                    <img src="./image/Rectangle 54 (1).png" alt="img" />
                    <div className="sale-sec-1inn position-absolute yupos">
                        <p>85% Fat Free</p>
                        <h1>Low-Fat Meat</h1>
                       <p>Started at <span>$79.99</span></p>
                        <a href="#"> Shop Now <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
            <div className="sale-sec-1 position-relative">
                    <img src="./image/Rectangle 54 (2).png" alt="img" />
                    <div className="sale-sec-1inn position-absolute uui">
                        <p>Summer Sale</p>
                        <h1>100% Fresh Fruit</h1>
                        <div className="twu d-flex align-items-center justify-content-center">
                           <h1>Up to <span>64% OFF</span></h1>
                        </div>
                        <a href="#"> Shop Now <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>




<div className="Popular-Product-Section-1">
    <div className="container">
    <div className="yue d-flex align-items-center justify-content-between">
            <h1>Newest Products</h1>
            <a href="#">View All <i class="fa-solid fa-arrow-right"></i></a>
        </div>

        <div className="Popular-main d-flex align-items-center justify-content-center">
        <div className="popular-1 tur">
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



<div className="instargram-section">
    <div className="container">
        <div className="tyerwe text-center">
            <h1>Follow us on Instagram</h1>
        </div>

        <div className="row">
            <div className="col-lg-2 col-md-12 col-12">
                <div className="insta-1 position-relative">
                    <img src="./image/Instagram Post.png" alt="img" />
                    <div className="insta-1in position-absolute">
                    <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-12 col-12">
                <div className="insta-1 position-relative">
                    <img src="./image/Instagram Post (1).png" alt="img" />
                    <div className="insta-1in position-absolute">
                    <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-12 col-12">
                <div className="insta-1 position-relative">
                    <img src="./image/Instagram Post (2).png" alt="img" />
                    <div className="insta-1in position-absolute">
                    <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-12 col-12">
                <div className="insta-1 position-relative">
                    <img src="./image/Instagram Post (3).png" alt="img" />
                    <div className="insta-1in position-absolute">
                    <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-12 col-12">
                <div className="insta-1 position-relative">
                    <img src="./image/Instagram Post (4).png" alt="img" />
                    <div className="insta-1in position-absolute">
                    <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-12 col-12">
                <div className="insta-1 position-relative">
                    <img src="./image/Instagram Post (5).png" alt="img" />
                    <div className="insta-1in position-absolute">
                    <i class="fa-brands fa-instagram"></i>
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

<Footer2/>
</>
  )
}

export default Home2