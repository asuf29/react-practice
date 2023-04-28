import { useState } from "react";
import Nav from "./components/Nav";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import { Container, Row, Col } from "reactstrap";
function App() {
  const categories = [
    { categoryId: 1, categoryName: "Beverages" },
    { categoryId: 2, categoryName: "Condiments" },
  ];

  const [products, setProducts] = useState([
    { productId: 1, productName: "Coffee", category: 1 },
    { productId: 2, productName: "Tea", category: 1 },
    { productId: 3, productName: "Ketchup", category: 2 },
    { productId: 4, productName: "Mustard", category: 2 },
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    console.log("Selected Category:", category);
  };

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) => product.category === selectedCategory.categoryId
      )
    : products;

  return (
    <div className="App">
      <Container>
        <Row>
          <Nav />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList
              title="Category List"
              categories={categories}
              onCategorySelect={handleCategorySelect}
            />
          </Col>
          <Col xs="9">
            <ProductList
              title="Product List"
              products={filteredProducts}
              selectedCategory={selectedCategory}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default App;
