"use client";

import React, { useRef } from "react";
import PdfContent from "./PdfContent1.js"
import { useReactToPrint } from "react-to-print";

export default function PDFGenerator({formData,setIsFormSubmitted}) {
  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({ contentRef });


  return (
    <div>
      {/* PDF Content */}
      <div ref={contentRef}>
        <div className="container" >
          <PdfContent formData={formData} />
        </div>
      </div>
      <button
        type="submit"
        onClick={()=> setIsFormSubmitted(false)}
        className="mt-6 w-full px-4 py-2 text-white font-bold bg-indigo-600 rounded-md focus:ring focus:ring-indigo-200"
      >
        Edit Form
      </button>
      <button
        type="submit"
        onClick={reactToPrintFn}
        className="mt-6 w-full px-4 py-2 text-white font-bold bg-indigo-600 rounded-md focus:ring focus:ring-indigo-200"
      >
        Down Load PDF
      </button>
    </div>
  );
}
