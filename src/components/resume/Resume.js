import React, { useState } from 'react';
import myResume from "../../images/resume.png";
import './resume.css';
import resumeLink from "../../images/resume.pdf";
import { Document } from 'react-pdf/dist/esm/entry.parcel';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const Resume = () => {

    const [setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages (numPages);
    }

    return (
        
        <div className='container-fluid' id="resume">
            <h1>MY RESUME</h1>
            <img src={myResume} />
            <Document
                file={resumeLink}
                onLoadSuccess={onDocumentLoadSuccess}>
                
            </Document>
        </div>
    );
}

export default Resume
