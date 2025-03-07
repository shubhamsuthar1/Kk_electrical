import React from "react";
import { Carousel } from "react-bootstrap"; // Import the Carousel component
import { Link } from "react-router-dom"; // Import Link for navigation
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <Carousel>
          <Carousel.Item>
            <div className="card bg-dark text-white border-0 mx-3">
              <img
                className="card-img img-fluid"
                src="./assets/main.png.jpg"
                alt="Card"
                height={500}
              />
              <div className="card-img-overlay d-flex align-items-center"></div>
            </div>
          </Carousel.Item>
          {/* Add more Carousel.Items for additional images */}
          <Carousel.Item>
            <div className="card bg-dark text-white border-0 mx-3">
              <img
                className="card-img img-fluid"
                src="./assets/final poster_form.jpg"
                alt="Card"
                height={500}
              />
              <div className="card-img-overlay d-flex align-items-center"></div>
            </div>
          </Carousel.Item>
          {/* Add as many items as needed */}
        </Carousel>
      </div>

      <div className="container-fluid my-3 py-3">
        <div className="row">
          <div className="col-12 ">
            <h2 className="display-5 text-center">Our Services</h2>
            <hr />
          </div>
        </div>

        {/* Display first 4 services */}
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card text-center">
              <div className="card-body">
                <i className="fas fa-tools fa-3x text-primary mb-3"></i>
                <h5 className="card-title">Home Wiring</h5>
                <p className="card-text">Etc</p>
              </div>
              <div className="text-center mb-4">
                <button className="btn btn-outline-primary">
                  Call For Inquire
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card text-center">
              <div className="card-body">
                <i className="fas fa-cog fa-3x text-primary mb-3"></i>
                <h5 className="card-title">Home Wiring</h5>
                <p className="card-text">Etc</p>
              </div>
              <div className="text-center mb-4">
                <button className="btn btn-outline-primary">
                  Call For Inquire
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card text-center">
              <div className="card-body">
                <i className="fas fa-tools fa-3x text-primary mb-3"></i>
                <h5 className="card-title">Home Wiring</h5>
                <p className="card-text">Etc</p>
              </div>
              <div className="text-center mb-4">
                <button className="btn btn-outline-primary">
                  Call For Inquire
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Go to service page button */}
        <div className="text-center mt-4">
          <Link to="/service" className="btn btn-outline-primary">
            Go to Service Page
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
