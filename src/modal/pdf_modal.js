import React, { useState } from "react";
import './pdf_modal.scss'

export default function Pdf_modal({ groups,closeTogle }) {
  const [indexMovie, setIndexMovie] = useState(groups[0]);
  return (
    <div className="pdf_modal">
        <button onClick={()=>{closeTogle()}}>Ortga</button>

      <div className="main_group">
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
