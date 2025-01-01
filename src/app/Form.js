"use client";
import { useState } from "react";

export default function MineForm({ handleChange, formData,setIsFormSubmitted }) {
  return (
    <div className="container flex min-h-screen ">
      <div className="w-full rounded-lg bg-gray-100 shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Dispatch Permit Form
        </h2>

        <form className="grid grid-cols-12 gap-4">
          {/* <div className="col-span-6">
            <label className="block text-sm font-medium text-gray-700">
              Form AP No
            </label>
            <input
              type="text"
              value="BIDNS77540003"
              readOnly
              className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            />
          </div> */}

          {[
            { label: "MDRO No", name: "mdroNo" },
            { label: "MDP No", name: "mdpNo" },
            { label: "Sr No", name: "srNo" },
            { label: "Lease No", name: "leaseNo" },
            { label: "Barcode", name: "barcode" },
            { label: "Lease Name", name: "leaseName" },
            { label: "LandType/Sy.No", name: "typesOfLand" },
            { label: "DSC No./Name", name: "dscName" },
            { label: "GST No", name: "gstNo" },
            { label: "Village / Taluk / District", name: "talukDistrict" },
            { label: "Place of Loading", name: "loadingPlace" },
            { label: "MDRO Purpose", name: "mdroPurpose" },
            { label: "Mineral / Grade", name: "mineralGrade" },
            { label: "Quantity(Tonnes) ", name: "quantity" },
            { label: "Total Amount Paid", name: "totalAmountPaid" },
            { label: "Buyer", name: "buyer" },
            { label: "Route", name: "route" },
            { label: "Check Post", name: "checkPost" },
            { label: "Destination", name: "destination" },
            { label: "Vehicle No/No of Wheels/Type/Mobile No ", name: "vehicleNo" },
            { label: "Phone", name: "phone" },
            { label: "Distance", name: "distance" },
            ].map((field) => (
            <div key={field.name} className="col-span-4 sm:col-span-3">
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700"
              >
                {field.label}
              </label>
              <input
                type="text"
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder={`Enter ${field.label}`}
              />
            </div>
          ))}

          <div className="col-span-6">
            <button
              type="submit"
              className="mt-6 w-full px-4 py-2 text-white font-bold bg-indigo-600 rounded-md shadow-md focus:ring focus:ring-indigo-200 hover:bg-indigo-500"
              onClick={()=>setIsFormSubmitted(true)}
            >
              Down Load PDF
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
