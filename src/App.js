import Navbar from './Navbar';
import './App.css';
import './Responsive.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Home1 from './Home1';
import Home2 from './Home2';
import Home3 from './Home3';
import Home4 from './Home4';
import Shop1 from './Shop1';
import Shop2 from './Shop2';
import ProductDetail from './ProductDetail';
import Wish from './Wish';
import Shoppingcart from './Shoppingcart';
import Checkout from './Checkout';
import BlogList from './Bloglist';
import SingleBlog from './SingleBlog';
import About from './About';
import Contact from './Contact';
import Signin from './Signin';
import Create from './Create';
import Dashboard from './UserDashboard';
import FAQ from './FAQ';
import Error from './Error';

function App() {
  return (
  <>
 <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home1" element={<Home1/>} />
      <Route path="/Home2" element={<Home2/>} />
      <Route path="/Home3" element={<Home3/>} />
      <Route path="/Home4" element={<Home4/>} />
      <Route path="/Shop1" element={<Shop1/>} />
      <Route path="/Shop2" element={<Shop2/>} />
      <Route path="/ProductDetail" element={<ProductDetail/>} />
      <Route path="/Wish" element={<Wish/>} />
      <Route path="/Shopping" element={<Shoppingcart/>} />
      <Route path="/Checkout" element={<Checkout/>} />
      <Route path="/Bloglist" element={<BlogList/>} />
      <Route path="/SingleBlog" element={<SingleBlog/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Signin" element={<Signin/>} />
      <Route path="/Create" element={<Create/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/FAQ" element={<FAQ/>} />
      <Route path="/Error" element={<Error/>} />
      
    </Routes>
  </>
  );
}

export default App;
