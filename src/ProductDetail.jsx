import React, { useState } from "react";
import Navbar5 from './Navbar5'
import { Link } from "react-router-dom";
import Footer from "./Footer";
function ProductDetail() {
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


            <Navbar5 />

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



            <div className="Product-Detail-1">
                <div className="container">
                    <div className="row align-items-center">
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

            <div className="Product-detail-2">
                <div className="container">
                    <ul class="nav nav-underline justify-content-center" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Descriptions</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Additional Information</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Customer Feedback</button>
                        </li>

                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="Psec-1">
                                        <p>Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.</p>
                                        <p>
                                            Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. </p>
                                    </div>
                                    <div className="Psec-2 d-flex align-items-center">
                                        <img src="./image/Check (1).png" alt="img" />
                                        <p>100 g of fresh leaves provides.</p>
                                    </div>
                                    <div className="Psec-2 d-flex align-items-center">
                                        <img src="./image/Check (1).png" alt="img" />
                                        <p>Aliquam ac est at augue volutpat elementum.</p>
                                    </div>
                                    <div className="Psec-2 d-flex align-items-center">
                                        <img src="./image/Check (1).png" alt="img" />
                                        <p>Quisque nec enim eget sapien molestie..</p>
                                    </div>
                                    <div className="Psec-2 d-flex align-items-center">
                                        <img src="./image/Check (1).png" alt="img" />
                                        <p>Proin convallis odio volutpat finibus posuere.</p>
                                    </div>
                                    <p>Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. </p>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="Psec-4">
                                        <div className="Psec-4-1">
                                            <img src="./image/Video (4).png" alt="img" />
                                        </div>
                                        <div className="Psec-4-2 d-flex align-items-center flex-wrap">
                                            <div className="Psec-4-2-1 d-flex align-align-items-center flex-wrap">
                                                <img src="./image/price-tag 1.png" alt="image" />
                                                <div className="Psec-4-2-1-1">
                                                    <h6>64% Discount</h6>
                                                    <p>Save your 64% money with us</p>
                                                </div>
                                            </div>
                                            <div className="Psec-4-2-1 d-flex align-align-items-center flex-wrap">
                                                <img src="./image/leaf 1.png" alt="image" />
                                                <div className="Psec-4-2-1-1">
                                                    <h6>100% Organic</h6>
                                                    <p>100% Organic Vegetables</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                            <div className="row ">
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="Psec-4">
                                        <div className="Psec-4-1 d-flex align-items-center">
                                            <h6>Weight:
                                            </h6>
                                            <p> 03</p>
                                        </div>
                                        <div className="Psec-4-1 d-flex align-items-center">
                                            <h6>Color:
                                            </h6>
                                            <p>Green</p>
                                        </div>
                                        <div className="Psec-4-1 d-flex align-items-center">
                                            <h6>Category:
                                            </h6>
                                            <p> Vegetables</p>
                                        </div>
                                        <div className="Psec-4-1 d-flex align-items-center">
                                            <h6>Stock Status:
                                            </h6>
                                            <p>  Available (5,413)</p>
                                        </div>
                                        <div className="Psec-4-1 d-flex align-items-center">
                                            <h6>Tags:
                                            </h6>
                                            <p>Vegetables,
                                                Healthy,
                                                Chinese,
                                                Cabbage,
                                                Green Cabbage,</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="Psec-4">
                                        <div className="Psec-4-1">
                                            <img src="./image/Video (4).png" alt="img" />
                                        </div>
                                        <div className="Psec-4-2 d-flex align-items-center flex-wrap">
                                            <div className="Psec-4-2-1 d-flex align-align-items-center flex-wrap">
                                                <img src="./image/price-tag 1.png" alt="image" />
                                                <div className="Psec-4-2-1-1">
                                                    <h6>64% Discount</h6>
                                                    <p>Save your 64% money with us</p>
                                                </div>
                                            </div>
                                            <div className="Psec-4-2-1 d-flex align-align-items-center flex-wrap">
                                                <img src="./image/leaf 1.png" alt="image" />
                                                <div className="Psec-4-2-1-1">
                                                    <h6>100% Organic</h6>
                                                    <p>100% Organic Vegetables</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                        <div className="row ">
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="Psec-5">
                                        <div className="Psec5-1 d-flex align-items-center justify-content-between">
                                            <div className="Psec5-1in-1 d-flex align-items-center">
                                                <img src="./image/Image (62).png" alt="img" />
                                                <div className="Psec5-1in-1-1">
                                                    <h6>Kristin Watson</h6>
                                                    <img src="./image/Rating (6).png" alt="img" />
                                                </div>
                                            </div>
                                            <div className="Psec5-1in-2">
                                                <p>2 min ago</p>
                                            </div>
                                        </div>
                                        <p>Duis at ullamcorper nulla, eu dictum eros.</p>
                                        <div className="nttg"></div>
                                        <div className="Psec5-1 d-flex align-items-center justify-content-between">
                                            <div className="Psec5-1in-1 d-flex align-items-center">
                                                <img src="./image/Image (62).png" alt="img" />
                                                <div className="Psec5-1in-1-1">
                                                    <h6>Kristin Watson</h6>
                                                    <img src="./image/Rating (6).png" alt="img" />
                                                </div>
                                            </div>
                                            <div className="Psec5-1in-2">
                                                <p>30 Apr, 2021</p>
                                            </div>
                                        </div>
                                        <p>Keep the soil evenly moist for the healthiest growth. If the sun gets too hot, Chinese cabbage tends to "bolt" or go to seed; in long periods of heat, some kind of shade may be helpful. Watch out for snails, as they will harm the plants.</p>
                                        <div className="nttg"></div>
                                        <div className="Psec5-1 d-flex align-items-center justify-content-between">
                                            <div className="Psec5-1in-1 d-flex align-items-center">
                                                <img src="./image/Image (62).png" alt="img" />
                                                <div className="Psec5-1in-1-1">
                                                    <h6>Kristin Watson</h6>
                                                    <img src="./image/Rating (6).png" alt="img" />
                                                </div>
                                            </div>
                                            <div className="Psec5-1in-2">
                                                <p>2 min ago</p>
                                            </div>
                                        </div>
                                        <p> Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus..</p>
                                        <div className="nttg"></div>
                                        
                                        <div className="Psec5-1 d-flex align-items-center justify-content-between">
                                            <div className="Psec5-1in-1 d-flex align-items-center">
                                                <img src="./image/Image (62).png" alt="img" />
                                                <div className="Psec5-1in-1-1">
                                                    <h6>Kristin Watson</h6>
                                                    <img src="./image/Rating (6).png" alt="img" />
                                                </div>
                                            </div>
                                            <div className="Psec5-1in-2">
                                                <p>2 min ago</p>
                                            </div>
                                        </div>
                                        <p> Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus..</p>
                                        <div className="nttg"></div>
                                        
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

<Footer/>
        </>
    )
}

export default ProductDetail