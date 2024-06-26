import Button from "./button";
import { ListGroup, Row, Container } from "react-bootstrap";
import ProductsList from "./productList";

export default function Products({
  products,
  onShowProduct,
  onSelectProduct,
  selectedProduct,
  showProduct,
}) {
  return (
    <div className="col">
      {products !== "" && (
        <div className="container">
          <h2>Artículos</h2>
          <div className="row">
            <div className="col">
              <ListGroup as="ol">
                {products.map((product) => (
                  <ListGroup.Item
                    style={{ border: "0" }}
                    as="li"
                    key={product.id}
                  >
                    <Row>
                      <ProductsList
                        product={product}
                        onSelectProduct={onSelectProduct}
                        selectedProduct={selectedProduct}
                      />
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </div>
        </div>
      )}
      <Container className="p-2 text-end">
        <Button click={onShowProduct}>
          {showProduct ? "Cerrar" : "Agregar Articulo"}
        </Button>
      </Container>
    </div>
  );
}
