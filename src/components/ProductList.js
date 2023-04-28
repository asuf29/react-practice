import React, { useState } from "react";

function ProductList(props) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  );
}

export default ProductList;
