import React from "react";

import "./transport.css";

const Transport = () => {
  return (
    <div className="transport">
      <a href="/Destination">
        {" "}
        <div className="items">
          <img src="" alt="" />
          <p5>Bike</p5>
        </div>
      </a>
      <a href="/Destination">
        <div className="items">
          {" "}
          <img src="" alt="" />
          <p5>Bus</p5>
        </div>
      </a>
      <a href="/Destination">
        <div className="items">
          <img src="" alt="" /> <img src="" alt="" />
          <p5>Train</p5>
        </div>
      </a>
      <a href="/Destination">
        <div className="items">
          <img src="" alt="" /> <img src="" alt="" />
          <p5>Car</p5>
        </div>
      </a>
    </div>
  );
};
export default Transport;
