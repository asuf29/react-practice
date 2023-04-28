import Nav from "./components/Nav";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import { Container, Row, Col } from "reactstrap";
function App() {
  const categories = [
    { categoryId: 1, categoryName: "Beverages" },
    { categoryId: 2, categoryName: "Condiments" },
  ];

  const handleCategorySelect = (category) => {
    console.log("Selected Category:", category);
  };
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
            <ProductList title="Product List" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default App;
