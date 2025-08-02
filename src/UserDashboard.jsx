import React from 'react'
import Navbar5 from './Navbar5'
import { Link } from "react-router-dom";
import Footer from './Footer';

function UserDashboard() {
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

<div className="Dashboard">
    <div className="container">
    <div class="d-flex align-items-start">
  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Dashboard</button>
    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Order History</button>
    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Wishlist</button>
    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
    <button class="nav-link" id="v-pills-Enable-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Enable" type="button" role="tab" aria-controls="v-pills-Enable" aria-selected="false">Logout</button>
  </div>
  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
        <div className="profilr">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="Profile-1 text-center">
                            <img src="./image/Ellipse 5.png" alt="img" />
                            <h4>Dianne Russell</h4>
                            <p>Customer</p>
                            <h6>Edit Profile</h6>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="profile-2">
                            <p>Billing Address</p>
                            <h5>Dainne Russell</h5>
                            <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                            <p>dainne.ressell@gmail.com</p>
                            <p>(671) 555-0110</p>
                            <h6>Edit Address</h6>
                        </div>
                    </div>
                </div>
                <div className="profile-3">
                <table class="table">
  <thead>
    <tr>
      <td scope="col">Recet Order History</td>
      <td scope="col"></td>
      <td scope="col"></td>
      <td scope="col"></td>
      <td scope="col"><a href="#">View All</a></td>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th>Order ID</th>
      <th>Date</th>
      <th>Otto</th>
      <th>Total</th>
      <th>Status</th>
      <th></th>
    </tr>
    <tr>
      <td >#738</td>
      <td>8 Sep, 2020</td>
      <td>$135.00 (5 Products)</td>
      <td>Processing</td>
      <td> <a href="#">View detail</a></td>
    </tr>
    <tr>
    <td >#703</td>
      <td>24 May, 2020</td>
      <td>$25.00 (1 Product)</td>
      <td>on the way</td>
      <td> <a href="#">View detail</a></td>
    </tr>
    <tr>
    <td >#130</td>
      <td>22 Oct, 2020</td>
      <td>$250.00 (4 Products)</td>
      <td>Completed</td>
      <td> <a href="#">View detail</a></td>
    </tr>
    <tr>
    <td >#561</td>
      <td>1 Feb, 2020</td>
      <td>$35.00 (1 Products)</td>
      <td>Completed</td>
      <td> <a href="#">View detail</a></td>
    </tr>
    <tr>
    <td >#536</td>
      <td>21 Sep, 2020</td>
      <td>$578.00 (13 Products)</td>
      <td>Completed</td>
      <td> <a href="#">View detail</a></td>
    </tr>
    <tr>
    <td >#492</td>
      <td>22 Oct, 2020</td>
      <td>$345.00 (7 Products)</td>
      <td>Completed</td>
      <td> <a href="#">View detail</a></td>
    </tr>
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
    <div className="profile-3">
                <table class="table">
  <thead>
    <tr>
      <td scope="col">Order History</td>
      <td scope="col"></td>
      <td scope="col"></td>
      <td scope="col"></td>
      <td scope="col"><a href="#"></a></td>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th>Order ID</th>
      <th>Date</th>
      <th>Otto</th>
      <th>Total</th>
      <th>Status</th>
      <th></th>
    </tr>
    <tr>
      <td >#738</td>
      <td>8 Sep, 2020</td>
      <td>$135.00 (5 Products)</td>
      <td>Processing</td>
      <td> <a href="#">View detail</a></td>
    </tr>
    <tr>
    <td >#703</td>
      <td>24 May, 2020</td>
      <td>$25.00 (1 Product)</td>
      <td>on the way</td>
      <td> <a href="#">View detail</a></td>
    </tr>
    <tr>
    <td >#130</td>
      <td>22 Oct, 2020</td>
      <td>$250.00 (4 Products)</td>
      <td>Completed</td>
      <td> <a href="#">View detail</a></td>
    </tr>
    <tr>
    <td >#561</td>
      <td>1 Feb, 2020</td>
      <td>$35.00 (1 Products)</td>
      <td>Completed</td>
      <td> <a href="#">View detail</a></td>
    </tr>
    <tr>
    <td >#536</td>
      <td>21 Sep, 2020</td>
      <td>$578.00 (13 Products)</td>
      <td>Completed</td>
      <td> <a href="#">View detail</a></td>
    </tr>
    <tr>
    <td >#492</td>
      <td>22 Oct, 2020</td>
      <td>$345.00 (7 Products)</td>
      <td>Completed</td>
      <td> <a href="#">View detail</a></td>
    </tr>
    <tr>
    <td >#492</td>
      <td>22 Oct, 2020</td>
      <td>$345.00 (7 Products)</td>
      <td>Completed</td>
      <td> <a href="#">View detail</a></td>
    </tr>
    <tr>
    <td >#492</td>
      <td>22 Oct, 2020</td>
      <td>$345.00 (7 Products)</td>
      <td>Completed</td>
      <td> <a href="#">View detail</a></td>
    </tr>
    <tr>
    <td >#492</td>
      <td>22 Oct, 2020</td>
      <td>$345.00 (7 Products)</td>
      <td>Completed</td>
      <td> <a href="#">View detail</a></td>
    </tr>
    <tr>
    <td >#492</td>
      <td>22 Oct, 2020</td>
      <td>$345.00 (7 Products)</td>
      <td>Completed</td>
      <td> <a href="#">View detail</a></td>
    </tr>
    <tr>
    <td >#492</td>
      <td>22 Oct, 2020</td>
      <td>$345.00 (7 Products)</td>
      <td>Completed</td>
      <td> <a href="#">View detail</a></td>
    </tr>
  </tbody>
</table>
                </div>
    </div>
    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
        <div className="setting">
            <div className="Setting-main">
                <h3>Account Settings</h3>
                <div className="nttg"></div>
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-12">
                        <div className="Setting-main-1">
                            <label >First name</label>
                            <input type="text" placeholder='Dianne' />
                            <label >Last Name</label>
                            <input type="text" placeholder='Russell' />
                            <label >Email</label>
                            <input type="text" placeholder='dianne.russell@gmail.com' />
                            <label >Phone Number</label>
                            <input type="text" placeholder='(603) 555-0123' />
                            <button>Save Changes</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="Setting-main-2">
                            <img src="./image/Image (71).png" alt="img" />
                            <button>Chose Image</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="Billing-address">
            <div className="Billing-1">
                <h3>Billing Address</h3>
                <div className="nttg"></div>
                <div className="Billing-2 d-flex align-items-center justify-content-between">
                    <div className="iw1">
                        <label htmlFor="">First name</label>
                        <input type="text" name="" placeholder='Dianne' />
                    </div>
                    <div className="iw1">
                        <label htmlFor="">Last name</label>
                        <input type="text" name="" placeholder='Dianne' />
                    </div>
                    <div className="iw1">
                        <label htmlFor="">Company Name (optional)</label>
                        <input type="text" name="" placeholder='Zakirsoft' />
                    </div>
                </div>
                    <div className="irrf1">
                        <label htmlFor="">Street Address</label>
                        <input type="text" name="" id="" placeholder='4140 Par|' />
                    </div>
                    <div className="Billing-2 d-flex align-items-center justify-content-between">
                    <div className="iw1">
                        <label htmlFor="">Country / Region</label>
                        <select class="form-select" aria-label="Default select example">
  <option selected>United States</option>
  <option value="1">United States</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
                    </div>
                    <div className="iw1">
                        <label htmlFor="">States</label>
                        <select class="form-select" aria-label="Default select example">
  <option selected>Washington DC</option>
  <option value="1">Washington DC</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
                    </div>
                    <div className="iw1">
                        <label htmlFor="">Company Name (optional)</label>
                        <input type="text" name="" placeholder='20033' />
                    </div>
                </div>
                <div className="Billing-2 d-flex align-items-center justify-content-between">
                    <div className="iw1">
                        <label htmlFor="">Email</label>
                        <input type="text" name="" placeholder='dianne.russell@gmail.com' />
                    </div>
                    <div className="iw1">
                        <label htmlFor="">Phone</label>
                        <input type="text" name="" placeholder='(603) 555-0123' />
                    </div>
                </div>
                <button>Save Changes</button>
            </div>
        </div>
        <div className="Changes-1">
            <h3>Change Password</h3>
            <div className="nttg"></div>
            <div className="irrf1 position-relative ">
                        <label htmlFor="">Current Password</label>
                        <input type="text" name="" id="" placeholder='Password' />
                        <i class="fa-solid fa-eye"></i>
                    </div>
                <div className="rkrgf d-flex align-items-center ">
                    <div className="rkt-1">
                        <label htmlFor="">New Password Password</label>
                        <input type="text" name="" id="" placeholder='Password' />
                        <i class="fa-solid fa-eye"></i>
                    </div>
                    <div className="rkt-1">
                        <label htmlFor="">Confirm Password</label>
                        <input type="text" name="" id="" placeholder='Password' />
                        <i class="fa-solid fa-eye"></i>
                    </div>
                </div>
                <button>Change Password</button>
        </div>
    </div>
    <div class="tab-pane fade" id="v-pills-Enable" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">...</div>
  </div>
</div>
    </div>
</div>

<Footer />
  </>
  )
}

export default UserDashboard