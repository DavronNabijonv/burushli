import React, { useState } from "react";
import "./pdf_modal.scss";
import { Document, Page } from 'react-pdf';
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";

export default function Pdf_modal({ groups, closeTogle }) {
  const [indexMovie, setIndexMovie] = useState(groups[0]);
  // const [file_pdf, setFile_pdf] = useState(groups[1]); 
  return (
    <div className="for_fix">
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
            {/* <PdfReader file={file_pdf}/> */}
          </div>

          <div className="parts">
            {groups.map((r, index) => (
              <button
                key={index}
                onClick={() => {
                  setIndexMovie(groups[index]);
                }}
              >
                {index + 1} - bob
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// function PdfReader({file}) {
//   const [numPages, setNumPages] = useState(null);
  

//   // Called when the PDF is loaded
//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }
//   return (
//     <>
//       <div className="pdf-reader-container">
//         <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
//           {Array.from(new Array(numPages), (el, index) => (
//             <Page key={`page_${index + 1}`} pageNumber={index + 1} />
//           ))}
//         </Document>
//       </div>
//     </>
//   );
// }
