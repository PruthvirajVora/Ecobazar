import React, { useState } from "react";
import Navbar from './Navbar'
import { Link } from "react-router-dom";
import Footer from './Footer';



function Shop2() {

    const images = [
        { id: 1, src: "./image/Image (32).png" },
        { id: 2, src: "./image/Product Image Slider.png" },
        { id: 3, src: "./image/Product Image Slider (1).png" },
        { id: 4, src: "./image/Product Image Slider (2).png" },
    ];

    // State for the main image
    const [mainImage, setMainImage] = useState(images[0].src);
    return (
        <>
            <Navbar />

            <div className="shop-banner">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/"><i class="fa-solid fa-house"></i></Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to="/category">Category</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to="/category">Vegetable</Link>
                            </li>

                        </ol>
                    </nav>
                </div>
            </div>

            <div className="Shop-banner">
                <div className="container">
                    <img src="./image/Discount Bannar (1).png" alt="img" />
                </div>
            </div>


            <div className="Shop2-section-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="shop2-sec1 d-flex align-items-center">
                                <div class="dropdown">
                                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Select Category
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown m-2">
                                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Select Price
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown">
                                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Select Rating
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 justify-content-end">
                            <div className="Shop2-sec-2 d-flex align-items-center justify-content-end">
                                <div class="dropdown">
                                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort by: Latest
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown m-1">
                                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Show: 16
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="Feauter-section yullop">
                <div className="container">

                    <div className="Popular-main d-flex align-items-center justify-content-center">
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1  m-2p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Feauter-section yullop">
                <div className="container">

                    <div className="Popular-main d-flex align-items-center justify-content-center">
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1  m-2p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Feauter-section yullop">
                <div className="container">

                    <div className="Popular-main d-flex align-items-center justify-content-center">
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1  m-2p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Feauter-section yullop">
                <div className="container">

                    <div className="Popular-main d-flex align-items-center justify-content-center">
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1  m-2p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Feauter-section yullop">
                <div className="container">

                    <div className="Popular-main d-flex align-items-center justify-content-center">
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1  m-2p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Feauter-section yullop">
                <div className="container">

                    <div className="Popular-main d-flex align-items-center justify-content-center">
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1  m-2p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Feauter-section yullop">
                <div className="container">

                    <div className="Popular-main d-flex align-items-center justify-content-center">
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1  m-2p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
                                </div>
                            </div>
                        </div>
                        <div className="popular-1 m-2 p-0">
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
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="./image/Add To Cart.png" alt="img"  />
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
                                    <input type="text" placeholder='Your email address' />
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







            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">

                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                        <div class="modal-body">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="rururu d-flex">
                                        {/* Sidebar Small Images */}
                                        <div className="small-images d-flex flex-column me-3">
                                            {images.map((img) => (
                                                <img
                                                    key={img.id}
                                                    src={img.src}
                                                    alt="Thumbnail"
                                                    className={`small-img ${mainImage === img.src ? "active" : ""}`}
                                                    onClick={() => setMainImage(img.src)}
                                                    style={{
                                                        width: "80px",
                                                        height: "80px",
                                                        cursor: "pointer",
                                                        border: mainImage === img.src ? "2px solid green" : "none",
                                                        marginBottom: "10px",
                                                    }}
                                                />
                                            ))}
                                        </div>

                                        {/* Main Image Display */}
                                        <div className="main-image">
                                            <img
                                                src={mainImage}
                                                alt="Main"
                                                style={{ width: "400px", height: "300px", objectFit: "cover" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="shop2-11">
                                        <div className="shop2-11-in">
                                            <h1>Chinese Cabbage
                                                <span>In Stock</span> </h1>
                                        </div>
                                        <div className="shop2-11-in-1 d-flex align-items-center">
                                            <div className="tyhs d-flex align-items-center ">
                                                <img src="./image/Rating (5).png" alt="img" />
                                                <p> 4 Review</p>
                                            </div>
                                            <div className="rruriew">
                                                <p><strong>SKU:
                                                </strong>2,51,594</p>
                                            </div>
                                        </div>
                                        <div className="shop2-11-in-2">
                                            <div className="shop2-11-in-2-1 d-flex align-items-center">
                                                <h5>$48.00
                                                </h5>
                                                <h6>$17.28</h6>
                                                <h4>64% Off</h4>
                                            </div>
                                        </div>
                                        <div className="nttg"></div>
                                        <div className="shop2-11-in-3 d-flex align-items-center justify-content-between">
                                            <div className="shop2-11-in-3-1">
                                                <div className="shop2-11-in-3-1in d-flex align-items-center">
                                                    <p>Brand:</p>
                                                    <img src="./image/Group 19.png" alt="img" />
                                                </div>
                                            </div>
                                            <div className="shop2-11-in-3-2 d-flex align-items-center">
                                                <p>Share item:</p>
                                                <img src="./image/Share.png" alt="img" />
                                            </div>
                                        </div>
                                        <div className="shop2-11-in-4">
                                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. </p>
                                        </div>
                                        <div className="nttg"></div>
                                        <div className="shop2-11-in-5 d-flex align-items-center">
                                            <img src="./image/Quantity.png" alt="img" />
                                            <button>Add to Cart<i class="fa-solid fa-bag-shopping"></i></button>
                                            <img src="./image/Button.png" alt="img" />
                                        </div>
                                        <div className="nttg"></div>
                                        <div className="shop2-11-in-6">
                                            <p> <strong>Category:</strong>
                                                Vegetables</p>
                                            <p> <strong>Tag:</strong>
                                                Vegetables
                                                Healthy
                                                Chinese
                                                Cabbage
                                                Green Cabbage:</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <Footer />
        </>
    )
}

export default Shop2