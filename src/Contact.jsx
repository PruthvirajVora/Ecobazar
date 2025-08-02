import React from 'react'
import Navbar5 from './Navbar5'
import { Link } from "react-router-dom";
import Footer from './Footer';

function Contact() {
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


<div className="contact">
    <div className="container">
        <div className="eerrewww">
            <div className="row">
                <div className="col-lg-4 col-md-12 col-12">
                    <div className="Contact-1">
                        <div className="Contact-1-1">
                            <img src="./image/Map Pin.png" alt="img" />
                            <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
                        </div>
                        <div className="nttg"></div>
                        <div className="Contact-1-1">
                            <img src="./image/Email.png" alt="img" />
                            <p>Proxy@gmail.com</p>
                            <p>Help.proxy@gmail.com</p>
                        </div>
                        <div className="nttg"></div>
                        <div className="Contact-1-1">
                            <img src="./image/PhoneCall (1).png" alt="img" />
                            <p>(219) 555-0114</p>
                            <p>(164) 333-0487</p>
                        </div>
                      
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 col-12">
                    <div className="Contact-2">
                        <h1>Just Say Hello!</h1>
                        <p>Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.</p>
                        <div className="Contact-2-1 d-flex align-items-center">
                            <div className="Contact-2-1in">
                                <input type="text"placeholder='Template Cookie' />
                            </div>
                            <div className="Contact-2-1in">
                                <input type="text"placeholder='zakirsoft@gmail.com' />
                            </div>
                        </div>
                        <div className="Contact-2-1in-1">
                                <input type="text"placeholder='Hello' />
                            </div>
                        <div className="Contact-2-1in-2">
                                <input type="text"placeholder='Subjects' />
                            </div>
                            <button>Send messgae</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



<div className="contact1">
<iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.407866740527!2d72.5051613746875!3d23.045503879157685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84ac539ac151%3A0x6acae7cc1aec8366!2sExcelsior%20Technologies%C2%AE!5e0!3m2!1sen!2sin!4v1742812263758!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
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

export default Contact