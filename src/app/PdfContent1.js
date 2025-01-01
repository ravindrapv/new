import React from "react";
import QRCode from "qrcode";

const PDFContent = React.forwardRef((props, ref) => {
  const { formData } = props;
  const [qrCodeSVG, setQrCodeSVG] = React.useState("");
  const now = new Date();
  const future = new Date(now.getTime() + 7 * 60 * 60 * 1000);
  const formatDateTime = (date) => {
    const formattedDate = date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replace(/\//g, "/");

    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return `${formattedDate} ${formattedTime}`;
  };

  const qrCodeData = `${formData.mdroNo} | \n${formData.mdpNo} | ${
    formData.quantity
  } | \n${formatDateTime(now)} | ${formData.vehicleNo} | ${
    formData.mineralGrade
  } | ${formData.barcode} | ${formData.destination}`;

  React.useEffect(() => {
    // Generate the QR code as a PNG
    QRCode.toDataURL(qrCodeData, { type: "image/jpeg",margin: 0 }, (err, url) => {
      if (!err) {
        console.log("Generated QR Code URL:", url); // Debug log
        setQrCodeSVG(url); // Use the correct state setter
      } else {
        console.error("QR Code generation error:", err);
      }
    });
  }, [qrCodeData]);

  console.log("mithun", qrCodeData);
  return (
    <div
      ref={ref}
      dangerouslySetInnerHTML={{
        __html: `
      <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mineral Dispatch Permit</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.4;
    }

    .container {
      margin: 40px 20px 40px 30px;
      display: flex;
    }

    table {
      width: 550px;
      border-collapse: collapse;
      margin: 0 auto;
    }

    td,
    th {
      border: 1px solid black;
      font-size: 12px;
      word-wrap: break-all;
    }
    .title-width{
      width: 800px;
      font-size: 14px;
      font-weight:none;
    }
    .sign-box,
    .qr-box {
      height: 100px;
      width: 125px;
      text-align: center;
      font-weight: normal;
      font-size: 12px;
    } 

    .qr-box {
      line-height: 150px;
      vertical-align: top;
    }

    .fixed-col {
      width: 145px;
      /* Fixed width for the first column */
    }

    .colon {
      width: 10px;
      text-align: center;
    }

    .footer {
      margin-top: 10px;
      text-align: center;
      font-weight: bold;
    }

    .bold {
      font-weight: bold;
    }

    .mt {
      width: 79%;
      margin-top: 45px;
    }

    .center {
      text-align: center;
      font-weight: normal;
    }
  </style>
</head>

<body>
  <div class="container">
  <div style="margin-right:140px">
    
    <!-- Header Section -->
    <table>
      <tr>
        <th colspan="8" class="title-width"><p class="center">Government of Karnataka</p></th>
      </tr>
      <tr>
        <td colspan="7" style="padding-bottom: 0px;">
        <div style="text-align:center;font-weight: bold;font-size:14px">
          <div>Department of Mines and Geology</div>
          <div>Mineral Dispatch Permit</div>
          <div>See Rule 42(3) of KMMCR-1994</div>
        </div>
        </td>
        <td rowspan="4" class="sign-box">Sign & Seal of<br> Lessee</td>
      </tr>
      <tr>
        <td class="fixed-col">MDRO No </td>
        <td colspan="5">${formData.mdroNo}</td>
        <td>Sr. No : ${formData.srNo}</td>
      </tr>
      <tr>
        <td class="fixed-col">MDP No</td>
        <td colspan="7">${formData.mdpNo} ${formatDateTime(now)}</td>
      </tr>
      <tr>
        <td class="fixed-col">Lease No</td>
        <td colspan="4">${formData.leaseNo}</td>
        <td colspan="4">Barcode : <br />${formData.barcode}</td>
      </tr>
      <tr>
        <td>Lease Name</td>
        <td colspan="5">${formData.leaseName}</td>
        <td>LandType/Sy.No : </td>
        <td colspan="4">${formData.typesOfLand}</td>
      </tr>
      <tr>
        <td class="fixed-col">DSC No./Name</td>
        <td colspan="5">${formData.dscName}</td>
        <td>GST No : ${formData.gstNo}</td>
        <td colspan="4">${formData.typesOfLand}</td>
      </tr>
      <tr>
        <td class="fixed-col">Village / Taluk / District</td>
        <td colspan="6">${formData.talukDistrict}</td>
        <td rowspan="5" class="sign-box">Sign & Seal of<br> Check Post Officer</td>
      </tr>
      <tr>
        <td class="fixed-col">Place of Loading</td>
        <td colspan="6">${formData.loadingPlace}</td>
      </tr>
      <tr>
        <td class="fixed-col">MDRO Purpose</td>
        <td colspan="6">${formData.mdroPurpose}</td>
      </tr>
      <tr>
        <td class="fixed-col">Mineral / Grade</td> 
        <td colspan="6">${formData.mineralGrade}</td>
      </tr>
      <tr>
        <td class="fixed-col">Quantity (Tonnes)</td>
        <td colspan="6">${formData.quantity} Metric Ton(MT)</td>
      </tr>
      <tr>
        <td class="fixed-col">Total Amount Paid</td>
        <td colspan="7">${formData.totalAmountPaid}</td>
      </tr>
      <tr>
        <td class="fixed-col">Buyer</td>
        <td colspan="7">${formData.buyer}</td>
      </tr>
      <tr>
        <td class="fixed-col">Route</td>
        <td colspan="7">${formData.route}</td>
      </tr>
      <tr>
        <td class="fixed-col">Check Post</td>
        <td colspan="6">${formData.checkPost}</td>
      <td rowspan="4" class="qr-box" style="border-bottom: none; border-left: none;">
       <img src="${qrCodeSVG}" alt="QR Code" style="object-fit:cover" />
      </td>
      </tr>
      <tr>
        <td class="fixed-col">Destination</td>
        <td colspan="6">${formData.destination}</td>
      </tr>
      <tr>
        <td class="fixed-col">Vehicle No/No of Wheels/Type/Mobile No</td>
        <td colspan="6">${formData.vehicleNo} | ${formData.phone}</td>
      </tr>
      <tr>
        <td class="fixed-col">Validity</td>
        <td colspan="6">${formatDateTime(now)} – ${formatDateTime(future)}</td>
      </tr>
      <tr>
        <td class="fixed-col">Distance</td>
        <td colspan="6">${formData.distance}</td>
        <td style="border-top: none;text-align: center;">Destination Copy</td>
      </tr>
      <tr>
        <td colspan="8">
          <b>Note :</b>
          <p>- This Permit is not transferable.</p>
          <p>- The MDP is Valid, only if the mineral is Transported in a Vehicle which has required Carrying</p>
          <p>Capacity as per M.V. act 1988</p>
        </td>
        
      </tr>
    </table>
  </div>
  <div>
   <table>
      <tr>
        <th colspan="8" class="title-width"><p class="center">Government of Karnataka</p></th>
      </tr>
      <tr>
        <td colspan="7" style="padding-bottom: 0px;">
        <div style="text-align:center;font-weight: bold;font-size:14px;">
          <div>Department of Mines and Geology</div>
          <div>Mineral Dispatch Permit</div>
          <div>See Rule 42(3) of KMMCR-1994</div>
        </div>
        </td>
        <td rowspan="4" class="sign-box">Sign & Seal of<br> Lessee</td>
      </tr>
      <tr>
        <td class="fixed-col">MDRO No </td>
        <td colspan="5">${formData.mdroNo}</td>
        <td>Sr. No : ${formData.srNo}</td>
      </tr>
      <tr>
        <td class="fixed-col">MDP No</td>
        <td colspan="7">${formData.mdpNo} ${formatDateTime(now)}</td>
      </tr>
      <tr>
        <td class="fixed-col">Lease No</td>
        <td colspan="4">${formData.leaseNo}</td>
        <td colspan="4">Barcode : <br />${formData.barcode}</td>
      </tr>
      <tr>
        <td>Lease Name</td>
        <td colspan="5">${formData.leaseName}</td>
        <td>LandType/Sy.No : </td>
        <td colspan="4">${formData.typesOfLand}</td>
      </tr>
      <tr>
        <td class="fixed-col">DSC No./Name</td>
        <td colspan="5">${formData.dscName}</td>
        <td>GST No : ${formData.gstNo}</td>
        <td colspan="4">${formData.typesOfLand}</td>
      </tr>
      <tr>
        <td class="fixed-col">Village / Taluk / District</td>
        <td colspan="6">${formData.talukDistrict}</td>
        <td rowspan="5" class="sign-box">Sign & Seal of<br> Check Post Officer</td>
      </tr>
      <tr>
        <td class="fixed-col">Place of Loading</td>
        <td colspan="6">${formData.loadingPlace}</td>
      </tr>
      <tr>
        <td class="fixed-col">MDRO Purpose</td>
        <td colspan="6">${formData.mdroPurpose}</td>
      </tr>
      <tr>
        <td class="fixed-col">Mineral / Grade</td> 
        <td colspan="6">${formData.mineralGrade}</td>
      </tr>
      <tr>
        <td class="fixed-col">Quantity (Tonnes)</td>
        <td colspan="6">${formData.quantity} Metric Ton(MT)</td>
      </tr>
      <tr>
        <td class="fixed-col">Total Amount Paid</td>
        <td colspan="7">${formData.totalAmountPaid}</td>
      </tr>
      <tr>
        <td class="fixed-col">Buyer</td>
        <td colspan="7">${formData.buyer}</td>
      </tr>
      <tr>
        <td class="fixed-col">Route</td>
        <td colspan="7">${formData.route}</td>
      </tr>
      <tr>
        <td class="fixed-col">Check Post</td>
        <td colspan="6">${formData.checkPost}</td>
     <td rowspan="4" class="qr-box" style="border-bottom: none; border-left: none;">
       <img src="${qrCodeSVG}" alt="QR Code" style="object-fit:cover" />
      </td>
      </tr>
      <tr>
        <td class="fixed-col">Destination</td>
        <td colspan="6">${formData.destination}</td>
      </tr>
      <tr>
        <td class="fixed-col">Vehicle No/No of Wheels/Type/Mobile No</td>
        <td colspan="6">${formData.vehicleNo} | ${formData.phone} </td>
      </tr>
      <tr>
        <td class="fixed-col">Validity</td>
        <td colspan="6">${formatDateTime(now)} – ${formatDateTime(future)}</td>
      </tr>
      <tr>
        <td class="fixed-col">Distance</td>
        <td colspan="6">${formData.distance}</td>
        <td style="border-top: none; text-align: center;">Destination Copy</td>
      </tr>
      <tr>
        <td colspan="8">
          <b>Note :</b>
          <p>- This Permit is not transferable.</p>
          <p>- The MDP is Valid, only if the mineral is Transported in a Vehicle which has required Carrying</p>
          <p>Capacity as per M.V. act 1988</p>
        </td>
      </tr>
    </table>
  </div>
  </div>
</body>

</html>`,
      }}
    />
  );
});

export default PDFContent;