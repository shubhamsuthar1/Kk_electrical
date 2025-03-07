import React, { useState, useEffect, useRef } from 'react';
import { Card } from 'react-bootstrap';
import { Footer, Navbar } from "../components";
import services from '../api/service.json'; // Import the JSON data here
import { gsap, ScrollTrigger } from 'gsap/all'; // Import GSAP and ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

function Service() {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [visibleCount, setVisibleCount] = useState(8); // State for the number of visible services
  const cardsRef = useRef([]); // Ref to hold the service cards
  const imageRef = useRef(); // Ref for the image
  const showMoreBtnRef = useRef(); // Ref for the "Show More" button

  // Filter the services based on the search query with safety checks
  const filteredServices = services.filter((service) =>
    (service.title && service.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (service.subtitle && service.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (service.description && service.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Show services based on the current visible count
  const servicesToShow = filteredServices.slice(0, visibleCount);

  const handleShowMore = () => {
    // Animate the "Show More Services" button
    gsap.to(showMoreBtnRef.current, {
      scale: 0.9,
      opacity: 0.5,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
    });

    // Increase visible count by 8
    setVisibleCount(visibleCount + 8);
  };

  useEffect(() => {
    // Scroll-triggered animations for service cards
    gsap.utils.toArray(cardsRef.current).forEach(card => {
      gsap.fromTo(card, 
        { opacity: 0, y: 50 }, // Initial state
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // Start when the top of the card is 80% of the way down the viewport
            end: "top 20%", // End when the top of the card reaches 20% of the viewport
            toggleActions: "play none none none",
            once: true, // Trigger animation only once
          },
        }
      );
    });

    // Scroll-triggered animation for the image
    gsap.fromTo(imageRef.current, 
      { opacity: 0, y: -50 }, // Initial state
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%", // Start when the image reaches 80% of the viewport
          end: "top 20%", // End when it reaches 20% of the viewport
          toggleActions: "play none none none",
          once: true, // Trigger animation only once
        },
      }
    );
  }, []);

  useEffect(() => {
    // Animate newly revealed cards after the visibleCount is updated
    const newlyRevealedCards = cardsRef.current.slice(visibleCount - 8, visibleCount);
    newlyRevealedCards.forEach(card => {
      gsap.fromTo(card, 
        { opacity: 0, y: 50 }, // Initial state for new cards
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );
    });
  }, [visibleCount]);

  return (
    <>
      <Navbar />
      <div className="col-12 mb-3 mt-2">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search for a service..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Conditionally hide the image if there's a search query */}
      {!searchQuery && (
        <div className="card bg-dark text-white border-0 mx-3" ref={imageRef}>
          <img
            className="card-img img-fluid" // Makes image responsive
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
        </div>
      )}

      <div className="container-fluid pt-5">
        {/* Service Cards */}
        <div className="row">
          {servicesToShow.length > 0 ? (
            servicesToShow.map((service, index) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-2" key={index}> {/* Adjusting column size for different screen sizes */}
                <Card 
                  ref={(el) => cardsRef.current[index] = el} // Store each card element in the ref array
                  border="primary" 
                  style={{ width: '100%' }} // Let the card occupy full width within its column
                >
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{service.subtitle}</Card.Subtitle>
                    <Card.Text>{service.description}</Card.Text>
                    <button className="btn btn-outline-primary">Call For Inquire</button>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No services found matching your search</p>
            </div>
          )}
        </div>

        {/* Show More Button */}
        {filteredServices.length > visibleCount && (
          <div className="text-center mt-4">
            <button
              className="btn btn-outline-primary"
              onClick={handleShowMore}
              ref={showMoreBtnRef} // Assign ref to the button
            >
              Show More Services
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Service;
