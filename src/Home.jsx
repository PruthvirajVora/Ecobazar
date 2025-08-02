import React, { useRef, useState,useEffect ,  } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import Navbar from './Navbar'
import Footer from './Footer'

function Home() {
    useEffect(() => {
        const modalElement = new window.bootstrap.Modal(document.getElementById("autoOpenModal"));
        modalElement.show();
    
        // Remove modal-open class and reset body scroll when modal is closed
        document.getElementById("autoOpenModal").addEventListener("hidden.bs.modal", () => {
          document.body.classList.remove("modal-open");
          document.body.style.overflow = "auto"; // 🟢 Fix scrolling issue
          document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());
        });
    
      }, []);
  return (
    <>
<Navbar/>

<div className="Home-banner">
    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-md-12 col-12">
                <div className="Home-b-sec-1 position-relative">
                    <img src="./image/Bannar Big.png" alt="img" />
                    <div className="homeb-sec-1-in position-absolute " >
                        <h1>Fresh & Healthy
                        Organic Food</h1>
                        <div className="homeb-sec-1-in-1 d-flex  justify-content-start">
                            <div className="jdkr"></div>
                            <div className="it">
                            <h4>Sale up to <span>30% OFF</span></h4>
                            <p>Free shipping on all your order.</p>
                            </div>
                        </div>
                        <a href="#">Shop now<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
                <div className="row">
                    <div className="col-lg-12 col-12 col-12">
                        <div className="Home-b-sec2-1 position-relative">
                            <img src="./image/BG.png" alt="img" />
                            <div className="home-b-sec2-1inner position-absolute">
                                <h5>SUMMER SALE</h5>
                                <h3>75%OFF</h3>
                                <p>Only Fruit & Vegetable</p>
                                <a href="#">Shop now<i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-12 col-12">
                        <div className="Home-b-sec3-1 position-relative">
                            <img src="./image/Bannar.png" alt="img" />
                            <div className="Home-b-sec3-1-inner position-absolute " >
                                   <p>Best Deal</p>
                                   <h4>Special Products Deal of the Month</h4>
                                   <a href="#">Shop now<i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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




<div className="Popular-secteion">
    <div className="container">
        <div className="yue d-flex align-items-center justify-content-between">
            <h1>Popular Categories</h1>
            <a href="#">View All <i class="fa-solid fa-arrow-right"></i></a>
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
    <div className="yue d-flex align-items-center justify-content-between">
            <h1>Popular Products</h1>
            <a href="#">View All <i class="fa-solid fa-arrow-right"></i></a>
        </div>
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

<div className="hot-deal-section">
    <div className="container">
    <div className="yue d-flex align-items-center justify-content-between">
            <h1>Hot Deals</h1>
            <a href="#">View All <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="row">
           <div className="col-lg-4 col-md-12 col-12 p-0">
            <div className="hot-sec1 position-relative">
                <div className="hot-sec1-in d-flex align-items-center position-absolute">
                    <span>Sale 50%</span>
                    <span className='jf'>Best Sale</span>
                </div>
                <img src="./image/Image (40).png" alt="img" />
                <div className="hit-sec2 d-flex align-items-center">
                    <img src="./image/Add To Cart.png" alt="img" />
                    <button>Add to cart <i class="fa-solid fa-bag-shopping"></i></button>
                    <img src="./image/Quick View.png" alt="img" />
                </div>
                <div className="hit-sec3 text-center">
                    <p>Chinese cabbage</p>
                    <h4>$12.00
                    <strong>$24.00</strong></h4>
                    <div className="tu d-flex align-items justify-content-center">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <p className='cd'> (524 Feedback)</p>
                    </div>
                    <p>Hurry up! Offer ends In:</p>
                </div>
            </div>
           </div>
           <div className="col-lg-8 col-md-12 col-12">
            <div className="row">
                <div className="col-lg-4 col-md-12 col-12 m-0 p-0">
                <div className="Product-1">
                <span>Sale 50%</span>
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
                <div className="col-lg-4 col-md-12 col-12 m-0 p-0">
                <div className="Product-1">
                <span>Sale 50%</span>
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
                <div className="col-lg-4 col-md-12 col-12 m-0 p-0">
                <div className="Product-1">
                <span>Sale 50%</span>
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
                <div className="col-lg-4 col-md-12 col-12 m-0 p-0">
                <div className="Product-1">
                <span>Sale 50%</span>
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
                <div className="col-lg-4 col-md-12 col-12 m-0 p-0">
                <div className="Product-1">
                <span>Sale 50%</span>
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
                <div className="col-lg-4 col-md-12 col-12 m-0 p-0">
                <div className="Product-1">
                <span>Sale 50%</span>
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
            </div>
           </div>
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-12 col-12 m-0 p-0">
            <div className="Product-1">
                <span>Sale 50%</span>
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
            <div className="col-lg-3 col-md-12 col-12 m-0 p-0">
            <div className="Product-1">
                <span>Sale 50%</span>
                <img src="./image/Image (38).png" alt="img" />
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
            <div className="col-lg-3 col-md-12 col-12 m-0 p-0">
            <div className="Product-1">
                <span>Sale 50%</span>
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
            <div className="col-lg-3 col-md-12 col-12 m-0 p-0">
            <div className="Product-1">
                <span>Sale 50%</span>
                <img src="./image/Image (45).png" alt="img" />
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

<div className="summer-sale">
    <div className="container">
        <div className="summer-sec position-relative">
            <img src="./image/Discount Bannar.png" alt="img" />
            <div className="summer-sec-1 position-absolute">
                <h6>SUMMER SALE</h6>
                <h1><span>37%</span>OFF</h1>
                <p>Free on all your order, Free Shipping and  30 days money-back guarantee</p>
                <button>Shop Now <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
</div>

<div className="Feauter-section">
    <div className="container">
    <div className="yue d-flex align-items-center justify-content-between">
            <h1>Featured Products</h1>
            <a href="#">View All <i class="fa-solid fa-arrow-right"></i></a>
        </div>
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
            <div className="col-lg-6 col-md-12 col-12">
                <div className="sub-sec-1">
                    <h5>Subcribe our Newsletter</h5>
                    <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
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




<div>
      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="autoOpenModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
           <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
                <div className="ske">
                    <img src="./image/BG (6).png" alt="img" />
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
                <div className="ske-1">
                    <h1>Subcribe to Our Newsletter</h1>
                    <p>Subscribe to our newlletter and Save your <span>20% money</span>  with discount code today.</p>
                    <div className="sub-sec2-1 d-flex justify-content-between">
                        <input type="text" placeholder='Your email address'/>
                        <button>Subscribe</button>
                    </div>
                    <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  Do not show this window
  </label>
</div>
                </div>
            </div>
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

export default Home