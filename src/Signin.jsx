import React from 'react'
import Navbar5 from './Navbar5'
import { Link } from "react-router-dom";
import Footer from './Footer';

function Signin() {
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



            <div className="Signin">
                <div className="container">
                    <div className="Signin-1">
                        <h1>Sign In</h1>
                        <div className="Signin-2">
                            <input type="text" placeholder='Email' />
                        </div>

                        <div className="srs">
                            <input type="text" placeholder='Password' />
                            <i class="fa-solid fa-eye"></i>
                        </div>
                        <div className="Sihs d-flex align-items-center justify-content-between">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled />
                                <label class="form-check-label" for="defaultCheck2">
                                Remember me
                                </label>
                            </div>
                            <p>Forget Password</p>
                        </div>
                        <button>Login</button>
                        <p>Don’t have account?
                        <strong>Register</strong></p>
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
            <Footer />
        </>
    )
}

export default Signin