import React, { useState, useEffect, useRef } from "react";
import { Footer, Navbar } from "../components";
import { Search } from "../pages";
import { Link } from "react-router-dom";
import { gsap } from "gsap"; // Import GSAP
import ScrollTrigger from "gsap/ScrollTrigger"; // Import ScrollTrigger

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const products = [
  { name: "Wiring", img: "img/Wiring image 01.webp", alt: "Wiring image for electrical installations" },
  { name: "Panel Light", img: "img/panel-light-500x500.webp", alt: "Panel Light for indoor use" },
  { name: "Water", img: "img/solar_water_pumps-500x500 images.webp", alt: "Solar water pump for efficient water management" },
  { name: "MCB Switch", img: "img/MCBs images.webp", alt: "MCB Switch for electrical safety" },
  { name: "Water Auto Level", img: "img/Water Auto Level images.webp", alt: "Water auto level controller" },
  { name: "Inverter", img: "img/Inverter images.webp", alt: "Inverter for power backup and energy efficiency" },
  { name: "Inverter Battery", img: "img/Inverter Battery images.webp", alt: "Inverter battery for continuous power supply" }
];

const Home = [
  { name: "Fan", img: "img/fan main.webp", alt: "High-speed Fan for cooling" },
  { name: "Cooler", img: "img/cooler main.webp", alt: "Air cooler for home cooling" },
  { name: "Panel Light", img: "img/panel-light-500x500.webp", alt: "Panel Light for energy-efficient lighting" },
  { name: "Water", img: "img/solar_water_pumps-500x500 images.webp", alt: "Solar water pump for sustainable water use" },
  { name: "MCB Switch", img: "img/MCBs images.webp", alt: "MCB Switch for electrical protection" },
  { name: "Water Auto Level", img: "img/Water Auto Level images.webp", alt: "Automatic water level controller for tanks" },
  { name: "Inverter", img: "img/Inverter images.webp", alt: "Inverter for backup power" },
  { name: "Inverter Battery", img: "img/Inverter Battery images.webp", alt: "Battery for inverter system" }
];

const ProductCard = ({ product, index }) => {
  const cardRef = useRef(null); // Create a ref for each product card

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 }, // Initial state: hidden and slightly moved down
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%", // Start the animation when 80% of the card is visible in the viewport
          end: "top 20%", // End when the top of the card is at 20% of the viewport
          toggleActions: "play none none none", // Only play animation once
          once: true // Only trigger the animation once
        }
      }
    );
  }, []);

  return (
    <div className="col-lg-2 col-md-6 col-sm-12 pb-1" ref={cardRef}>
      <div className="card product-item mb-3 h-100">
        <div className="card-header product-img position-relative overflow-hidden bg-transparent border-0 p-0 p-4">
          <img 
            className="img-fluid w-100" 
            src={product.img} 
            alt={product.alt} // Use alt from the product object
          />
        </div>
        <div className="card mt-auto border-left border-right text-center p-0 pt-2 pb-0">
          <h6 className="text-truncate mb-2">{product.name}</h6>
        </div>
        <div className="card-footer d-flex justify-content-center bg-light border">
          <Link to="/Product" className="btn btn-primary m-1">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProductSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products based on the search query
  const filteredProducts = [
    ...Home,
    ...products
  ].filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="container-fluid pt-2" id="items1">
        {/* Search Component */}
        <Search
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filteredProducts={filteredProducts}
        />

        {/* Home Appliances Section */}
        <div className="text-center mb-4">
          <h2 className="section-title px-5"><span className="px-2">Home Appliance</span></h2>
        </div>
        <div className="row pb-3">
          {Home.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>

        {/* Electrical Department Section */}
        <div className="text-center mb-4">
          <h2 className="section-title px-5"><span className="px-2">Electrical Department</span></h2>
        </div>
        <div className="row pb-3">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductSection;
