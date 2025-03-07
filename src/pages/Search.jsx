// SearchBar.js
import React from "react";
import { Link } from "react-router-dom";

const Search = ({ searchQuery, setSearchQuery, filteredProducts }) => {
  return (
    <div className="position-relative w-100 mx-auto">
      <input
        type="text"
        className="form-control"
        placeholder="Search for a product..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Dropdown Search Results */}
      {searchQuery && (
        <div
          className="dropdown-menu show w-100 p-2"
          style={{ position: "absolute", top: "100%", left: 0, zIndex: 1000 }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <Link
                to="/Product"
                key={index}
                className="dropdown-item d-flex align-items-center"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "10px",
                    objectFit: "cover",
                  }}
                />
                {product.name}
              </Link>
            ))
          ) : (
            <p className="dropdown-item">No products found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
