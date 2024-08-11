import React, { useState } from "react";
import "./ish_jarayoni.scss";
import { ish_rasmlar, ish_videolar } from "../database/ish_jarayoni_db";

export default function Ish_jarayoni() {
  const [ishNav, setIshNav] = useState({
    video: false,
    rasm: true,
  });
  return (
    <div className="ish_jarayoni">
      <div className="ish_nav">
        <p
          className={`ish_nav_txt ${ishNav.video && "active"}`}
          onClick={() => {
            setIshNav({ rasm: false, video: true });
          }}
        >
          Videolar
        </p>
        <p
          className={`ish_nav_txt ${ishNav.rasm && "active"}`}
          onClick={() => {
            setIshNav({ rasm: true, video: false });
          }}
        >
          Rasmlar
        </p>
      </div>
      <div className="ish_body">{ishNav.rasm ? <Rasmlar /> : <Videolar />}</div>
    </div>
  );
}

function Rasmlar() {
  return (
    <div className="rasmlar">
      {ish_rasmlar.map((rasm) => (
        <img src={rasm} alt="ish jarauyonidagi rasmlar" className="ish_rasm" />
      ))}
    </div>
  );
}

function Videolar() {
  return (
    <div className="rasmlar">
      {ish_videolar.map((video) => (
        <video className="ish_rasm" controls>
          <source src={video} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      ))}
    </div>
  );
}
