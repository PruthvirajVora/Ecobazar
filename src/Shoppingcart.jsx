import React from 'react'
import Navbar5 from './Navbar5'
import { Link } from "react-router-dom";
import Footer from './Footer';

function Shoppingcart() {
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
    <h1>Shopping Cart</h1>
</div>

<div className="Shopping-cart-1">
    <div className="container p-0">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
            <table class="table">
  <thead>
    <tr>
   
      <th scope="col">Product</th>
      <th scope="col">price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Subtotal</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
    
    <td>
        <div className="ctye  yrue d-flex align-items-center">
            <img src="./image/Image (63).png" alt="img" />
            <p>Green Capsicum</p>
        </div>
    </td>
      <td>$14.00</td>
      <td><img src="./image/Quantity.png" alt="img" /></td>
      <td>
        <div className="lsoerw d-flex align-items-center justify-content-between">
            <p>$70.00</p>
            <img src="./image/Close.png" alt="img" />
        </div>
      </td>
    </tr>
    <tr>
    
    <td>
        <div className="ctye  yrue d-flex align-items-center">
            <img src="./image/Image (63).png" alt="img" />
            <p>Green Capsicum</p>
        </div>
    </td>
      <td>$14.00</td>
      <td><img src="./image/Quantity.png" alt="img" /></td>
      <td>
        <div className="lsoerw d-flex align-items-center justify-content-between">
            <p>$70.00</p>
            <img src="./image/Close.png" alt="img" />
        </div>
      </td>
    </tr>
    <tr>
    
    <td>
        <div className="or">
            <button>Return to shop
           </button>
        </div>
    </td>
      <td></td>
      <td></td>
      <td>
        <div className="or">
            <button> Update Cart</button>
        </div>
      </td>
    </tr>
   
  </tbody>
</table>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
                <div className="Card-total">
                    <h1>Card total</h1>
                    <div className="Card-tota-1 d-flex align-items-center justify-content-between">
                        <p>Subtotal:</p>
                        <p>$84.00</p>
                    </div>
                    <div className="nttg"></div>
                    <div className="Card-tota-1 d-flex align-items-center justify-content-between">
                        <p>Shiping</p>
                        <p>Free</p>
                    </div>
                    <div className="nttg"></div>
                    <div className="Card-tota-1 d-flex align-items-center justify-content-between">
                        <p>Total:</p>
                        <strong>$84.00</strong>
                    </div>
                   <button>
                   Proceed to checkout</button>
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

export default Shoppingcart