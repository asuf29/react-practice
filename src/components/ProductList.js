import React, { useState } from "react";

function ProductList(props) {
  const { title, products, selectedCategory } = props;

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) => product.category === selectedCategory.categoryId
      )
    : [];
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.productId}>{product.productName}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
