import React from "react";
import "./modal.scss";

export default function Modal({ check_type, img_name, togle_modal }) {
  return (
    <>
      {check_type === "rasm" ? (
        <Rasm m_image={img_name} close_btn={togle_modal} />
      ) : (
        <Video m_video={img_name} close_btn={togle_modal} />
      )}
    </>
  );
}

function Rasm({ m_image, close_btn }) {
  return (
    <div
      onClick={() => {
        close_btn();
      }}
      className="m_group"
    >
      <img src={m_image} alt="rasm modal" />
    </div>
  );
}

function Video({ m_video, close_btn }) {
  return (
    <div
      onClick={() => {
        close_btn();
      }}
      className="m_group"
    >
      <video  controls>
        <source src={m_video}  type="video/mp4" />
        Your browser does not support the video tag
      </video>
    </div>
  );
}
