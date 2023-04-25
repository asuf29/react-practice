import "./App.css";
import Nav from "./components/Nav";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
function App() {
  return (
    <div className="App">
      <h3>Hello React</h3>
      <Nav />
      <CategoryList />
      <ProductList />
    </div>
  );
}

export default App;
