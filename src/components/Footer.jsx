import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
// import logo from "../../public/image/logo-main.png"


const Footer = () => {
  return (
    <>
      
    <footer className="bg-light text-dark py-5 shadow">
      <div className="container-fluid">
        <div className="row d-flex justify-content-between">
          {/* Logo & Description */}
          <div className="col-md-4">
            <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
              <img src="./image/logo-main.png" alt="logo" width="30" />
              <span className="ms-3 h5 fw-bold">KK Electrical</span>
            </a>
            <p className="mt-3" style={{ maxWidth: "250px" }}>
              We create high-quality resources and tools to aid developers during their projects.
            </p>
            <div className="d-flex mt-4">
              <a href="#" className="btn btn-primary me-2"><FaFacebookF /></a>
              <a href="#" className="btn btn-primary me-2"><FaTwitter /></a>
              <a href="#" className="btn btn-primary"><FaInstagram /></a>
            </div>
          </div>
          {/* Products Section */}
          <div className="col-md-4">
            <h5 className="fw-bold">Products</h5>
            <ul className="list-unstyled">
             <li className="nav-item">
                                             <NavLink className="nav-link" to="/">
                                                 Home
                                             </NavLink>
                                         </li>
                                         <li className="nav-item">
                                             <NavLink className="nav-link" to="/Service">
                                                 Services
                                             </NavLink>
                                         </li>
                                         <li className="nav-item">
                                             <NavLink className="nav-link" to="/ProductSection">
                                                 Products
                                             </NavLink>
                                         </li>
                                         <li className="nav-item">
                                             <NavLink className="nav-link" to="/Customercare">
                                                 Customer care
                                             </NavLink>
                                         </li>
                                         <li className="nav-item">
                                             <NavLink className="nav-link" to="/about">
                                                 About Us
                                             </NavLink>
                                         </li>
                                         <li className="nav-item">
                                             <NavLink className="nav-link" to="/contact">
                                                 Contact
                                             </NavLink>
                                         </li>
            </ul>
          </div>
          <div className="col-md-4">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74842625824!2d72.41492689163259!3d23.02047410311559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1740489358990!5m2!1sen!2sin"
              width="80%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
