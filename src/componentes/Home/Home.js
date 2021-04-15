import React from "react";
import "./Home.css";
import Frame from "../../images/Frame.png";
import Frame1 from "../../images/Frame-1.png";
import Frame2 from "../../images/Frame-2.png";
import Group from "../../images/Group.png";
const Home = () => {
  return (
    <div className="transport">
      <a href="/Destination">
        {" "}
        <div className="items">
          <img src={Frame} alt="" />
          <p5>Bike</p5>
        </div>
      </a>
      <a href="/Destination">
        <div className="items">
          {" "}
          <img src={Frame1} alt="" />
          <p5>Bus</p5>
        </div>
      </a>
      <a href="/Destination">
        <div className="items">
          <img src={Group} alt="" />
          <p5>Train</p5>
        </div>
      </a>
      <a href="/Destination">
        <div className="items">
          <img src={Frame2} alt="" />
          <p5>Car</p5>
        </div>
      </a>
    </div>
  );
};
export default Home;
