import React from "react";
import "./modal.scss";

export default function Modal({ img_name, closeTogle }) {
  return (
    <div className="modal_fixed">
      <Rasm m_image={img_name} close_btn={closeTogle} />
    </div>
  );
}

function Rasm({ m_image, close_btn }) {
  return (
    <div onClick={close_btn} className="m_group">
      <img src={m_image} alt="rasm modal" />
    </div>
  );
}
