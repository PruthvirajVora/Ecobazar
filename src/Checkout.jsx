import React from 'react'
import Navbar5 from './Navbar5'
import { Link } from "react-router-dom";
import Footer from './Footer';

function Checkout() {
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




            <div className="check-out-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-12">
                            <div className="check-1">
                                <h1>Billing Information</h1>
                            </div>
                            <div className="check-2 d-flex align-items-center">
                                <div className="check-2-1">
                                    <label >First name</label>
                                    <input placeholder='Your first name' />
                                </div>
                                <div className="check-2-1">
                                    <label >Last name</label>
                                    <input placeholder=' Your Last name' />
                                </div>
                                <div className="check-2-1">
                                    <label >Company Name (optional)</label>
                                    <input placeholder='Company Name' />
                                </div>
                            </div>
                            <div className="check-3">
                                <div className="check-2-1">
                                    <label >Street Address</label>
                                    <input placeholder='Email' />
                                </div>
                            </div>
                            <div className="check-4 d-flex align-items-center justify-content-between ">
                                <div className="lca d-flex align-items-center justify-content-start">
                                    <div className="check-4-1">
                                        <label htmlFor="">Country / Region</label>
                                        <select id="cars">
                                            <option value="volvo">Select</option>
                                            <option value="saab">India</option>
                                            <option value="opel">China</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                    <div className="check-4-2">
                                        <label htmlFor="">States</label>
                                        <select id="cars">
                                            <option value="volvo">States</option>
                                            <option value="saab">India</option>
                                            <option value="opel">China</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="check-2-1-1">
                                    <label >Zip Code</label>
                                    <input placeholder='Zip Code' />
                                </div>
                            </div>
                            <div className="check-5 d-flex align-items-center">
                                <div className="check-2-1-1">
                                    <label >Email</label>
                                    <input placeholder='Email Address' />
                                </div>
                                <div className="check-2-1-1">
                                    <label >Phone</label>
                                    <input placeholder='Phone number' />
                                </div>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Ship to a different address
                                </label>
                            </div>
                            <div className="nttg"></div>
                            <div className="check-6">
                                <h4>Additional Info</h4>
                                <p>Order Notes (Optional)</p>
                                <div className="form-floating">
                                    <textarea
                                        className="form-control"
                                        placeholder="Leave a comment here"
                                        id="floatingTextarea2"
                                        style={{ height: "100px" }}
                                    ></textarea>
                                    <label htmlFor="floatingTextarea2">Notes about your order, e.g. special notes for deliverys</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-12">
                            <div className="check-7">
                                <h1>Order Summery</h1>
                                <div className="check-8 d-flex align-items-center justify-content-between">
                                    <div className="ctye  yrue d-flex align-items-center">
                                        <img src="./image/Image (63).png" alt="img" />
                                        <p>Green Capsicum</p>
                                    </div>
                                    <p>$70.00</p>
                                </div>
                                <div className="check-8 d-flex align-items-center justify-content-between">
                                    <div className="ctye  yrue d-flex align-items-center">
                                        <img src="./image/Image (63).png" alt="img" />
                                        <p>Green Capsicum</p>
                                    </div>
                                    <p>$70.00</p>
                                </div>
                                <div className="nttg"></div>
                                <div className="check-8 d-flex align-items-center justify-content-between">
                                    <div className="ctye  yrue d-flex align-items-center">

                                        <p>Subtotal:</p>
                                    </div>
                                    <p>$84.00</p>
                                </div>
                                <div className="nttg"></div>
                                <div className="check-8 d-flex align-items-center justify-content-between">
                                    <div className="ctye  yrue d-flex align-items-center">

                                        <p>Shipping:</p>
                                    </div>
                                    <p>$Free</p>
                                </div>
                                <div className="nttg"></div>
                                <div className="Card-tota-1 d-flex align-items-center justify-content-between">
                                    <p>Total:</p>
                                    <strong>$84.00</strong>
                                </div>
                                <h3>Payment Method</h3>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                    Cash on Delivery
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                    Paypal
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                    Amazon Pay
                                    </label>
                                </div>
                                <button>Place Order</button>
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

            <Footer />
        </>
    )
}

export default Checkout