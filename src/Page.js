"use client";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import PDFGenerator from "./PdfPreview";
import MineForm from "./Form";

export default function LandForm() {
  const [isFormSubmitted,setIsFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    srNo: "000001",
    mdroNo:"242520859B000002",
    mdpNo: "242520859T000090",
    leaseNo: "BIDNS76",
    barcode: "SZW60060174",
    leaseName: "M/s Harkood Shri Minerals & Suppliers",
    typesOfLand: "PattaLand /62/*4,62/*/5",
    dscName: "",
    gstNo: "",
    talukDistrict: "Hipparaga Ghat/Basavakalyan/Bidar",
    loadingPlace: "Hipparaga Ghat",
    mdroPurpose:"D2 -InState sale to Mineral based Industry",
    mineralGrade: "Laterite | Grade A.",
    quantity: "50",
    totalAmountPaid: "5280",
    buyer: "Shree Cement Ltd",
    route: "Bidar (D), Basavakalyan (T), Hipaparga Ghat (V) To Gulbarga (D),sedam (T), kodla (V) (111 Kms) (RouteDet : InState)",
    checkPost: "No Checkpost",
    destination: "kodla - 585222",
    vehicleNo: "KA35C 5082 | Tipper",
    phone: "9164540678",
    distance:"111",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          
          <div className="bg-white rounded-lg shadow-md p-6">
          {isFormSubmitted ? 
            <PDFGenerator formData={formData} setIsFormSubmitted={setIsFormSubmitted} /> 
            : <MineForm handleChange={handleChange} formData={formData} setIsFormSubmitted={setIsFormSubmitted} /> 
          } 
          </div>
        </div>
      </div>
    </div>
  );
}
