import React from "react";
import { Table, Button } from "react-materialize";

const ProductsItem = ({ _id, title, price, rmProd }) => (
  <tr>
    <td>{_id}</td>
    <td>{title}</td>
    <td>{price}</td>
    <td>
      <Button
        floating
        className="red"
        waves="light"
        icon="delete"
        onClick={() => {
          rmProd({ endpoint: "products", id: _id });
        }}
      />
    </td>
  </tr>
);

export default ProductsItem;
