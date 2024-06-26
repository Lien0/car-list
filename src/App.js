import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import AddProducts from "./components/addProducts";
import EditProducts from "./components/editProducts";
import Feet from "./components/feet";
import CashModal from "./components/modal";
import Products from "./components/products";

export default function App() {
  const [products, setProducts] = useState([]);
  const [showProduct, setShowProduct] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [selectProduct, setSelectProduct] = useState(null);
  const [cash, setCash] = useState(0);
  const [modal, setModal] = useState(true);
  const sTotal = products.map((el) => el.cost * el.quantity);
  const total = sTotal.reduce((a, b) => a + b, 0);

  function handleShowAddProduct() {
    setShowProduct((s) => !s);
    setSelectProduct(null);
  }
  function handleShowEmoji(e) {
    e.preventDefault();
    setShowEmoji((s) => !s);
  }
  function handleAddProduct(product) {
    setProducts((el) => [...el, product]);
  }
  function handleSelectProduct(product) {
    setSelectProduct((curr) => (curr?.id === product.id ? null : product));
    setShowProduct(false);
  }
  function handleCost(price, much) {
    setProducts((product) =>
      product.map((el) =>
        el.id === selectProduct.id ? { ...el, cost: price, quantity: much } : el
      )
    );
  }
  function handleDelete(product) {
    const newProducts = products.filter((curr) => curr.id !== product.id);
    setProducts(newProducts);
    setSelectProduct(false);
  }
  function handleCash(value) {
    setCash(value);
  }
  function handleModal() {
    setModal(false);
  }

  return (
    <Row className="row m-4 p-2 vh-100 align-items-center">
      <Col
        md={10}
        className="col m-4 p-3 text-center border shadow-lg mb-6 rounded rounded"
      >
        <Row>
          <div className={selectProduct ? "col-md-8" : "col-md-12"}>
            <Products
              products={products}
              onShowProduct={handleShowAddProduct}
              onSelectProduct={handleSelectProduct}
              selectedProduct={selectProduct}
              showProduct={showProduct}
            />
          </div>

          <Col md={4}>
            {selectProduct && (
              <EditProducts
                onCost={handleCost}
                onClose={setSelectProduct}
                selectProduct={selectProduct}
                onDelete={handleDelete}
              />
            )}
          </Col>

          <div className=" text-center">
            {showProduct && (
              <AddProducts
                onShowEmoji={handleShowEmoji}
                showEmoji={showEmoji}
                addProduct={handleAddProduct}
                onClose={handleShowAddProduct}
              />
            )}
          </div>

          <Row className="p-2 m-2 rounded">
            <Feet total={total} cash={cash} />
          </Row>

          <Col>
            {modal && (
              <CashModal
                modal={modal}
                setModal={setModal}
                onCash={handleCash}
                cash={cash}
                onModal={handleModal}
              />
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
