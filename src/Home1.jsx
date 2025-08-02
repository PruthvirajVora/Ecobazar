import React from 'react'
import Navbar1 from './Navbar1'
import Footer1 from './Footer1';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
function Home1() {
  return (
    <>
    <Navbar1/>

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

<div className="Popular-secteion">
    <div className="container">
        <div className="yue text-center">
           <p>Category</p>
           <h2>Shop by Top Categories</h2>
        </div>

        <div className="row">
            <div className="col-lg-2 col-md-6 col-12">
                <div className="popular-sec ">
                    <img src="./image/image 1.png" alt="img" />
                    <p>Fresh Fruit</p>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
                <div className="popular-sec yeoe">
                    <img src="./image/image 1 (1).png" alt="img" />
                    <p>Fresh Vegetable</p>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
                <div className="popular-sec">
                    <img src="./image/image 1 (2).png" alt="img" />
                    <p>Meat & Fish</p>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
                <div className="popular-sec">
                    <img src="./image/image 1 (3).png" alt="img" />
                    <p>Snacks</p>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
                <div className="popular-sec">
                    <img src="./image/image 1 (4).png" alt="img" />
                    <p>Brevages</p>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
                <div className="popular-sec">
                    <img src="./image/image 1 (5).png" alt="img" />
                    <p>Beauty & Health</p>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
                <div className="popular-sec">
                    <img src="./image/image 1 (6).png" alt="img" />
                    <p>Bread & Bakery</p>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
                <div className="popular-sec">
                    <img src="./image/image 1 (7).png" alt="img" />
                    <p>Baking Needs</p>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
                <div className="popular-sec">
                    <img src="./image/image 1 (8).png" alt="img" />
                    <p>Cooking Needs</p>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
                <div className="popular-sec">
                    <img src="./image/image 1 (9).png" alt="img" />
                    <p>Diabetic food</p>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
                <div className="popular-sec">
                    <img src="./image/image 1 (10).png" alt="img" />
                    <p>Dish Detegrents</p>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
                <div className="popular-sec">
                    <img src="./image/image 1 (11).png" alt="img" />
                    <p>Oil</p>
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

<div className="video">
  <div className="container">
    <div className="vid">
    <img src="./image/Video (2).png" alt="img" />
    </div>
  </div>
</div>


<div className="Team-section">
  <div className="container">
  <div className="yue text-center">
           <p>Team</p>
           <h2>Our Professional Members</h2>
        </div>
    <div className="row">
      <div className="col-lg-3 col-md-6 col-12">
        <div className="team-sec">
          <div className="team-sec-1 position-relative">
            <img src="./image/Image (47).png" alt="img" />
            <div className="te position-absolute">
              <img src="./image/Frame 176.png" alt="img" />
            </div>
            <div className="yulom">
              <h6>Jenny Wilson</h6>
              <p>Ceo & Founder</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="team-sec">
          <div className="team-sec-1 position-relative">
            <img src="./image/Image (48).png" alt="img" />
            <div className="te position-absolute">
              <img src="./image/Frame 176.png" alt="img" />
            </div>
            <div className="yulom">
              <h6>Jenny Wilson</h6>
              <p>Ceo & Founder</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="team-sec">
          <div className="team-sec-1 position-relative">
            <img src="./image/Image (49).png" alt="img" />
            <div className="te position-absolute">
              <img src="./image/Frame 176.png" alt="img" />
            </div>
            <div className="yulom">
              <h6>Jenny Wilson</h6>
              <p>Ceo & Founder</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="team-sec">
          <div className="team-sec-1 position-relative">
            <img src="./image/Image (50).png" alt="img" />
            <div className="te position-absolute">
              <img src="./image/Frame 176.png" alt="img" />
            </div>
            <div className="yulom">
              <h6>Jenny Wilson</h6>
              <p>Ceo & Founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="Testional-section">
    <div className="container">
    <div className="yue text-center">
           <p>Client Testiomial</p>
           <h2>What our Client Says</h2>
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




<div className="sub-section bg-black text-white p-5 my-3">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
                <div className="sub-sec-1  d-flex align-items-center">
                  <img src="./image/EnvelopeOpen 1.png" alt="img" />
                  <div className="llpp mx-3">
                    <h5>Subcribe our Newsletter</h5>
                    <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 ">
                <div className="sub-sec-2 d-flex align-items-center justify-content-end">
                    <div className="sub-sec2-1">
                        <input type="text" placeholder='Your email address'/>
                        <button>Subscribe</button>
                    </div>
                    <div className="sub-sec2-2 d-flex align-items-center">
                        <img src="./image/Social Media.png" alt="img" />
                        <img src="./image/Social Media (1).png" alt="img" />
                        <img src="./image/Social Media (2).png" alt="img" />
                        <img src="./image/Social Media (3).png" alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<Footer1/>
    </>
  )
}

export default Home1