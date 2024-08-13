import React, { useState } from "react";
import "./ish_jarayoni.scss";
import { ish_rasmlar, ish_videolar } from "../database/ish_jarayoni_db";
import Pdf_modal from "../modal/pdf_modal";
import Modal from "../modal/modal";

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
  const [tog_ish_rasm, setTog_ish_rasm] = useState(false);
  const [imgTog, setImgTog] = useState();
  return (
    <div className="rasmlar">
      {tog_ish_rasm && (
        <Modal
          check_type={"rasm"}
          img_name={imgTog}
          closeTogle={setTog_ish_rasm(false)}
        />
      )}
      {ish_rasmlar.map((rasm) => (
        <img
          src={rasm}
          onClick={() => {setImgTog(rasm)}}
          alt="ish jarauyonidagi rasmlar"
          className="ish_rasm"
        />
      ))}
    </div>
  );
}

function Videolar() {
  const [tog_ish_video, setTog_ish_video] = useState(false);
  const [videoTog, setVideoTog] = useState();
  return (
    <div className="rasmlar">
      {tog_ish_video && (
        <Modal
          img_name={videoTog}
          closeTogle={setTog_ish_video(false)}
        />
      )}
      {ish_videolar.map((video) => (
        <video className="ish_rasm" onClick={()=>{setVideoTog(video)}} controls>
          <source src={video} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      ))}
    </div>
  );
}
