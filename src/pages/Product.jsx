import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import data from '../api/product.json';  // Import the local JSON data
import { Footer, Navbar } from "../components";
import toast from 'react-hot-toast';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // Changed initial state to null for better condition handling
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state set to true initially

  const dispatch = useDispatch();

  const addProductToCart = (product) => {
    dispatch(addCart(product));  // Dispatch addCart action to Redux
    toast.success('Added to cart');
  };

  useEffect(() => {
    // Simulate fetching the product from the local product data
    const foundProduct = data.find((item) => item.id === Number(id)); // Find the product by ID

    if (foundProduct) {
      setProduct(foundProduct); // Set the product when found
      const similar = data.filter((item) => item.category === foundProduct.category && item.id !== foundProduct.id);
      setSimilarProducts(similar); // Find similar products based on category
    }

    setLoading(false); // Once the product is set, stop loading
  }, [id]); // Re-run whenever the `id` changes

  const Loading = () => {
    return (
      <div className="container-fluid my-5 py-2">
        <div className="row">
          <div className="col-md-6 py-3">
            <Skeleton height={400} width={400} />
          </div>
          <div className="col-md-6 py-5">
            <Skeleton height={30} width={250} />
            <Skeleton height={90} />
            <Skeleton height={40} width={70} />
            <Skeleton height={50} width={110} />
            <Skeleton height={120} />
            <Skeleton height={40} width={110} inline={true} />
            <Skeleton className="mx-3" height={40} width={110} />
          </div>
        </div>
      </div>
    );
  };

  const ShowProduct = () => {
    return (
      <div className="container-fluid my-5 py-2">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-3 py-3">
            <img
              className="img-fluid"
              src={product.image}
              alt={product.alt}
              width="400px"
              height="400px"
            />
          </div>
          <div className="col-md-6 py-5">
            <h4 className="text-uppercase text-muted">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="lead">
              {product.rating && product.rating.rate}{" "}
              <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6 my-4">${product.price}</h3>
            <p className="lead">{product.description}</p>
            <button
              className="btn btn-outline-primary"
              onClick={() => addProductToCart(product)}
            >
              Add to Cart
            </button>
            <Link to="/cart" className="btn btn-primary mx-3">
              Go to Cart
            </Link>
          </div>
        </div>
        <div className="row">
          <ShowProductInfo /> {/* This will display the product info */}
        </div>
      </div>
      
    );
  };
  const ShowProductInfo = () => {
    if (!product?.productInfo) return null;
    const { features, warranty, materials, dimensions } = product.productInfo;

    return (
      <div className="container py-5">
        <h3>Product Details</h3>
        <div className="row">
          <div className="col-6">
            <h5>Features:</h5>
            <p>{features}</p>
          </div>
          <div className="col-6">
            <h5>Warranty:</h5>
            <p>{warranty}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h5>Materials:</h5>
            <p>{materials}</p>
          </div>
          <div className="col-6">
            <h5>Dimensions:</h5>
            <p>{dimensions}</p>
          </div>
        </div>
      </div>
    );
  };

  const Loading2 = () => {
    return (
      <div className="my-4 py-4">
        <div className="d-flex">
          <div className="mx-4">
            <Skeleton height={400} width={250} />
          </div>
          <div className="mx-4">
            <Skeleton height={400} width={250} />
          </div>
          <div className="mx-4">
            <Skeleton height={400} width={250} />
          </div>
          <div className="mx-4">
            <Skeleton height={400} width={250} />
          </div>
        </div>
      </div>
    );
  };

  const ShowSimilarProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      setProducts(data); // Using static data for now
    }, []);

    return (
      <div className="py-4 my-4">
        <div className="d-flex flex-wrap justify-content-start">
          {products.map((item) => (
            <div key={item.id} className="card mx-4 text-center mb-4" style={{ width: '18rem' }}>
              <img
                className="card-img-top p-3"
                src={item.image}
                alt={item.alt}
                height={250}
                width={300}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {item.title.length > 15 ? item.title.substring(0, 15) + '...' : item.title}
                </h5>
              </div>
              <div className="card-body d-flex justify-content-center">
                <Link to={`/product/${item.id}`} className="btn btn-primary m-1">
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
            <h2>You may also like</h2>
            <Marquee pauseOnHover={true} pauseOnClick={true} speed={50}>
              {loading ? <Loading2 /> : <ShowSimilarProduct />}
            </Marquee>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
