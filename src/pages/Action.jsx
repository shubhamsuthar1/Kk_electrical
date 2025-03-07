import React from 'react';

const Action = () => {
  return (
    <div className="container-fluid">
      <div className="row d-flex align-items-center justify-content-between" id="backimg">
        <div className="col-lg-12 rights">
          <h1>Call Us Today!</h1>
          <p className="text-dark">Don't wait for electrical problems to escalate.</p>
          <p className="text-dark">Contact us now for a free consultation or to schedule a service</p>
          <button className="btn btn-primary py-2 px-4 text-white">Call For inquiry</button>
        </div>
        <div className="col-lg-4 Lefts">
          {/* <img className="frontS" src="img/service-img" alt="Service" /> */}
        </div>
      </div>
    </div>
  );
};

export default Action;
