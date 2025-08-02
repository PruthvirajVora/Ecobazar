import React from 'react'

function Navbar4() {
  return (
    <>
    <div className="selection-navbar-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="NAVBA-sec-1 d-flex align-items-center">
                <i class="fa-solid fa-location-dot"></i>
                <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="NAVBA-sec-2 d-flex align-items-center justify-content-end">
                <div class="btn-group">
                  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Eng
                  </button>
                  <ul class="dropdown-menu">
                    ...
                  </ul>
                </div>
                <div class="btn-group">
                  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    USD
                  </button>
                  <ul class="dropdown-menu">
                    ...
                  </ul>
                </div>
                <div className="njf"></div>
                <p>Sign In
                  /
                  Sign Up</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg ">
  <div class="container">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Home
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Shop
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Pages
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blog
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Aboutus</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contactus</a>
        </li>
       
      </ul>
      <div className="yurw">
        <img src="./image/Logo (1).png" alt="img" />
      </div>

      <div className="yuree d-flex align-items-center">     
         <div className="yu d-flex align-items-center">
      <i class="fa-solid fa-phone-volume"></i>
      <p>(219) 555-0114</p>
      </div>
      <div className="icon">
      <i class="fa-solid fa-magnifying-glass"></i>
      <i class="fa-regular fa-heart"></i>
      <button type="button" class="btn btn-primary position-relative">
                <i class="fa-solid fa-cart-shopping text-light"></i>
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    2+
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </button>
                <i class="fa-regular fa-user"></i>
      </div>
      </div>

    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar4