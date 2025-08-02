import React from 'react'
import Navbar5 from './Navbar5'
import { Link } from "react-router-dom";
import Footer from './Footer';


function SingleBlog() {
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



            <div className="SingleBlog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-12">
                            <div className="SingleBlog-1">
                                <img src="./image/Image (65).png" alt="img" />

                                <div className="SingleBlog-11 d-flex align-items-center">
                                    <div className="SingleBlog-1 d-flex align-items-center">
                                        <img src="./image/tag 1 (1).png" alt="img" />
                                        <p>Food</p>
                                    </div>
                                    <div className="SingleBlog-1 hhj d-flex align-items-center">
                                        <img src="./image/user_3 1 (1).png" alt="img" />
                                        <p>By Admin</p>
                                    </div>
                                    <div className="SingleBlog-1 d-flex align-items-center">
                                        <img src="./image/ChatCentered 1 (1).png" alt="img" />
                                        <p>Coments</p>
                                    </div>
                                </div>
                                <h3>Maecenas tempor urna sed quam mollis, a placerat dui fringill Suspendisse.</h3>
                                <div className="SingleBlog-2 d-flex align-items-center justify-content-between">
                                    <div className="SingleBlog-2-1 d-flex align-items-center">
                                        <img src="./image/Images.png" alt="img" />
                                        <div className="SingleBlog-2-1-1">
                                            <h6>Cameron Williamson</h6>
                                            <p>4 April, 2021
                                                •
                                                6 min read</p>
                                        </div>
                                    </div>
                                    <div className="SingleBlog-2-2">
                                        <img src="./image/Share.png" alt="img" />
                                    </div>
                                </div>
                                <div className="nttg"></div>
                                <h5>Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat dolor at scelerisque imperdiet. Phasellus tristique felis dolor.</h5>
                                <p>Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus. Fusce malesuada sed velit ut dictum. Morbi faucibus vitae orci at euismod. Integer auctor augue in erat vehicula, quis fermentum ex finibus.</p>
                                <p>Mauris pretium elit a dui pulvinar, in ornare sapien euismod. Nullam interdum nisl ante, id feugiat quam euismod commodo. Sed ultrices lectus ut iaculis rhoncus. Aenean non dignissim justo, at fermentum turpis. Sed molestie, ligula ut molestie ultrices, tellus ligula viverra neque, malesuada consectetur diam sapien volutpat risus.
                                    Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. ur ridiculus mus.</p>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="SingleBlog-3">
                                            <img src="./image/image (66).png" alt="img" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="SingleBlog-3">
                                            <img src="./image/image (67).png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <p>Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate quis vehicula ut, vestibulum ut mauris. Nullam non felis varius dui rutrum rutrum in a nisi. Suspendisse elementum rutrum lorem sed luctus. Proin iaculis euismod metus non sollicitudin. Duis vel luctus lacus. Nullam faucibus iaculis convallis. In ullamcorper nibh ipsum, eget lacinia eros pulvinar a. Integer accumsan arcu nec faucibus ultricies.
                                </p>
                                <div className="SingleBlog-4">
                                    <img src="./image/Bannar (12).png" alt="img" />
                                </div>
                                <h3>Leave a Comment</h3>
                                <div className="SingleBlog-5 d-flex align-items-center">
                                    <div className="SingleBlog-5-1">
                                        <label htmlFor="">
                                            Full Name
                                        </label>
                                        <input type="text" placeholder='Zakir Hossen' />
                                    </div>
                                    <div className="SingleBlog-5-1">
                                        <label htmlFor="">
                                            Email
                                        </label>
                                        <input type="text" placeholder='zakirsoft.20@g|' />
                                    </div>
                                </div>
                                <div className="SingleBlog-5-1">
                                    <label htmlFor="">
                                        Message
                                    </label>
                                    <textarea name="" id="">Write your comment here…</textarea>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label class="form-check-label" for="defaultCheck1">
                                    Save my name and email in this browser for the next time I comment.
                                    </label>
                                </div>
                                <div className="SingleBlog-5-2">
                                    <button>Post Comments</button>
                                </div>
                                <div className="SingleBlog-6">
                                    <h3>Comments</h3>
                                <div className="SingleBlog-6-1 d-flex ">
                                          <img src="./image/ellipse 8.png" alt="img" />
                                          <div className="SingleBlog-6-2">
                                            <h6><strong>Annette Black</strong>26 Apr, 2021</h6>
                                            <p>In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.</p>
                                          </div>
                                </div>
                                <div className="nttg"></div>
                                <div className="SingleBlog-6-1 d-flex ">
                                          <img src="./image/ellipse 8.png" alt="img" />
                                          <div className="SingleBlog-6-2">
                                            <h6><strong>Annette Black</strong>26 Apr, 2021</h6>
                                            <p>In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.</p>
                                          </div>
                                </div>
                                <div className="nttg"></div>
                                <div className="SingleBlog-6-1 d-flex ">
                                          <img src="./image/ellipse 8.png" alt="img" />
                                          <div className="SingleBlog-6-2">
                                            <h6><strong>Annette Black</strong>26 Apr, 2021</h6>
                                            <p>In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.</p>
                                          </div>
                                </div>
                                <div className="nttg"></div>
                                <div className="SingleBlog-6-1 d-flex ">
                                          <img src="./image/ellipse 8.png" alt="img" />
                                          <div className="SingleBlog-6-2">
                                            <h6><strong>Annette Black</strong>26 Apr, 2021</h6>
                                            <p>In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.</p>
                                          </div>
                                </div>
                                <div className="nttg"></div>
                                <div className="SingleBlog-6-1 d-flex ">
                                          <img src="./image/ellipse 8.png" alt="img" />
                                          <div className="SingleBlog-6-2">
                                            <h6><strong>Annette Black</strong>26 Apr, 2021</h6>
                                            <p>In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.</p>
                                          </div>
                                </div>
                                <a href="#">Load More</a>
                                </div>
                            </div>
                        </div>
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


            <Footer />
        </>
    )
}

export default SingleBlog