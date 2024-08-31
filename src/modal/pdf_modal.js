import React, { useState } from "react";
import "./pdf_modal.scss";

export default function Pdf_modal({ groups, closeTogle }) {
  const [indexMovie, setIndexMovie] = useState(groups[0]);
  return (
    <div className="pdf_modal">
      <div className="modal_body">
        <button
          onClick={() => {
            closeTogle();
          }}
          className="close_btn"
        >
          Ortga
        </button>

        <div className="body">
          <iframe src={indexMovie} width="100%" height="600px"></iframe>
        </div>

        <div className="parts">
          {groups.map((r, index) => (
            <button key={index}>{index + 1} - bob</button>
          ))}
        </div>
      </div>
    </div>
  );
}
