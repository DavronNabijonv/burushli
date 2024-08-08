import React from "react";
import "./about.scss";
// images va iconlar
import about_logo from "../images/about_logo.jpg";

export default function About() {
  return (
    <div className="about">
      <div className="left_part">
        <p>
          "Burushli " media studio 2023-yilda tashkil topgan bo`lib , hozirda
          tasviriy adabiyot(komiks) sohasiga ixtisoslashgan. Keyinchalik anime
          va manga tarjimalari hamda animatsiyalar sohasida ham faoliyat
          yuritishi rejalashtirilgan.
        </p>
        <button>Bog`lanish</button>
      </div>
      <div className="right_part">
        <img src={about_logo} alt="about logo image" className="about_logo" />
      </div>
    </div>
  );
}
