import React from 'react'
import { Link } from "react-router-dom";
import Navbar5 from './Navbar5'
import Footer from './Footer';

function Wish() {
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


            <div className="Wish text-center">
                <h1>My Wishlist</h1>
            </div>



<div className="wish-section-1">
    <div className="container">
    <table class="table">
  <thead>
    <tr>
   
      <th scope="col">Product</th>
      <th scope="col">price</th>
      <th scope="col">Stock Status</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
    
    <td>
        <div className="ctye d-flex align-items-center">
            <img src="./image/Image (63).png" alt="img" />
            <p>Green Capsicum</p>
        </div>
    </td>
      <td>$14.99
      <strong>$20.99</strong></td>
      <td><span>In Stock</span></td>
      <td><img src="./image/Action.png" alt="img" /></td>
    </tr>
    <tr>
    <td>
        <div className="ctye d-flex align-items-center">
            <img src="./image/Image (63).png" alt="img" />
            <p>Green Capsicum</p>
        </div>
    </td>
      <td>$14.99
      <strong>$20.99</strong></td>
      <td><span>In Stock</span></td>
      <td><img src="./image/Action.png" alt="img" /></td>
    </tr>
    <tr>
    <td>
        <div className="ctye d-flex align-items-center">
            <img src="./image/Image (63).png" alt="img" />
            <p>Green Capsicum</p>
        </div>
    </td>
      <td>$14.99
      <strong>$20.99</strong></td>
      <td><span>In Stock</span></td>
      <td><img src="./image/Action.png" alt="img" /></td>
    </tr>
    <tr>
   
    <td colspan="2">
        <div className="rittw d-flex align-items-center">
            <h6>Share</h6>
            <img src="./image/Share.png" alt="img" />
        </div>
    </td>
    </tr>
  </tbody>
</table>
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

export default Wish