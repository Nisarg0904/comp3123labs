import React from "react";

function SubmittedData({ data }) {
  return (
    <div className="submitted-data">
      <h2>Submitted Information</h2>
      <p>Email: {data.email}</p>
      <p>Full Name: {data.fullName}</p>
      <p>Address: {data.address}</p>
      <p>City: {data.city}</p>
      <p>Province: {data.province}</p>
      <p>Postal Code: {data.postalCode}</p>
    </div>
  );
}

export default SubmittedData;
