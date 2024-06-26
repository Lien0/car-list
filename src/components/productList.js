import { Stack, Col, Image } from "react-bootstrap";
import Button from "./button";

export default function ProductsList({
  product,
  onSelectProduct,
  selectedProduct,
}) {
  return (
    <div
      className={
        selectedProduct?.id === product.id
          ? "bg-success bg-opacity-25 border border-success border-opacity-50 rounded-2"
          : "border rounded-2 shadow m-2"
      }
    >
      <Stack direction="horizontal" gap={3}>
        {product.image && (
          <Col md={1} className="p-2">
            <Image src={product.image} alt={product.name} roundedCircle />
          </Col>
        )}
        <Col md={8} className="p-2">
          <div className="row-md-4">{product.name}</div>
          <div className="row">
            {product.cost && <div className="col">Costo: ${product.cost}</div>}
            {product.quantity && (
              <div className="col">Cantidad: {product.quantity}</div>
            )}
            {product.quantity && (
              <div className="col">
                Total: ${product.cost * product.quantity}
              </div>
            )}
          </div>
        </Col>
        <Button stylo={selectedProduct ? "btn p-2 border-success border-opacity-50 border-2 shadow-sm" : ""} click={() => onSelectProduct(product)}>{selectedProduct ? "Cerrar" : "Seleccionar"}</Button>
      </Stack>
    </div>
  );
}
