import React, { useState } from "react";


function Navbar3() {
  const [isOpen, setIsOpen] = useState(false);
   return (
     <>
 
 <div className="selection-navbar-1 bg-black">
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
 
       <div className="Nav-secetion-2">
         <div className="container">
           <div className="row align-items-center">
             <div className="col-lg-4 col-md-12 col-12">
               <div className="Nav-sec2-1">
                 <img src="./image/Logo.png" alt="img" />
               </div>
             </div>
             <div className="col-lg-4 col-md-12 col-12">
               <div className="Nav-sec2-2 d-flex align-items-center justify-content-between  ">
                 <div className="Nav-sec2-2-in">
                 <i class="fa-solid fa-magnifying-glass"></i>
                 <input type="text" placeholder='Search' />
                 </div>
                 <a href="#">Search</a>
               </div>
             </div>
             <div className="col-lg-4 col-md-12 col-12">
             
               <div className="yu d-flex align-items-center  justify-content-end">
       <i  class="fa-solid fa-phone-volume text-black"></i>
       <p className="text-black">(219) 555-0114</p>
       </div>
             </div>
 
           </div>
         </div>
       </div>
       <nav class="navbar navbar-expand-lg navbar3">
   <div class="container">
   <div className=" erur">
       <button
         className="category-menu w-100 btn btn-primary"
         onClick={() => setIsOpen(!isOpen)}
       >
         <i className="fas fa-bars"></i> All Categories <i class="fa-solid fa-chevron-down"></i>
       </button>
 
       {isOpen && (
         <div className="mt-2">
           <ul className="list-group">
             <li className="list-group-item"> Fresh Fruit</li>
             <li className="list-group-item"> Vegetables</li>
             <li className="list-group-item">River Fish</li>
             <li className="list-group-item">Chicken & Meat</li>
             <li className="list-group-item">Chicken & Meat</li>
             <li className="list-group-item">Drink & Water</li>
             <li className="list-group-item">Yogurt & Ice Cream</li>
             <li className="list-group-item">Butter & Cream</li>
             <li className="list-group-item">Cooking</li>
           </ul>
         </div>
       )}
       </div>
   
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
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
       <div className="Nav-sec2-3 d-flex align-items-center justify-content-end">
                 <i class="fa-regular fa-heart"></i>
                 <div className="njf"></div>
                 <button type="button" class="btn btn-primary position-relative">
                 <i class="fa-solid fa-cart-shopping text-light"></i>
                   <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                     2+
                     <span class="visually-hidden">unread messages</span>
                   </span>
                 </button>
                 <div className="tyre ">
                   <p>Shopping cart</p>
                   <h4>$57.00</h4>
                 </div>
               </div>
     </div>
   </div>
 </nav>
    
 
     
     </>
  )
}

export default Navbar3