import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductInformation() {
  const productDetails = [
    { label: "Brand Name", value: "Crompton" },
    { label: "Manufacturer", value: "Crompton Greaves Consumer Electricals Limited" },
    { label: "Color", value: "Denim Blue" },
    { label: "Material", value: "ABS Plastic" },
    { label: "Mounting Type", value: "Downrod Mount" },
    { label: "Room Type", value: "Living Room, Office, Dining Room, Bedroom, Kitchen" },
    { label: "Power Source", value: "Electric" },
    { label: "Voltage", value: "40" },
    { label: "Wattage", value: "32W" },
    { label: "Speed", value: "280 RPM" },
    { label: "Included Components", value: "1 Motor, 3 Blades, 1 Downrod, 1 Canopy Set, 1 Set of Mounting Screws, 1 Warranty Card" },
    { label: "Warranty Description", value: "5 years from the date of purchase" }
  ];

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Product Information</h3>
      <Table bordered responsive>
        <tbody>
          {productDetails.map((item, index) => (
            <tr key={index}>
              <td className="fw-bold">{item.label}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ProductInformation;
