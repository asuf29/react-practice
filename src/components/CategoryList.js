import React, { useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

function CategoryList(props) {
  const [currentCategory, setCurrentCategory] = useState(null);

  const handleClick = (category) => {
    setCurrentCategory(category);
  };

  const handleCategoryClick = (category) => {
    props.onCategorySelect(category);
  };

  return (
    <div>
      <h3>{props.title}</h3>
      <ListGroup>
        {props.categories.map((category) => (
          <ListGroupItem
            key={category.categoryId}
            onClick={() => {
              handleCategoryClick(category);
              handleClick();
            }}
            active={currentCategory === category}
          >
            {category.categoryName}
          </ListGroupItem>
        ))}
      </ListGroup>
      <p>{currentCategory && currentCategory.categoryName}</p>
    </div>
  );
}

export default CategoryList;
