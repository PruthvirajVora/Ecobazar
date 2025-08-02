import React from 'react'
import Navbar5 from './Navbar5'
import { Link } from "react-router-dom";
import Footer from './Footer';

function Bloglist() {
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

<div className="blog-1">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
                <div className="Blog-list-1">
                <div className="shop-1">
                                <button>Fliter <i class="fa-solid fa-sliders"></i></button>
                            </div>
                </div>
                <div className="Blog-list-2 d-flex align-items-center">
                <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder='Search' />
                </div>
                <div className="Blog-list-3">
                    <h3>Top Categories</h3>
                    <div className="Blog-List-3-1 d-flex align-items-center justify-content-between">
                        <h6>Fresh Fruit</h6>
                        <p> (134)</p>
                    </div>
                    <div className="Blog-List-3-1 d-flex align-items-center justify-content-between">
                        <h6>Vegetables</h6>
                        <p>  (150)</p>
                    </div>
                    <div className="Blog-List-3-1 d-flex align-items-center justify-content-between">
                        <h6>Cooking</h6>
                        <p>   (54)</p>
                    </div>
                    <div className="Blog-List-3-1 d-flex align-items-center justify-content-between">
                        <h6>Snacks</h6>
                        <p>  (47)</p>
                    </div>
                    <div className="Blog-List-3-1 d-flex align-items-center justify-content-between">
                        <h6>Beverages</h6>
                        <p> (43)</p>
                    </div>
                    <div className="Blog-List-3-1 d-flex align-items-center justify-content-between">
                        <h6>Beauty & Health</h6>
                        <p>  (38)</p>
                    </div>
                    <div className="Blog-List-3-1 d-flex align-items-center justify-content-between">
                        <h6>Bread & Bakery</h6>
                        <p> (15)</p>
                    </div>
                    <div className="nttg"></div>
                </div>
                <div className="AllCat-1 d-flex align-items-center justify-content-between">
                                    <h6>Popular Tag</h6>
                                    <i class="fa-solid fa-chevron-up"></i>
                                </div>
                                <div className="AllCat-4 d-flex align-items-center">
                                    <button>Healthy</button>
                                    <a href="#">Low fat</a>
                                    <button>Vegetarian</button>
                                </div>
                                <div className="AllCat-4 d-flex align-items-center">
                                    <button>Kid foods</button>
                                    <button>Vitamins</button>

                                    <button>Bread</button>
                                </div>
                                <div className="AllCat-4 d-flex align-items-center">
                                    <button>Meat</button>
                                    <button>Snacks</button>

                                    <button>Tiffin</button>
                                </div>
                                <div className="AllCat-4 d-flex align-items-center">
                                    <button>Launch</button>
                                    <button>Dinner</button>

                                    <button>Breackfast</button>
                                </div>
                                <div className="AllCat-4 d-flex align-items-center">
                                    <button>Fruit</button>
                                </div>
                                
                                <div className="nttg"></div>
                                <div className="Blog-list-5">
                                    <h3>Our Gallery</h3>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <div className="blog-list-5in">
                                                <img src="./image/gallery.png" alt="img" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <div className="blog-list-5in">
                                                <img src="./image/gallery (1).png" alt="img" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <div className="blog-list-5in">
                                            <img src="./image/gallery (2).png" alt="img" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <div className="blog-list-5in">
                                            <img src="./image/gallery (3).png" alt="img" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <div className="blog-list-5in">
                                            <img src="./image/gallery (4).png" alt="img" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <div className="blog-list-5in">
                                            <img src="./image/gallery (5).png" alt="img" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <div className="blog-list-5in">
                                            <img src="./image/gallery (6).png" alt="img" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <div className="blog-list-5in">
                                            <img src="./image/gallery (7).png" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="nttg"></div>
                                <div className="Blog-List-6">
                                    <h3>Recently Added</h3>
                                    <div className="Blog-lisy-6in1 d-flex align-content-center">
                                        <img src="./image/Image (64).png" alt="img" />
                                        <div className="Blog-lisy-6in1-1">
                                            <h6>Curabitur porttitor orci eget nequ accumsan.</h6>
                                            <img src="./image/Date.png" alt="img" />
                                        </div>
                                    </div>
                                    <div className="Blog-lisy-6in1 d-flex align-content-center">
                                        <img src="./image/Image (64).png" alt="img" />
                                        <div className="Blog-lisy-6in1-1">
                                            <h6>Curabitur porttitor orci eget nequ accumsan.</h6>
                                            <img src="./image/Date.png" alt="img" />
                                        </div>
                                    </div>
                                    <div className="Blog-lisy-6in1 d-flex align-content-center">
                                        <img src="./image/Image (64).png" alt="img" />
                                        <div className="Blog-lisy-6in1-1">
                                            <h6>Curabitur porttitor orci eget nequ accumsan.</h6>
                                            <img src="./image/Date.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12">
            <div className="Allcat-6 d-flex align-items-center justify-content-between">
                                <div className="Allcat-6inn d-flex align-items-center">
                                    <p>Sort by:</p>
                                    <div class="dropdown">
                                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Latest
                                        </a>

                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <p>52 Results Found</p>
                            </div>
                            <div className="row">
            <div className="col-lg-6 col-md-12 col-12 p-2">
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
            <div className="col-lg-6 col-md-12 col-12 p-2">
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
            <div className="col-lg-6 col-md-12 col-12 p-2">
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
            <div className="col-lg-6 col-md-12 col-12 p-2">
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
            <div className="col-lg-6 col-md-12 col-12 p-2">
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
            <div className="col-lg-6 col-md-12 col-12 p-2">
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
            <div className="col-lg-6 col-md-12 col-12 p-2">
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
            <div className="col-lg-6 col-md-12 col-12 p-2">
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
            <div className="col-lg-6 col-md-12 col-12 p-2">
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
            <div className="col-lg-6 col-md-12 col-12 p-2">
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
            <div className="col-lg-6 col-md-12 col-12 p-2">
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
            <div className="col-lg-6 col-md-12 col-12 p-2">
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

export default Bloglist