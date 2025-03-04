
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


import { FaBars, FaSearch } from "react-icons/fa";

const App = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <div className="logo bg-dark text-white p-2 rounded-circle">D</div>
        <div className="d-flex gap-3">
          <FaSearch size={20} />
          <FaBars size={20} />
        </div>
      </div>

      <div className="mt-3">
        <span className="badge bg-primary">#Top</span>
      </div>

      <h2 className="fw-bold mt-2">A Responsibly As Teach Leading, Global Company</h2>

      <p className="text-muted">Creating Superior Products & Services</p>

      <div className="d-flex align-items-center gap-2 mt-2">
        <div className="bg-dark text-white p-2 rounded-circle">★</div>
        <p className="mb-0 fw-bold">Trust Pilot <span className="text-muted">Rated Best <b>12.6K</b> Reviews</span></p>
      </div>

      <div className="d-flex mt-3">
        <div className="flex-grow-1 p-3 text-white rounded" style={{ background: "linear-gradient(4deg, #ff8a00, #e52e71)" }}>
          <div className="text-center">
            <button className="btn btn-light">Play</button>
          </div>
        </div>
        <div className="ms-3 text-center">
          <div className="bg-primary text-white p-2 rounded mb-2">72%</div>
          <div className="bg-dark text-white p-2 rounded">28%</div>
        </div>
      </div>

      <div className="mt-4">
        <button className="btn btn-outline-dark w-100 mb-2">Signup to Get 50% OFF</button>
        <button className="btn btn-dark w-100">Explore New Products</button>
      </div>
    </div>
  );
};

export default App;
