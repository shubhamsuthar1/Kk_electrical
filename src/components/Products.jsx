import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import toast from 'react-hot-toast';
import data from '../api/product.json';  // Importing local JSON file
import { Link, useLocation } from "react-router-dom";  // Import useLocation

const Products = () => {
  const [filter, setFilter] = useState(data); // Directly using the imported JSON
  const dispatch = useDispatch();
  const location = useLocation(); // Get the current location

  const addProductToCart = (product) => {
    dispatch(addCart(product));  // Dispatch addCart action to Redux
    toast.success('Added to cart');
  };

  const filterProducts = (category) => {
    const filtered = data.filter((product) => product.category === category);
    setFilter(filtered);
  };

  const renderProductList = () => {
    if (filter.length === 0) {
      return <p>No products found for this category.</p>; // Show message when no products are found
    }
    return filter.map((product) => (
      <div key={product.id} className="col-md-4 col-sm-6 col-12 col-lg-3 mb-4">
        <div className="card text-center h-100">
          <img
            src={product.image}
            alt={product.alt}
            className="card-img-top p-3"
            height={250}
          />
          <div className="card-body">
            <h5 className="card-title">
              {product.title.length > 12 ? `${product.title.substring(0, 12)}...` : product.title}
            </h5>
            <p className="card-text">{product.category.substring(0, 90)}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item lead">$ {product.price}</li>
          </ul>
          <div className="card-body d-flex justify-content-between">
            <Link
              to={"/product/" + product.id}
              className="btn btn-primary m-1"
            >
              Buy Now
            </Link>
            <button
              onClick={() => addProductToCart(product)}
              className="btn btn-primary m-1"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container-fluid my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center">Latest Products</h2>
          <hr />
        </div>
      </div>

      <div className="buttons text-center py-5">
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>
          All
        </button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProducts('cromton')}>
          cromton
        </button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProducts('syska')}>
          syska
        </button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProducts('remini')}>
          remini
        </button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProducts('vgard')}>
          v gard
        </button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProducts('electronics')}>
          Electronics
        </button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProducts('bajaj')}>
          bajaj
        </button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProducts('samsung')}>
          samsung
        </button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProducts('el')}>
          el
        </button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProducts('demo')}>
          demo
        </button>
      </div>

      <div className="row justify-content-center">
        {renderProductList()}
      </div>

      {/* Conditionally Render Button Only on Home Page */}
      {location.pathname === "/" && (
        <div className="text-center mt-4">
          <Link to="/ProductSection" className="btn btn-outline-primary">
            Go to Product Page
          </Link>
        </div>
      )}
    </div>
  );
};

export default Products;
